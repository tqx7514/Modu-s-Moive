const express = require("express");
const {
  write,
  postRead,
  postlist,
  postUpdate,
  postDelete,
  writePostComment,
  readPostComment,
} = require("../controllers/post");
const router = express.Router();

// postlist 및 postviewer 관련
router.post("/write", write);
router.get("/detail/:postNum", postRead);
router.get("/postlist", postlist);
router.patch("/detail/:postNum", postUpdate);
router.delete("/:postNum", postDelete);

//postcomment관련
router.post("/writePostComment", writePostComment);
router.get("/readPostComment/:postNum", readPostComment);

module.exports = router;
