const express = require('express');
const router = express.Router();
const {cinema} = require('../models');

router.get('/cinema', async (req, res) => {
    try{
        const cinemas = await cinema.findAll({
            order: [['cinema', 'ASC']],
        });

        res.status(200).json(cinemas);
    } catch(e){
        console.error(e);
    }
});

  module.exports = router;