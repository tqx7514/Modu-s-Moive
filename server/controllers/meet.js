const { meets, meetusers, regions } = require("../models");
const { Op } = require("sequelize");

exports.meetWrite = async (req, res, next) => {
  const { title, body, tags, userId, region } = req.body;
  try {
    const tagsString = JSON.stringify(tags); // 배열을 JSON 형식의 문자열로 변환
    const newMeet = await meets.create({
      title,
      body,
      tags: tagsString, // 변환한 문자열을 데이터베이스에 저장
      userId,
      region,
    });
    res.status(200).json(newMeet); // 새로운 포스트를 클라이언트에 반환
  } catch (error) {
    res.status(500).json(error);
    next(error);
  }
};

exports.meetRead = async (req, res, next) => {
  const meetNum = req.params.meetNum;
  const meet = await meets.findOne({
    where: { meetNum },
  });
  meet.views += 1;
  await meet.save();
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
  const { tag, region } = req.query;
  const where = {};

  if (region) {
    where.region = region;
  }

  if (tag) {
    where.tags = {
      [Op.like]: `%${tag}%`,
    };
  }

  console.log("where입니다", where);

  const limit = 12;
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
    const totalPages = totalCount ? Math.ceil(totalCount / limit) : 1; // 총 페이지 수 계산
    const region = await regions.findAll({
      attributes: ["region"],
      where: {
        grade: {
          [Op.gt]: 0,
        },
      },
    });
    const regionArray = ["전국", ...region.map((item) => item.region)];
    // console.log("지역입니다", regionArray);
    res.json({
      meet,
      totalPages,
      regionArray,
    });
  } catch (error) {
    res.status(500).json(error);
  }
};

exports.meetUpdate = async (req, res, next) => {
  const { title, body, tags, meetNum, region } = req.body;
  try {
    const tagsString = JSON.stringify(tags); // 배열을 JSON 형식의 문자열로 변환
    const [updatedRows] = await meets.update(
      {
        title,
        body,
        tags: tagsString,
        region,
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
  const { userId, meetNum } = req.body;
  try {
    const met = await meetusers.findAll({});
    const newJoin = await meetusers.create({
      user_Id: userId,
      meet_MeetNum: meetNum,
    });
    res.status(200).json(meetNum);
  } catch (error) {
    console.error(error);
    res.status(500).json(error);
  }
};

exports.meetWithdraw = async (req, res) => {
  const { userId, meetNum } = req.body;
  try {
    const withDraw = await meetusers.destroy({
      where: { user_Id: userId, meet_MeetNum: meetNum },
    });
    // const meet = await meetusers.findAll({
    //   nest: true,
    //   where: { user_Id: userId },
    //   attributes: ["meet_MeetNum"],
    // });
    // const meetArray = meet.map((row) => row.meet_MeetNum);
    // const meetNums = [...new Set(meetArray)];
    return;
  } catch (error) {
    console.error(error);
  }
};
