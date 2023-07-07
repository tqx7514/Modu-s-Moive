const express = require("express");
const router = express.Router();
const { getEvents, eventMovies } = require("../controllers/event");

router.get("/", getEvents);
router.get("/movie", eventMovies);

module.exports = router;