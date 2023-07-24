const express = require("express");
const {
  adminpostlist,
  adminpostread,
} = require("../../controllers/admin/adminpost");
const router = express.Router();

router.get("/postlist", adminpostlist);
router.get("/detail/:postNum", adminpostread);

module.exports = router;
