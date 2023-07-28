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

//   /admin 생략해도 됨
router.get("/list", adminEventList);
router.get("/detail/:eventNum", adminEventRead);
router.post("/write", adminEventWrite);
router.delete("/:eventNum", adminEventDelete);
router.patch("/:eventNum", adminEventUpdate);

module.exports = router;
