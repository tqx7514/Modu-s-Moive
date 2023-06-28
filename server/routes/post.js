const express = require("express");
const { write } = require("../controllers/post");
const router = express.Router();

router.post("/write", write);

module.exports = router;