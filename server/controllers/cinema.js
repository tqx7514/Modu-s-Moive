const {regions, cinemas} = require("../models");

exports.Cinema = async(req, res) => {
    try{
        const cinema = await cinemas.findAll({});
        res.status(200).json(cinema);
    } catch (error) {
        res.status(500).json(error)
    }
};

exports.Region = async(req, res) => {
    try{
        const region = await regions.findAll({});
    res.status(200).json(region);
    } catch (e) {
        res.status(500).json(e);
    }
};
