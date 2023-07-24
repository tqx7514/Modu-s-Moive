const express = require("express");
const {
  adminEventList,
  adminEventRead,
  adminEventWrite,
  adminEventUpdate,
  adminEventDelete,
} = require("../../controllers/admin/adminevent");
const router = express.Router();

// 관리자 이벤트 페이지

router.get("/admin/event/", adminEventList);
router.get("/admin/event/:eventNum", adminEventRead);
router.post("/admin/event/write", adminEventWrite);
router.delete("/admin/event/:eventNum", adminEventDelete);
router.patch("/admin/event/:eventNum", adminEventUpdate);

module.exports = router;
