const express = require("express");
const { meetWrite, meetRead } = require("../controllers/meet");
const router = express.Router();

router.post("/write", meetWrite);
router.get("/:meetNum", meetRead);

module.exports = router;
