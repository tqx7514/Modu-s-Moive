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
  meetCommentUpdate,
  sendMsg,
  getMsg,
  mandate,
  kick,
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
router.post(`/updateMeetComment/:meetcommentNum`, meetCommentUpdate);

//모임 안 채팅
router.post("/chat/sendmsg", sendMsg);
router.post("/chat/getmsg", getMsg);

//모임 안 회원관리
router.post("/manage/mandate/:meetuserId", mandate);
router.post("/manage/kick/:meetuserNum", kick);
module.exports = router;
