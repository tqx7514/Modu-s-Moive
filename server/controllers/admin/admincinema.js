const {Op} = require("sequelize");
const {cinemas} = require("../../models");

exports.ViewCinema = async(req, res) => {
    const category = req.query.category;
    const page = req.params.page;
    if (page < 1) {
        res.status(400);
        return;
    }
    const limit = 10;
    const offset = (page - 1) * limit;
    const where = {};

    if(category === "2") {
        where.answer = {
            [Op.ne]: "",
        };
    } else if (category === "3") {
        where.answer = {
            [Op.eq]: "",
        };
    }
    try{
        const cinemalist = await cinemas.findAndCountAll({
            where,
            limit,
            offset,
            order: [["cinema_num", "DESC"]],
        });

        const {rows: cinema, count} = cinemalist;
        const lastPage = count ? Math.ceil(count / limit) : 1;
        res.json({cinema, count, lastPage})
    } catch(error) {
        res.status(500).json(error);
    }
};