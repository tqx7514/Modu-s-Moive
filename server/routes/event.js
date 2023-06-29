const express = require("express");
const router = express.Router();
const {events} = require("../models");

router.get("/event", async (req, res) => {
  try {
    const event = await events.findAll({
      attributes: ["eventNum", "eventTitle", "eventImg", "startEventDate", "endEventDate", "categoryId"],
    });
    res.status(200).json(event);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: "Internal server error"});
  }
});

module.exports = router;
