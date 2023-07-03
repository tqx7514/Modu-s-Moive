const express = require("express");
const {
  meetWrite,
  meetRead,
  meetlist,
  meetUpdate,
  meetDelete,
} = require("../controllers/meet");
const router = express.Router();

router.post("/write", meetWrite);
router.get("/detail/:meetNum", meetRead);
router.get("/list", meetlist);
router.patch("/detail/:meetNum", meetUpdate);
router.delete("/:meetNum", meetDelete);

module.exports = router;
