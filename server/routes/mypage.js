const express = require("express");
const { myMeet, myPost } = require("../controllers/mypage");

const router = express.Router();

router.get("/meetlist/:id", myMeet);
router.get("/postlist/:id", myPost);

module.exports = router;
