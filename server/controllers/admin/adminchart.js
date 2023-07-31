const { Op } = require("sequelize");
const { users, inquirys, meets, regions } = require("../../models");

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

exports.categoryData = async (req, res) => {
  console.log("카테고리 백~~");
  try {
    const ticketDoneData = await inquirys.findAndCountAll({
      where: {
        classify: "영화/예매",
        answer: {
          [Op.not]: "",
        },
      },
    });
    const ticketUndoneData = await inquirys.findAndCountAll({
      where: {
        classify: "영화/예매",
        answer: "",
      },
    });
    const cinemaDoneData = await inquirys.findAndCountAll({
      where: {
        classify: "영화관",
        answer: {
          [Op.not]: "",
        },
      },
    });
    const cinemaUndoneData = await inquirys.findAndCountAll({
      where: {
        classify: "영화관",
        answer: "",
      },
    });
    const eventDoneData = await inquirys.findAndCountAll({
      where: {
        classify: "이벤트",
        answer: {
          [Op.not]: "",
        },
      },
    });
    const eventUndoneData = await inquirys.findAndCountAll({
      where: {
        classify: "이벤트",
        answer: "",
      },
    });
    const boardDoneData = await inquirys.findAndCountAll({
      where: {
        classify: "게시판",
        answer: {
          [Op.not]: "",
        },
      },
    });
    const boardUndoneData = await inquirys.findAndCountAll({
      where: {
        classify: "게시판",
        answer: "",
      },
    });
    const meetDoneData = await inquirys.findAndCountAll({
      where: {
        classify: "모임",
        answer: {
          [Op.not]: "",
        },
      },
    });
    const meetUndoneData = await inquirys.findAndCountAll({
      where: {
        classify: "모임",
        answer: "",
      },
    });
    const etcDoneData = await inquirys.findAndCountAll({
      where: {
        classify: "기타",
        answer: {
          [Op.not]: "",
        },
      },
    });
    const etcUndoneData = await inquirys.findAndCountAll({
      where: {
        classify: "기타",
        answer: "",
      },
    });

    res.json({
      ticketDone: ticketDoneData.count,
      ticketUndone: ticketUndoneData.count,
      cinemaDone: cinemaDoneData.count,
      cinemaUndone: cinemaUndoneData.count,
      eventDone: eventDoneData.count,
      eventUndone: eventUndoneData.count,
      boardDone: boardDoneData.count,
      boardUndone: boardUndoneData.count,
      meetDone: meetDoneData.count,
      meetUndone: meetUndoneData.count,
      etcDone: etcDoneData.count,
      etcUndone: etcUndoneData.count,
    });
  } catch (error) {
    res.json(error);
  }
};

exports.regionData = async (req, res) => {
  console.log("regionData백");
  try {
    const region = await regions.findAll({
      attributes: ["region"],
      where: {
        grade: {
          [Op.gt]: 0,
        },
      },
    });
    const regionArray = region.map((item) => item.region);
    console.log("regionArray===", regionArray);

    const meetData = [];
    for (const regionItem of regionArray) {
      const meetDataForRegion = await meets.findAndCountAll({
        where: { region: regionItem },
      });
      meetData.push({ region: regionItem, count: meetDataForRegion.count });
    }

    res.json(meetData);
  } catch (error) {
    res.status(500).json(error);
  }
};
