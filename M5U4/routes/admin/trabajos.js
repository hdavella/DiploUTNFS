var express = require('express');
var router = express.Router();

router.get('/', async (req, res, next) =>{
    res.render('admin/trabajos',
        {
            layout: 'admin/layout',
            nombre: req.session.nombre
        }
    );
});

module.exports = router;