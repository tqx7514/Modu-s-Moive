const express = require("express");
const { genderData } = require("../../controllers/admin/adminchart");
const router = express.Router();

router.get("/user/gender", genderData);

module.exports = router;
