const express = require("express");
const axios = require("axios");
const {Movie, List, Comment} = require("../controllers/movie");
const router = express.Router();

router.get("/", List);
router.get("/detail/:id", Movie);
router.post("/moviecomment", Comment);

module.exports = router;