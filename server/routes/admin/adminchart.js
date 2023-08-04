const express = require("express");
const {
  genderData,
  categoryData,
  regionData,
  dateData,
  ageData,
  incomeData,
  monthData,
  movieData,
} = require("../../controllers/admin/adminchart");
const router = express.Router();

router.get("/user/gender", genderData);
router.get("/user/age", ageData);
router.get("/inquiry/category", categoryData);
router.get("/meet/region", regionData);
router.get("/posts/date", dateData);
router.get("/main/income", incomeData);
router.get("/main/month", monthData);
router.get("/main/movie", movieData);

module.exports = router;
