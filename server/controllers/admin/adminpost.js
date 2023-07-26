const { posts } = require("../../models");

exports.adminpostlist = async (req, res, next) => {
  const page = parseInt(req.query.page || "1", 10);
  if (page < 1) {
    res.status(400);
    return;
  }
  const limit = 12;
  const offset = (page - 1) * limit;

  try {
    const postlists = await posts.findAll({
      where: { postNum },
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

exports.adminpostread = async (req, res, next) => {
  console.log("ssssssssssssfsdfsdf");
  const postNum = req.params.postNum;
  console.log("adminpostread", postNum);
  const post = await posts.findOne({
    where: { postNum },
  });
  console.log("adminpostread", post);
  if (!post) {
    res.status(404).json({ message: "게시글이 존재하지 않습니다" });
  }
  res.json({ post });
};

exports.adminpostdelete = async (req, res, next) => {
  const postNum = req.params.postNum;
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
