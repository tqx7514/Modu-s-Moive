const { meets } = require("../models");
const { Op } = require("sequelize");

exports.meetWrite = async (req, res, next) => {
  const { title, body, tags, userId } = req.body;
  try {
    const tagsString = JSON.stringify(tags); // 배열을 JSON 형식의 문자열로 변환
    const newMeet = await meets.create({
      title,
      body,
      tags: tagsString, // 변환한 문자열을 데이터베이스에 저장
      userId,
    });
    res.status(200).json(newMeet); // 새로운 포스트를 클라이언트에 반환
  } catch (error) {
    res.status(500).json(error);
    next(error);
  }
};

exports.meetRead = async (req, res, next) => {
  const meetNum = req.params.meetNum;
  console.log("meetNum 입니다", meetNum);
  const meet = await meets.findOne({
    where: { meetNum },
  });
  if (!meet) {
    res.status(404).json({ message: "포스트가 존재하지않습니다" });
  }
  res.json(meet);
};

exports.meetlist = async (req, res) => {
  const page = parseInt(req.query.page || "1", 10);
  if (page < 1) {
    res.status(400);
    return;
  }

  const { tag, userId } = req.query;
  console.log("쿼리===================", req.query);
  console.log("tag===", tag, "userId===", userId);
  const where = {};

  if (userId) {
    where.userId = userId;
  }

  if (tag) {
    where.tags = {
      [Op.like]: `%${tag}%`, // 해당 태그가 JSON 문자열에 포함되어 있는지 검사
    };
  }

  console.log("where입니다", where);

  const limit = 10;
  try {
    console.log("page입니다", page);
    const meet = await meets.findAll({
      nest: true,
      where,
      order: [["createdAt", "DESC"]],
      limit,
    });
    // console.log("meet입니다", meet);
    res.json(meet);
  } catch (error) {
    res.status(500).json(error);
  }
};
