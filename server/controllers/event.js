const {events} = require("../models");

exports.getEvents = async ( req, res ) => {
    try {
        const event = await events.findAll({
            attributes: ["eventNum", "eventTitle", "eventImg", "startEventDate", "endEventDate", "categoryId"],
        });
        res.status(200).json(event);
    } catch (error) {
        console.error(error);
        res.status(500).json({ error: "Internal Server Error" });
    }
};

exports.movieEvents = async (req, res) => {
    try {
        const movieEvent = await events.findAll({});
        res.status(200).json(movieEvent);
    } catch (error) {
        console.error(error);
        res.status(500).json({error: "Internal Server Error"});
    }
};