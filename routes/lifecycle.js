var express = require('express');
var router = express.Router();
var debug = require('debug')('JIRA:server');

router.post("/installed", (req, res, err) => {
  debug("Lifecycle: installed");
  debug("Installation payload:");
  console.log(req.body);
  res.sendStatus(200);
  res.end();
});

router.post("/uninstalled", (req, res, err) => {
  debug("Lifecycle: uninstalled");
  console.log(req.body);
  res.sendStatus(200);
  res.end();
});

router.post("/enabled", (req, res, err) => {
  debug("Lifecycle: enabled");
  console.log(req.body);
  res.sendStatus(200);
  res.end();
});

router.post("/disabled", (req, res, err) => {
  debug("Lifecycle: disabled");
  console.log(req.body);
  res.sendStatus(200);
  res.end();
});

module.exports = router;