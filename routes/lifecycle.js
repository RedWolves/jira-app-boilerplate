var express = require('express');
var router = express.Router();
var debug = require('debug')('JIRA:lifecycle');

router.post("/installed", (req, res, err) => {
  debug("Webhook posted: installed");
  debug("Installation payload:");
  console.log(req.body);
  res.sendStatus(200);
  res.end();
});

router.post("/uninstalled", (req, res, err) => {
  debug("Webhook posted: uninstalled");
  console.log(req.body);
  res.sendStatus(200);
  res.end();
});

router.post("/enabled", (req, res, err) => {
  debug("Webhook posted: enabled");
  console.log(req.body);
  res.sendStatus(200);
  res.end();
});

router.post("/disabled", (req, res, err) => {
  debug("Webhook posted: disabled");
  console.log(req.body);
  res.sendStatus(200);
  res.end();
});

module.exports = router;