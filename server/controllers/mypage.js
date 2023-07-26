const { meets, posts, inquirys } = require("../models");

exports.myMeet = async (req, res) => {
  console.log("백 myMeet 왓습니다", req.params.id);
  console.log("ddddddddddd", req.query.meetNum);
  const meetNumArray = req.query.meetNum;
  try {
    const meetList = await meets.findAll({
      where: {
        meetNum: meetNumArray,
      },
      order: [["meetNum", "DESC"]],
    });

    // meetList 배열의 모든 요소를 객체로 변환하여 meetDataArray 배열로 담음
    const meetDataArray = meetList.map((meet) => meet.dataValues);

    console.log("meetDataArray==", meetDataArray);

    res.status(200).json(meetDataArray); // meetDataArray 배열을 클라이언트에 반환
  } catch (error) {
    res.status(500).json({ msg: error });
  }
};

exports.myPost = async (req, res) => {
  const userId = req.params.id;
  const page = parseInt(req.query.pages, 10);
  console.log("백 myPost", req.params.id, page);

  if (page < 1) {
    res.status(400);
    return;
  }
  const limit = 10;
  const offset = (page - 1) * limit;
  try {
    const postList = await posts.findAll({
      where: { userId },
      order: [["createdAt", "DESC"]],
      limit,
      offset,
    });
    const totalCount = await posts.count({ where: { userId } });
    const totalPages = totalCount ? Math.ceil(totalCount / limit) : 1;
    const postDataArray = postList.map((post) => post.dataValues);
    console.log("postList", totalPages);
    res.status(200).json({ postDataArray, totalPages });
  } catch (error) {
    res.status(500).json({ msg: error });
  }
};

exports.myInquiry = async (req, res) => {
  const userId = req.params.id;
  const page = req.query.page;
  if (page < 1) {
    res.status(400);
    return;
  }
  const limit = 10;
  const offset = (page - 1) * limit;
  console.log("id======", userId, "page=======", page);
  try {
    const inquiryList = await inquirys.findAll({
      where: { userId },
      order: [["createdAt", "DESC"]],
      limit,
      offset,
    });
    const totalCount = await inquirys.count({ where: { userId } });
    const totalPages = totalCount ? Math.ceil(totalCount / limit) : 1;
    const inquiryDataArray = inquiryList.map((inquiry) => inquiry.dataValues);
    console.log("토탈페이지", totalPages);
    res.status(200).json({ inquiryDataArray, totalPages });
  } catch (error) {
    res.status(500).json({ msg: error });
  }
};

exports.writeInquiry = async (req, res) => {
  const { userId, classify, title, body, answer } = req.body;
  console.log(
    "userId",
    userId,
    "classify",
    classify,
    "title",
    title,
    "body",
    body,
    "answer",
    answer
  );

  try {
    const inquiry = await inquirys.create({
      userId,
      classify,
      title,
      body,
      answer,
    });
    res.json(inquiry);
  } catch (error) {
    res.status(500).json({ msg: error });
  }
};
