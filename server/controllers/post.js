const { posts } = require("../models");

exports.write = async (req, res, next) => {
  const { title, body, tags, userId } = req.body;

  if (!title || !body) {
    res
      .status(400)
      .json({ message: "제목, 내용, 태그는 필수 입력 항목입니다." });
    return;
  }

  try {
    const tagsString = JSON.stringify(tags);
    const newPost = await posts.create({
      title,
      body,
      tags: tagsString,
      userId,
    });
    res.status(200).json(newPost);
  } catch (error) {
    res.status(500).json(error);
    next(error);
  }
};

exports.postlist = async (req, res, next) => {
  const page = parseInt(req.query.page || "1", 10);
  if (page < 1) {
    res.status(400);
    return;
  }

  const { searchResult } = req.body;
  const where = {};

  if (searchResult) {
    where.result = {
      [Op.like]: `%${searchResult}%`,
    };
  }

  const limit = 12;
  const offset = (page - 1) * limit;
  try {
    const postlists = await posts.findAll({
      where,
      order: [["createdAt", "DESC"]],
      limit,
      offset,
    });
    const totalCount = await posts.count({ where });
    const totalPages = totalCount ? Math.ceil(totalCount / limit) : 1;
    res.json({ postlists, totalPages });
  } catch (error) {
    res.status(500).json(error);
    next(error);
  }
};

exports.postRead = async (req, res, next) => {
  const postNum = req.params.postNum;
  const post = await posts.findOne({
    where: { postNum },
  });
  if (!post) {
    res.status(404).json({ message: "게시글이 존재하지않습니다" });
  }
  res.json(post);
};

exports.postUpdate = async (req, res, next) => {
  const { title, body, tags, postNum } = req.body;
  try {
    console.log(tags);
    console.log(postNum);
    const tagsString = JSON.stringify(tags);
    console.log(tagsString);
    const [updatedRows] = await posts.update(
      {
        title,
        body,
        tags: tagsString,
      },
      {
        where: { postNum },
      }
    );
    console.log("updatedRows입니다.", updatedRows);
    if (updatedRows === 0) {
      res.status(404).json({ message: "존재하지 않는 글입니다." });
      return;
    }
    const updatedPost = await posts.findOne({
      where: { postNum },
    });
    console.log("updatedPost입니다.", updatedPost);
    res.json(updatedPost);
  } catch (error) {
    res.status(500).json(error);
    next(error);
  }
};

exports.postDelete = async (req, res, next) => {
  const postNum = req.params.postNum;
  console.log("postNum 입니다", postNum);
  try {
    const deletedRows = await posts.destroy({
      where: { postNum },
    });

    if (deletedRows === 0) {
      res.status(404).json({ message: "존재하지 않는 글입니다." });
      return;
    }

    res.status(204).end();
  } catch (error) {
    res.status(500).json(error);
    next(error);
  }
};
