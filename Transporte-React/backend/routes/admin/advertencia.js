var express = require('express');
var router = express.Router();

router.get('/', function (req, res, next) {
    res.render('admin/advertencia', { layout: 'admin/layout' });
});

module.exports = router;