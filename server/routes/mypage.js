const express = require("express");
const { myMeet, myPost, myInquiry } = require("../controllers/mypage");

const router = express.Router();

router.get("/meetlist/:id", myMeet);
router.get("/postlist/:id", myPost);
router.get("/inquirylist/:id", myInquiry);

module.exports = router;
