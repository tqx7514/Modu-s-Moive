const express = require("express");
const { cinemas, regions, movies, movietimes, reservations, users } = require("../models");
const { Op } = require("sequelize");
const cron = require("node-cron");

const router = express.Router();

// 지역 데이터 가져오기
router.get("/region", async (req, res) => {
  try {
    const region = await regions.findAll({
      include: [
        {
          model: cinemas,
          as: "cinemas",
        },
      ],
    });
    res.status(200).json(region);
  } catch (e) {
    console.error(e);
    res.status(500).json({ error: "Internal Server Error" });
  }
});

// 영화관 데이터 가져오기
router.get("/cinema", async (req, res) => {
  try {
    const { grade } = req.query;
    if (grade) {
      const cinema = await cinemas.findAll({
        include: [
          {
            model: regions,
            as: "grade_region",
            where: { grade },
          },
        ],
        order: [["cinema", "ASC"]],
      });
      res.status(200).json(cinema);
    }
  } catch (e) {
    console.error(e);
  }
});

// 영화 데이터 가져오기
router.get("/movies", async (req, res) => {
  try {
    const movie = await movies.findAll({});
    res.status(200).json(movie);
  } catch (e) {
    console.error(e);
  }
});

// 현재시간 지난 영화 스케줄 데이터 삭제
const checkAndDeleteExpiredTimes = async () => {
  try {
    const currentDate = new Date();
    const currentDateString = currentDate.toISOString().split("T")[0];

    const expiredTimes = await movietimes.findAll({
      where: {
        [Op.or]: {
          date: {
            [Op.lt]: currentDateString,
          },
          [Op.and]: {
            date: currentDateString,
            start: {
              [Op.lt]: currentDate.toTimeString().slice(0, 5),
            },
          },
        },
      },
    });

    if (expiredTimes.length > 0) {
      for (const time of expiredTimes) {
        await time.destroy();
      }
      console.log(`${expiredTimes.length}개의 레코드가 삭제되었습니다.`);
    } else {
      console.log("지난 시간을 지난 레코드가 없습니다.");
    }
  } catch (e) {
    console.error("오류가 발생했습니다:", e);
  }
};

cron.schedule("1 * * * *", () => {
  checkAndDeleteExpiredTimes();
});

// 영화 스케줄 데이터 가져오기
router.get("/times", async (req, res) => {
  try {
    const time = await movietimes.findAll({
      order: [['movietimes_num', 'DESC']],
    });
    res.status(200).json(time);
  } catch (e) {
    console.error(e);
  }
});

router.post("/pay", async (req, res) => {
  const {
    data, 
    person,
    seat,
    totalPrice, 
    discount, 
    user
  } = req.body;
  console.log('adultttttttttttttttttttttt', discount);
  const personString = person.toString();
  const seatString = seat.toString();
  try{
    const findPoint = await users.findOne({
      where: {id: user.id}
    });

    if(findPoint){
      const discounting = findPoint.point - discount;

      await users.update(
        {
          point: discounting,
        },
        {
          where: {id: user.id},
        }
      );
    }

    console.log(findPoint)

    const postReservation = await reservations.create({
      user_id: user.id,
      movie_name: data.time.movie_name,
      cinema: data.cinema,
      date: data.date,
      start: data.time.start,
      end: data.time.end,
      person: personString,
      room: data.time.room,
      seat: seatString,
      price: totalPrice,
      discount: discount,
    });
    res.status(200).json('데이터 저장 완료');
  } catch(e){
    console.error(e);
  }
});

router.get("/seat", async (req, res) => {
  try{
    const reservation = await reservations.findAll({
      order: [['createdAt', 'DESC']],
    });
    res.status(200).json(reservation);
  } catch(e){
    console.error(e);
  }
})

module.exports = router;
