const express = require("express");
const axios = require("axios");
const {Movie, List, Comment, CommentDelete, CommentUpdate} = require("../controllers/movie");
const router = express.Router();

router.get("/", List);
router.get("/detail/:id", Movie);
router.post("/moviecomment", Comment);
router.delete("/detail/comment/", CommentDelete);
router.post("/detail/comment/update", CommentUpdate);

module.exports = router;