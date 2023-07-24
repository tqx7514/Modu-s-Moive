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
