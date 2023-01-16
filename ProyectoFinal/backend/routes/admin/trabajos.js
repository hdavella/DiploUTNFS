var express = require('express');
var router = express.Router();
var trabajosModel = require('../../models/trabajosModel')

router.get('/', async (req, res, next) =>{
    var trabajos = await trabajosModel.getTrabajos();
    res.render('admin/trabajos',
        {
            layout: 'admin/layout',
            nombre: req.session.nombre,
            trabajos
        }
    );
});

router.get('/agregar', (req, res, next) => {
    res.render('admin/agregar', {
        layout:'admin/layout'
    });
});
router.post('/agregar', async (req, res, next)=>{
    try{
        if(req.body.titulo != "" && req.body.subtitulo != "" && req.body.descripcion != ""){
            await trabajosModel.altaTrabajo(req.body);
            res.redirect('/admin/trabajos')
        } else {
            res.render('admin/agregar', {
                layout: 'admin/layout',
                error:true,
                message: 'Todos los campos son requeridos'
            })
        }
    }catch{
        console.log(error);
        res.render('admin/agregar', {
            layout: 'admin/layout',
            error:true,
            message: 'No se cargo el trabajo'
        })
    }
})

module.exports = router;