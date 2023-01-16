var express = require('express');
var router = express.Router();
var trabajosModel = require('../../models/trabajosModel')

router.get('/', async function (req, res, next) {
    var trabajos = await trabajosModel.getTrabajos();
    res.render('admin/trabajos',
        {
            layout: 'admin/layout',
            nombre: req.session.nombre,
            trabajos
        }
    );
});

module.exports = router;