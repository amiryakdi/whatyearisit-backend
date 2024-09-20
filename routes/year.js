var express = require('express');
var router = express.Router();


router.get('/', function(req, res) {
  const currentYear = new Date().getFullYear().toString();
  res.json({ year: currentYear });
});

module.exports = router;
