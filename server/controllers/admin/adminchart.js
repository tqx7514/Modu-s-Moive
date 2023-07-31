const { users } = require("../../models");

exports.genderData = async (req, res) => {
  try {
    console.log("ssss");
    const manData = await users.findAndCountAll({
      where: { gender: "남자" },
    });
    const womanData = await users.findAndCountAll({
      where: { gender: "여자" },
    });
    console.log(manData.count, womanData.count);
    res.json({ Mcount: manData.count, Wcount: womanData.count });
  } catch (error) {
    res.json(error);
  }
};
