const express = require("express");
const router = express.Router();
const { getEvents } = require("../controllers/event");

router.get("/", getEvents);

module.exports = router;