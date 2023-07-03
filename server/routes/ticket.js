const express = require('express');
const router = express.Router();
const {cinemas} = require('../models');

router.get('/cinema', async (req, res) => {
    console.log('sssssssssssssss');
    try{
        const cinemas = await cinemas.findAll({
            order: [['cinema', 'ASC']],
        });

        res.status(200).json(cinemas);
    } catch(e){
        console.error(e);
    }
});

  module.exports = router;