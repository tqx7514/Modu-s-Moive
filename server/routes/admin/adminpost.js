const express = require("express");
const {
  adminpostlist,
  adminpostread,
  adminpostdelete,
} = require("../../controllers/admin/adminpost");
const router = express.Router();

router.get("/postlist", adminpostlist);
router.get("/detail/:postNum", adminpostread);
router.delete("/:postNum", adminpostdelete);

module.exports = router;
