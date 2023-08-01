const { Op } = require("sequelize");
const { inquirys } = require("../../models");

exports.inquiryList = async (req, res) => {
  console.log(
    "백 관리자 문의리스트, page==",
    req.params.page,
    "category",
    req.query.category
  );
  const { category, sort, classify } = req.query;
  console.log("category, sort", category, sort.field, sort.order, classify);
  // const category = req.query.category;
  const page = req.params.page;
  if (page < 1) {
    res.status(400);
    return;
  }
  const limit = 10;
  const offset = (page - 1) * limit;
  const where = {};
  let order;

  switch (sort.field) {
    case "createdAt":
      console.log("하하하", sort.field, sort.order);
      order = [["createdAt", parseInt(sort.order) === -1 ? "ASC" : "DESC"]];
      break;
    case "classify":
      order = [["classify", parseInt(sort.order) === -1 ? "ASC" : "DESC"]];
      break;
    default:
      order = [["createdAt", "DESC"]]; // 최근 등록순
  }

  if (category === "2") {
    where.answer = {
      [Op.ne]: "", // answer 칼럼의 값이 ""이 아닌 것만 찾음
    };
  } else if (category === "3") {
    where.answer = {
      [Op.eq]: "", // answer 칼럼의 값이 ""인 것만 찾음
    };
  }
  if (classify) {
    where.classify = classify;
  }

  try {
    const inquiryList = await inquirys.findAndCountAll({
      where,
      limit,
      offset,
      order,
    });
    const { rows: inquiry, count } = inquiryList;
    const lastPage = count ? Math.ceil(count / limit) : 1;
    // console.log("ㅋㅋㅋㅋㅋㅋㅋㅋㅋㅋㅋㅋㅋㅋㅋㅋㅋㅋㅋㅋㅋㅋㅋ", inquiry);
    res.json({ inquiry, count, lastPage });
  } catch (error) {
    res.status(500).json(error);
  }
};

exports.updateAnswer = async (req, res) => {
  const inquiryNum = req.params.inquiryNum;
  const answer = req.body.answer;
  console.log("req.params.inquiryNum==", inquiryNum);
  console.log("req.body==", answer);
  try {
    const updateRow = await inquirys.update(
      {
        answer,
      },
      { where: { inquiryNum } }
    );
  } catch (error) {
    res.status(500).json(error);
  }
};
