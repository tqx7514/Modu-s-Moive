const express = require("express");
const { write, postlist } = require("../controllers/post");
const router = express.Router();

router.post("/write", write);
router.post("/postlist", postlist);

module.exports = router;