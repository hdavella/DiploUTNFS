var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  var conocido = Boolean(req.session.nombre);
  res.render('index', {
    title:'Sesiones en express.js - Tarea M4U4',
    conocido:conocido,
    nombre:req.session.nombre,
    var1: 'prueba de variables'
  });
 
});

router.get('/salir', function(req,res){
  req.session.destroy();
  res.redirect('/');
});

router.post('/ingresar', function(req,res){
  if(req.body.nombre){
    req.session.nombre = req.body.nombre
  }
  res.redirect('/');
});

module.exports = router;
