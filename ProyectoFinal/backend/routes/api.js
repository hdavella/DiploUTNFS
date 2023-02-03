var express = require('express');
var router = express.Router();
var trabajosModel = require('../models/trabajosModel');
var cloudinary = require('cloudinary').v2;

router.get('/trabajos', async (req, res, next) =>{

    let trabajos = await trabajosModel.getTrabajos();

    trabajos = trabajos.map( (trabajo)=>{
        if(trabajo.img_id){
            const imagen = cloudinary.url(trabajo.img_id,{
                width:100,
                height:100,
                crop:"fill"
            });
            return{
                ...trabajo, imagen
            }
        }else{
            return{
                ...trabajo, imagen:""
            }
        }
    });


    res.json(trabajos);
});

module.exports = router;