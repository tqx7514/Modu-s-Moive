const express = require('express');
const router = express.Router();
const {cinema, regions} = require('../models');

router.get('/cinema', async (req, res) => {
    try{
        const cinemas = await cinema.findAll({
            order: [['cinema', 'ASC']],
            include: [{
                model: regions,
            }]
        });
        console.log(cinemas);

        res.status(200).json(cinemas);
    } catch(e){
        console.error(e);
    }
});

  module.exports = router;