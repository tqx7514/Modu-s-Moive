const { events } = require("../models");

exports.getEvents = async (req, res) => {
  eventNum = req.params.eventNum;
  try {
    const event = await events.findAll({});

    res.status(200).json(event);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: "Internal Server Error" });
  }
};

exports.GetMovieEvents = async (req, res) => {
  const eventNum = req.params.eventNum;
  try {
    const eventDetail = await events.findOne({
      where: { eventNum },
    });

    res.status(200).json(eventDetail);
  } catch (error) {
    res.status(500).json({ error: "Internal Server Error" });
  }
};

exports.GetPromoteEvents = async (req, res) => {
  eventNum = req.params.eventNum;
  try {
    const eventDetail = await events.findOne({
      where: { eventNum },
    });

    res.status(200).json(eventDetail);
  } catch (error) {
    res.status(500).json({ error: "Internal Server Error" });
  }
};

exports.GetOtherEvents = async (req, res) => {
  eventNum = req.params.eventNum;
  try {
    const eventDetail = await events.findOne({
      where: { eventNum },
    });

    res.status(200).json(eventDetail);
  } catch (error) {
    res.status(500).json({ error: "Internal Server Error" });
  }
};

exports.GetEventDetail = async (req, res) => {
  eventNum = req.params.eventNum;
  try {
    const eventDetail = await events.findOne({
      where: { eventNum },
    });

    eventDetail.view += 1;
    await eventDetail.save();

    res.status(200).json(eventDetail);
  } catch (error) {
    res.status(500).json({ error: "Internal Server Error" });
  }
};
