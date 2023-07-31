const express = require("express");
const {
  genderData,
  categoryData,
  regionData,
} = require("../../controllers/admin/adminchart");
const router = express.Router();

router.get("/user/gender", genderData);
router.get("/inquiry/category", categoryData);
router.get("/meet/region", regionData);

module.exports = router;
