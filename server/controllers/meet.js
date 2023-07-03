const { meets, meetusers } = require("../models");
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
  console.log("page=====================", page);
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
      [Op.like]: `%${tag}%`,
    };
  }

  console.log("where입니다", where);

  const limit = 15;
  const offset = (page - 1) * limit;
  try {
    console.log("page입니다", page);
    const meet = await meets.findAll({
      nest: true,
      where,
      order: [["createdAt", "DESC"]],
      limit,
      offset,
    });

    const totalCount = await meets.count({ where }); // 총 항목 수 계산
    const totalPages = Math.ceil(totalCount / limit); // 총 페이지 수 계산

    res.json({
      meet,
      totalPages, // 마지막 페이지 정보인 totalPages를 응답에 추가
    });
  } catch (error) {
    res.status(500).json(error);
  }
};

exports.meetUpdate = async (req, res, next) => {
  const { title, body, tags, meetNum } = req.body;
  console.log("dddddddddddddd", req.body);
  console.log("title", title, "body", body, "tags", tags, "meetNum", meetNum);
  try {
    const tagsString = JSON.stringify(tags); // 배열을 JSON 형식의 문자열로 변환
    const [updatedRows] = await meets.update(
      {
        title,
        body,
        tags: tagsString, // 변환한 문자열을 데이터베이스에 저장
      },
      {
        where: { meetNum },
      }
    );

    if (updatedRows === 0) {
      res.status(404).json({ message: "포스트가 존재하지 않습니다" });
      return;
    }

    const updatedMeet = await meets.findOne({
      where: { meetNum },
    });

    res.json(updatedMeet);
  } catch (error) {
    res.status(500).json(error);
    next(error);
  }
};

exports.meetDelete = async (req, res, next) => {
  const meetNum = req.params.meetNum;

  try {
    const deletedRows = await meets.destroy({
      where: { meetNum },
    });

    if (deletedRows === 0) {
      res.status(404).json({ message: "포스트가 존재하지 않습니다" });
      return;
    }

    res.status(204).end();
  } catch (error) {
    res.status(500).json(error);
    next(error);
  }
};

exports.meetJoin = async (req, res) => {
  console.log("백 meetJoin 왓음~~");
  console.log("req.body===========", req.body);
  const { userId, meetNum } = req.body;
  console.log(userId, meetNum);
  try {
    const met = await meetusers.findAll({});
    console.log("zzzzzzzzzzzzzzz", met);
    const newJoin = await meetusers.create({
      user_Id: userId,
      meet_MeetNum: meetNum,
    });
    res.status(200).json(newJoin);
  } catch (error) {
    console.error(error);
    res.status(500).json(error);
  }
};
