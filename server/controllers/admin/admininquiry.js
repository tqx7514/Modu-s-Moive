const { Op } = require("sequelize");
const { meets, posts, inquirys } = require("../../models");

exports.inquiryList = async (req, res) => {
  console.log(
    "백 관리자 문의리스트, page==",
    req.params.page,
    "category",
    req.query.category
  );
  const category = req.query.category;
  const page = req.params.page;
  if (page < 1) {
    res.status(400);
    return;
  }
  const limit = 10;
  const offset = (page - 1) * limit;
  const where = {};

  if (category === "2") {
    where.answer = {
      [Op.ne]: "", // answer 칼럼의 값이 ""이 아닌 것만 찾음
    };
  } else if (category === "3") {
    where.answer = {
      [Op.eq]: "", // answer 칼럼의 값이 ""인 것만 찾음
    };
  }

  try {
    const inquiryList = await inquirys.findAndCountAll({
      where, // 위에서 설정한 조건을 where에 적용
      limit,
      offset,
      order: [["createdAt", "DESC"]],
    });
    const { rows: inquiry, count } = inquiryList;
    const lastPage = count ? Math.ceil(count / limit) : 1;
    res.json({ inquiry, count, lastPage });
  } catch (error) {
    res.status(500).json(error);
  }
};
