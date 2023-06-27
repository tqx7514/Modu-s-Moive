const express = require('express');
const router = express.Router();
const {cinemas, regions} = require('../models');

router.get('/region', async (req, res) => {
    try{
        const region = await regions.findAll({});
        const cinema = await cinemas.findAll({
            include:[{
                model: regions,
                as: 'grade_region',
            }],
        });
        res.status(200).json({region,cinema});
    } catch(e){
        console.error(e);
    }
});

router.get('/cinema', async (req, res) => {
    try{
        const {grade} = req.query;
        const cinema = await cinemas.findAll({
            include:[{
                model: regions,
                as: 'grade_region',
                where: {grade},
            }],
            order: [['cinema', 'ASC']],
        });
        res.status(200).json(cinema);
    } catch(e){
        console.error(e);
    }
})


  module.exports = router;