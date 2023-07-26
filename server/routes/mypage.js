const express = require("express");
const {
  myMeet,
  myPost,
  myInquiry,
  writeInquiry,
} = require("../controllers/mypage");

const router = express.Router();

router.get("/meetlist/:id", myMeet);
router.get("/postlist/:id", myPost);
router.get("/inquirylist/:id", myInquiry);
router.post("/inquiryWrite", writeInquiry);
module.exports = router;
