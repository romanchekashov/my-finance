import React from 'react';
import ReactDOM from 'react-dom';
import { Router, Route, IndexRoute, hashHistory } from 'react-router';

import App from './App';
import Login from './components/Login/Login';
import QuoteLastTradeDate from './components/QuoteLastTradeDate/QuoteLastTradeDate';

import 'bootstrap/dist/css/bootstrap.css';
import 'bootstrap/dist/css/bootstrap-theme.css';
import './dashboard.css';
import './index.css';

ReactDOM.render(
  <Router history={hashHistory}>
    <Route path="/" component={App}>
      <IndexRoute component={Login} />
      <Route path="/login" component={Login}/>
      <Route path="/quoteLastTradeDate" component={QuoteLastTradeDate}/>
    </Route>
  </Router>,
  document.getElementById('root')
);
