const express = require("express");
const { Region, Cinema } = require("../controllers/cinema");
const router = express.Router();

router.get("/", Cinema);
router.get("/region", Region);

module.exports = router;