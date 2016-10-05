var express = require('express');
var router = express.Router();
var fs = require('fs');

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});

router.get('/atlassian-connect.json', (req, res) => {
  var descriptor = JSON.parse(fs.readFileSync('generated/atlassian-connect.json'));
  res.status(200).send(descriptor);
  res.end();
});

module.exports = router;
