const { meets, users } = require("../models");

exports.myMeet = async (req, res) => {
  console.log("백 myMeet 왓습니다", req.params.id);
  console.log("ddddddddddd", req.query.meetNum);
  const meetNumArray = req.query.meetNum;
  try {
    const meetList = await meets.findAll({
      where: {
        meetNum: meetNumArray,
      },
    });

    // meetList 배열의 모든 요소를 객체로 변환하여 meetDataArray 배열로 담음
    const meetDataArray = meetList.map((meet) => meet.dataValues);

    console.log("meetDataArray==", meetDataArray);

    res.status(200).json(meetDataArray); // meetDataArray 배열을 클라이언트에 반환
  } catch (error) {
    res.status(500).json({ msg: error });
  }
};

// exports.meetWrite = async (req, res, next) => {
//   const { title, body, tags, userId, region } = req.body;
//   try {
//     const tagsString = JSON.stringify(tags); // 배열을 JSON 형식의 문자열로 변환
//     const newMeet = await meets.create({
//       title,
//       body,
//       tags: tagsString, // 변환한 문자열을 데이터베이스에 저장
//       userId,
//       region,
//     });
//     res.status(200).json(newMeet); // 새로운 포스트를 클라이언트에 반환
//   } catch (error) {
//     res.status(500).json(error);
//     next(error);
//   }
// };
