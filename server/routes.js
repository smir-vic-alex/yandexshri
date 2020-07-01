var router = require('express').Router(),
    controllers = require('./controllers');

router
    .get('/ping/', function(req, res) {
        res.send('ok');
    })
    .get('/', controllers.getContent);

module.exports = router;
