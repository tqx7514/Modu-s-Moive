const express = require("express");
const {
  meetWrite,
  meetRead,
  meetlist,
  meetUpdate,
  meetDelete,
  meetJoin,
  meetWithdraw,
  updateToken,
  meetWriteBoard,
  meetListBoard,
  meetCommentRead,
  meetWriteComment,
  meetBoardDelete,
  meetCommentDelete,
  meetBoardUpdate,
} = require("../controllers/meet");
const router = express.Router();

//모임 메인페이지
router.post("/write", meetWrite);
router.get("/detail/:meetNum", meetRead);
router.get("/list", meetlist);
router.patch("/detail/:meetNum", meetUpdate);
router.delete("/:meetNum", meetDelete);
router.post("/join", meetJoin);
router.post("/withdraw", meetWithdraw);

//모임 안 게시판
router.post("/writeMeetBoard", meetWriteBoard);
router.get("/meetBoardList", meetListBoard);
router.get("/meetBoardList/:meetboardNum", meetCommentRead);
router.post("/writeMeetComment", meetWriteComment);
router.delete("/detail/:meetboardNum", meetBoardDelete);
router.delete("/detail/comment/:meetcommentNum", meetCommentDelete);
router.post(`/updateMeetBoard/:meetboardNum`, meetBoardUpdate);

// router.post("/updateToken", updateToken);

module.exports = router;
