const express = require("express");
const router = express.Router();
const { getEvents, GetMovieEvents, GetPromoteEvents, GetOtherEvents, GetEventDetail } = require("../controllers/event");

router.get("/", getEvents);
router.get("/movie/:eventNum", GetMovieEvents);
router.get("/promote/:eventNum", GetPromoteEvents);
router.get("/other/:eventNum",GetOtherEvents);
router.get("/:eventNum/view",GetEventDetail);

module.exports = router;