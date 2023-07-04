const express = require("express");
const router = express.Router();
const { getEvents, movieEvents } = require("../controllers/event");

router.get("/", getEvents);
router.get("/movie", movieEvents);

module.exports = router;