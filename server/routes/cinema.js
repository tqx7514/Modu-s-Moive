const express = require("express");
const { Region, Cinema, MyCinema, viewCinema } = require("../controllers/cinema");
const router = express.Router();

router.get("/", Cinema);
router.get("/region", Region);
router.post("/mycinema", MyCinema);
router.get("/viewcinema", viewCinema)

module.exports = router;