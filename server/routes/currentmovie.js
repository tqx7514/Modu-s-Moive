const express = require("express");
const axios = require("axios");
const {Movie, List} = require("../controllers/movie");
const router = express.Router();

router.get("/", List);
router.get("/detail/:id", Movie);


module.exports = router;