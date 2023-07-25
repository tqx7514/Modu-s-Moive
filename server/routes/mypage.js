const express = require("express");
const { myMeet } = require("../controllers/mypage");

const router = express.Router();

router.get("/meetlist/:id", myMeet);

module.exports = router;
