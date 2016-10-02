var express = require('express');
import expressJwt from 'express-jwt';
var path = require('path');
var favicon = require('serve-favicon');
var logger = require('morgan');
var cookieParser = require('cookie-parser');
var bodyParser = require('body-parser');

var routes = require('./routes/index');
var users = require('./routes/users');
import login from './routes/login';
import api from './routes/api';

var app = express();
// const env = process.env.NODE_ENV || 'development';
const env = 'development';

console.log(env, process.env.JWT_SECRET);

if (env === 'production') {
  console.log(process.env.PORT);
  app.set('port', (process.env.PORT || 3000));
  app.use(express.static(path.join(__dirname, 'client/build')));
} else {
  app.set('port', (process.env.API_PORT || 3001));
}

//
// Authentication
// -----------------------------------------------------------------------------
app.use(expressJwt({
  secret: process.env.JWT_SECRET,
  credentialsRequired: false,
  getToken: req => {
    if(req.cookies) return req.cookies.id_token;
    return null;
  },
}).unless({path: ['/login']}));

app.listen(app.get('port'), () => {
  console.log(`Find the server at: http://localhost:${app.get('port')}/`); // eslint-disable-line no-console
});
app.get('/api/quote-last-trade-date0', (req, res) => {
  const param = req.query.q;

  if (!param) {
    // res.json({
    //   error: 'Missing required parameter `q`',
    // });
    res.json([
      {code:"B", symbol:"BZ", lastTradeDate: 123123523420}
    ]);
    return;
  }

  const r = db.exec(`
    select ${COLUMNS.join(', ')} from entries
    where description like '%${param}%'
    limit 100
  `);

  if (r[0]) {
    res.json(
      r[0].values.map((entry) => {
        const e = {};
        COLUMNS.forEach((c, idx) => {
          e[c] = entry[idx];
        });
        return e;
      }),
    );
  } else {
    res.json([]);
  }
});

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'hbs');

// uncomment after placing your favicon in /public
//app.use(favicon(path.join(__dirname, 'public', 'favicon.ico')));
app.use(logger('dev'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(require('less-middleware')(path.join(__dirname, 'public')));
app.use(express.static(path.join(__dirname, 'public')));

app.use('/', routes);
app.use('/users', users);
app.use('/login', login);
app.use('/api', api);

// catch 404 and forward to error handler
app.use(function(err, req, res, next) {
  console.log(err, req, res, next);
  if (err.name === 'UnauthorizedError') {
    // res.status(401).send('invalid token...');
    res.redirect('/login');
  } else {
    var err1 = new Error('Not Found');
    err1.status = 404;
    next(err1);
  }
});

// error handlers

// development error handler
// will print stacktrace
if (app.get('env') === 'development') {
  app.use(function(err, req, res, next) {
    res.status(err.status || 500);
    res.render('error', {
      message: err.message,
      error: err
    });
  });
}

// production error handler
// no stacktraces leaked to user
app.use(function(err, req, res, next) {
  res.status(err.status || 500);
  res.render('error', {
    message: err.message,
    error: {}
  });
});


module.exports = app;
