const express = require("express");
const {
  write,
  postRead,
  postlist,
  postUpdate,
  postDelete,
  writePostComment,
  readPostComment,
  removePostComment,
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
router.delete("/removePostComment/:postNum", removePostComment);

module.exports = router;
