const { posts, postcomments } = require("../models");

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
      createdAt: new Date().toLocaleString("en-US", { timeZone: "Asia/Seoul" }), // 한국 시간대로 저장
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

  const { title } = req.query;
  const where = {};

  if (title) {
    where.title = {
      [Op.like]: `%${title}%`,
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
    // console.log("postcontrollers의 postlist입니다.", postlists);
    const totalCount = await posts.count({ where });
    console.log("totalCount:", totalCount);
    const totalPages = totalCount ? Math.ceil(totalCount / limit) : 1;
    console.log("totalPages:", totalPages);
    res.json({ postlists, totalPages, totalCount });
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
  post.views += 1;
  await post.save();
  if (!post) {
    res.status(404).json({ message: "게시글이 존재하지 않습니다" });
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
      res.status(404).json({ message: "존재하지 않는 게시물입니다." });
      return;
    }

    res.status(204).end();
  } catch (error) {
    res.status(500).json(error);
    next(error);
  }
};

exports.readPostComment = async (req, res) => {
  const { postNum } = req.params;
  console.log("controller의 readPostComment입니다.", req.params);
  try {
    const postcomment = await postcomments.findAll({
      where: { postNum },
      order: [["createdAt", "DESC"]],
    });
    console.log("포스트커맨트", postcomment);
    res.json(postcomment);
  } catch (error) {
    res.json(error);
  }
};

exports.writePostComment = async (req, res) => {
  const { userId, content, postNum } = req.body;
  console.log(
    `userId : ${userId}  /  content : ${content}   /  postNum : ${postNum}`
  );
  try {
    const newPostComment = await postcomments.create({
      postNum,
      userId,
      content,
    });
    console.log("newPostComment : ", newPostComment);
    res.status(200).json(newPostComment);
  } catch (error) {
    res.status(500).json(error);
  }
};

exports.removePostComment = async (req, res, next) => {
  const { commentNum, postNum } = req.query;
  console.log("commentNum, postNum", req.query);
  try {
    const deletedRows = await postcomments.destroy({
      where: { commentNum },
    });
    const postcomment = await postcomments.findAll({
      where: { postNum },
      order: [["createdAt", "DESC"]],
    });
    if (deletedRows === 0) {
      res.status(404).json({ message: "존재하지않는 댓글입니다." });
      return;
    }
    res.status(200).json({ postcomment });
  } catch (error) {
    res.status(500).json(error);
    next(error);
  }
};
