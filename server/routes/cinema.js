const express = require("express");
const {
  Region,
  Cinema,
  MyCinema,
  viewCinema,
  MyCinemaDel,
} = require("../controllers/cinema");
const router = express.Router();

router.get("/", Cinema);
router.get("/region", Region);
router.post("/mycinema", MyCinema);
router.get("/viewcinema", viewCinema);
router.delete("/mycinema/delete", MyCinemaDel);

module.exports = router;
