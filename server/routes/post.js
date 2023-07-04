const express = require("express");
const {
  write,
  postRead,
  postlist,
  postUpdate,
  postDelete,
} = require("../controllers/post");
const router = express.Router();

router.post("/write", write);
router.get("/detail/:postNum", postRead);
router.get("/postlist", postlist);
router.patch("/detail/:postNum", postUpdate);
router.delete("/:postNum", postDelete);

module.exports = router;
