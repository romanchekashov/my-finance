import express from 'express';
var router = express.Router();

/*
 public enum MonthCodes {
 F, // January
 G, // February
 H, // March
 J, // April
 K, // May
 M, // June
 N, // July
 Q, // August
 U, // September
 V, // October
 X, // November
 Z, // December
 }
 */
/* GET users listing. */
router.get('/quote-last-trade-date', (req, res, next) => {
    const param = req.query.q;

    res.json([
          {code:"BZ", symbol:"BZX16.NYM", lastTradeDate: 1475193600000},
          {code:"BZ", symbol:"BZZ16.NYM", lastTradeDate: 1477872000000},
          {code:"BZ", symbol:"BZF17.NYM", lastTradeDate: 1480464000000},
          {code:"BZ", symbol:"BZG17.NYM", lastTradeDate: 1482969600000}
      ]);
});

/*app.get('/api/quote-last-trade-date0', (req, res) => {
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
});*/

module.exports = router;
