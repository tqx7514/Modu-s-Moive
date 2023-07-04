const express = require("express");
const { write, postRead, postlist } = require("../controllers/post");
const router = express.Router();

router.post("/write", write);
router.get("/detail/:postNum", postRead);
router.post("/postlist", postlist);

module.exports = router;
