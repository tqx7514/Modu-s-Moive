const express = require("express");
const {
  genderData,
  categoryData,
  regionData,
  dateData,
} = require("../../controllers/admin/adminchart");
const router = express.Router();

router.get("/user/gender", genderData);
router.get("/inquiry/category", categoryData);
router.get("/meet/region", regionData);
router.get("/posts/date", dateData);

module.exports = router;
