const express = require("express");
const { meetWrite, meetRead, meetlist } = require("../controllers/meet");
const router = express.Router();

router.post("/write", meetWrite);
router.get("/detail/:meetNum", meetRead);
router.get("/list", meetlist);

module.exports = router;
