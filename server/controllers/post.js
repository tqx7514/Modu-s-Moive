const { posts } = require("../models");

exports.write = async (req, res, next) => {
  console.log("백이다");
  const { title, body, tags, userId } = req.body;
  console.log("dddddddddddddddd", req.body);
  try {
    const tagsString = JSON.stringify(tags); // 배열을 JSON 형식의 문자열로 변환
    const newPost = await posts.create({
      title,
      body,
      tags: tagsString, // 변환한 문자열을 데이터베이스에 저장
      userId,
    });
    res.status(200).json(newPost); // 새로운 포스트를 클라이언트에 반환
  } catch (error) {
    res.status(500).json(error);
    next(error);
  }
};

exports.postlist = async (req, res, next) => {
  try {
    const postlists = await posts.findAll({
      order: [["createdAt", "DESC"]],
    });
    res.status(200).json(postlists);
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
