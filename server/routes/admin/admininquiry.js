const express = require("express");
const {
  inquiryList,
  updateAnswer,
} = require("../../controllers/admin/admininquiry");
const router = express.Router();

router.get("/list/:page", inquiryList);
router.post("/update/:inquiryNum", updateAnswer);

module.exports = router;
