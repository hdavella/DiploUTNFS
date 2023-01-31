var express = require('express');
var router = express.Router();
var trabajosModel = require('./../models/trabajosModel');

router.get('/trabajos', async (req, res, next) =>{

    let trabajos = await trabajosModel.getTrabajos();
    res.json.trabajos;
});

module.exports = router;