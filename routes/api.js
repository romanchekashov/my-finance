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
  res.json([
          {code:"BZ", symbol:"BZX16.NYM", lastTradeDate: 1475193600000},
          {code:"BZ", symbol:"BZZ16.NYM", lastTradeDate: 1477872000000},
          {code:"BZ", symbol:"BZF17.NYM", lastTradeDate: 1480464000000},
          {code:"BZ", symbol:"BZG17.NYM", lastTradeDate: 1482969600000}
      ]);
});

module.exports = router;
