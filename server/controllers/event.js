const {events} = require("../models");

exports.getEvents = async ( req, res ) => {
    try {
        const event = await events.findAll({});
        res.status(200).json(event);
    } catch (error) {
        console.error(error);
        res.status(500).json({ error: "Internal Server Error" });
    }
};

exports.eventMovies = async (req, res) => {
    try {
        const eventMovie = await events.findAll({});
        res.status(200).json(eventMovie);
    } catch (error) {
        console.error(error);
        res.status(500).json({error: "Internal Server Error"});
    }
};