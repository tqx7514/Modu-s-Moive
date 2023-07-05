const express = require("express");
const {
  meetWrite,
  meetRead,
  meetlist,
  meetUpdate,
  meetDelete,
  meetJoin,
  meetWithdraw,
} = require("../controllers/meet");
const router = express.Router();

router.post("/write", meetWrite);
router.get("/detail/:meetNum", meetRead);
router.get("/list", meetlist);
router.patch("/detail/:meetNum", meetUpdate);
router.delete("/:meetNum", meetDelete);
router.post("/join", meetJoin);
router.post("/withdraw", meetWithdraw);

module.exports = router;
