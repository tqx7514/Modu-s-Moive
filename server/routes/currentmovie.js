const express = require("express");
const axios = require("axios");
const {Movie, List, MovieList, Comment, CommentDelete, CommentUpdate, AdminMovielist, AdminRemove, DetailLike, LikeDel, Like} = require("../controllers/movie");
const router = express.Router();

router.get("/", List);
router.get("/movielist",MovieList);
router.get("/detail/:id", Movie);
router.post("/moviecomment", Comment);
router.delete("/detail/comment/", CommentDelete);
router.post("/detail/comment/update", CommentUpdate);
router.post("/AdminMovielist", AdminMovielist);
router.delete("/admin/remove", AdminRemove);
router.post("/detail/like", DetailLike);
router.delete("/detail/like/delete", LikeDel);
router.get("/like", Like)

module.exports = router;