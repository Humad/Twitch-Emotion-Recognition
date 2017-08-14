var express = require('express');
var router = express.Router();

/* GET home page. */

router.get('/', function(req, res) {
    res.render('index', {});
});

router.post('/application', function(req, res) {
    console.log(req.body.twitchLink);
    res.render('application', {twitchLink : req.body.twitchLink});
});

router.get('/results', function(req, res) {
    res.render('results', {});
});

module.exports = router;
