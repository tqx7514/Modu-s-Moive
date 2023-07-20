const express = require("express");
const axios = require("axios");
const {Movie, List, Comment, CommentDelete, CommentUpdate, AdminMovielist} = require("../controllers/movie");
const router = express.Router();

router.get("/", List);
router.get("/detail/:id", Movie);
router.post("/moviecomment", Comment);
router.delete("/detail/comment/", CommentDelete);
router.post("/detail/comment/update", CommentUpdate);
router.post("/AdminMovielist", AdminMovielist);

module.exports = router;