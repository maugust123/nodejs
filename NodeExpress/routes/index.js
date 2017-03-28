var express = require('express');
var router = express.Router();
var users = require('../systemUsers.json');

/* GET home page. */
router.get('/', function (req, res, next) {
    res.render('index', {
        title: 'Express',
        myName:'Morgan',
        users: users
    });
});

module.exports = router;
