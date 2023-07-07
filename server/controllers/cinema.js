const {regions, cinemas} = require("../models");

exports.Reigon = async(req, res) => {
    try{
        const region = await regions.findAll({});
    res.status(200).json(region);
    } catch (e) {
        res.status(500).json(e);
    }
}
