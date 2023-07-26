const express = require("express");
const { inquiryList } = require("../../controllers/admin/admininquiry");
const router = express.Router();

router.get("/list/:page", inquiryList);

module.exports = router;
