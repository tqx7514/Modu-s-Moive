const { Op } = require("sequelize");
const {
  users,
  inquirys,
  meets,
  regions,
  posts,
  reservations,
  movies,
} = require("../../models");

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
    res.status(500).json(error);
  }
};

exports.ageData = async (req, res) => {
  console.log("백age");
  try {
    const underTwentyCount = await users.count({
      where: {
        age: {
          [Op.lt]: 20,
        },
      },
    });

    const twentiesCount = await users.count({
      where: {
        age: {
          [Op.between]: [20, 29],
        },
      },
    });

    const thirtiesCount = await users.count({
      where: {
        age: {
          [Op.between]: [30, 39],
        },
      },
    });

    const fortiesCount = await users.count({
      where: {
        age: {
          [Op.between]: [40, 49],
        },
      },
    });

    const fiftiesCount = await users.count({
      where: {
        age: {
          [Op.between]: [50, 59],
        },
      },
    });

    const overSixtiesCount = await users.count({
      where: {
        age: {
          [Op.gte]: 60,
        },
      },
    });

    const ageDataArray = [
      underTwentyCount,
      twentiesCount,
      thirtiesCount,
      fortiesCount,
      fiftiesCount,
      overSixtiesCount,
    ];
    console.log("결과===============", ageDataArray);
    res.json(ageDataArray);
  } catch (error) {
    res.status(500).json(error);
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
    console.log("s");
    res.json(meetData);
  } catch (error) {
    res.status(500).json(error);
  }
};

exports.dateData = async (req, res) => {
  console.log("하하하하");
  try {
    const today = new Date();
    const oneWeekAgo = new Date(today.getTime() - 7 * 24 * 60 * 60 * 1000);

    const dateData = [];
    let cumulativeCount = 0;

    // Iterate through each day from oneWeekAgo to today
    for (
      let date = oneWeekAgo;
      date <= today;
      date.setDate(date.getDate() + 1)
    ) {
      const startOfDay = new Date(date); // Clone the date object
      startOfDay.setHours(0, 0, 0, 0); // Set time to 00:00:00

      const endOfDay = new Date(date); // Clone the date object
      endOfDay.setHours(23, 59, 59, 999); // Set time to 23:59:59.999

      const count = await posts.count({
        where: {
          createdAt: {
            [Op.between]: [startOfDay, endOfDay],
          },
        },
      });

      cumulativeCount += count;
      dateData.push({
        date: date.toISOString().slice(0, 10),
        count,
        cumulativeCount,
      });
    }

    if (dateData.length > 7) {
      // If dateData.length is greater than 7, keep only the last 7 days
      dateData.splice(0, dateData.length - 7);
    }

    console.log("ssssssssssssssssssss", dateData);
    res.json(dateData);
  } catch (error) {
    res.status(500).json(error);
  }
};

exports.incomeData = async (req, res) => {
  // console.log("income 백왓습니다");
  try {
    const today = new Date();
    const startOfMonth = new Date(today.getFullYear(), today.getMonth(), 1);
    const endOfMonth = new Date(today.getFullYear(), today.getMonth() + 1, 0);

    const incomes = await reservations.findAll({
      attributes: ["price", "person", "cinema"], // cinema 칼럼도 가져옵니다.
      where: {
        date: {
          [Op.between]: [startOfMonth, endOfMonth],
        },
      },
    });

    let totalIncome = 0;
    let totalAudience = 0;

    const cinemaData = {};

    incomes.forEach((item) => {
      totalIncome += parseInt(item.price);

      const personString = item.person;
      const personMatches = personString.match(/\d+/g);

      if (personMatches) {
        const personCounts = personMatches.map((match) => parseInt(match));
        totalAudience += personCounts.reduce((sum, count) => sum + count, 0);

        if (!cinemaData[item.cinema]) {
          cinemaData[item.cinema] = {
            totalIncome: 0,
            totalAudience: 0,
          };
        }
        cinemaData[item.cinema].totalIncome += parseInt(item.price);
        cinemaData[item.cinema].totalAudience += personCounts.reduce(
          (sum, count) => sum + count,
          0
        );
      }
    });

    let highestIncomeCinema = null;
    let highestIncome = 0;

    for (const cinema in cinemaData) {
      if (cinemaData[cinema].totalIncome > highestIncome) {
        highestIncome = cinemaData[cinema].totalIncome;
        highestIncomeCinema = cinema;
      }
    }

    const result = {
      cinema: highestIncomeCinema,
      totalIncome: highestIncome,
      totalAudience: cinemaData[highestIncomeCinema].totalAudience,
    };

    // console.log("result==============", totalIncome, totalAudience, result);
    res.json({ totalIncome, totalAudience, result });
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: "Internal server error" });
  }
};

exports.monthData = async (req, res) => {
  console.log("월별데이터 백");
  try {
    const monthlyData = await reservations.findAll({
      attributes: ["date", "price"],
      raw: true,
    });

    const monthLabels = [
      "1월",
      "2월",
      "3월",
      "4월",
      "5월",
      "6월",
      "7월",
      "8월",
      "9월",
      "10월",
      "11월",
      "12월",
    ];

    const monthlyIncome = Array.from({ length: 12 }, () => 0);

    monthlyData.forEach((data) => {
      const month = new Date(data.date).getMonth();
      monthlyIncome[month] += parseFloat(data.price);
    });

    const result = monthLabels.map((label, index) => ({
      month: label,
      price: monthlyIncome[index],
    }));

    console.log("결과============", result);
    res.json(result);
  } catch (error) {
    res.status(500).json(error);
  }
};

exports.movieData = async (req, res) => {
  try {
    // movies 테이블에서 영화명만 가져오기
    const movieNames = await movies.findAll({
      attributes: ["movie_name"],
      raw: true,
    });

    // 가져온 영화명으로 reservations 테이블에서 매출 데이터 조회하고 계산하기
    const movieMap = new Map();

    await Promise.all(
      movieNames.map(async (movieData) => {
        const { movie_name } = movieData;
        const moviePriceData = await reservations.findAll({
          attributes: ["price"],
          where: {
            movie_name: movie_name,
          },
          raw: true,
        });

        const totalMoviePrice = moviePriceData.reduce(
          (acc, { price }) => acc + parseFloat(price),
          0
        );

        movieMap.set(movie_name, totalMoviePrice);
      })
    );

    // 결과 가공하여 프론트엔드로 보내기
    const result = Array.from(movieMap, ([movie, price]) => ({ movie, price }));

    console.log("영화 차트 백왓습니다", result);
    res.json(result);
  } catch (error) {
    res.status(500).json(error);
  }
};
