const express = require("express");
const axios = require("axios");
const {Movie, List, MovieList, Comment, CommentDelete, CommentUpdate, AdminMovielist, AdminRemove} = require("../controllers/movie");
const router = express.Router();

router.get("/", List);
router.get("/movielist",MovieList);
router.get("/detail/:id", Movie);
router.post("/moviecomment", Comment);
router.delete("/detail/comment/", CommentDelete);
router.post("/detail/comment/update", CommentUpdate);
router.post("/AdminMovielist", AdminMovielist);
router.delete("/admin/remove", AdminRemove);

module.exports = router;