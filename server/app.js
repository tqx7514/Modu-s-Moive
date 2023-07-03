const express = require("express");
const path = require("path");
const cookieParser = require("cookie-parser");
const logger = require("morgan");
const cors = require("cors");
const dotenv = require("dotenv");
const { sequelize } = require("./models");


const authRouter = require("./routes/auth");
const ticketRouter = require("./routes/ticket");
const postRouter = require("./routes/post")
const eventRouter = require("./routes/event")
const currentMovie = require("./routes/currentmovie");
const axios = require("axios");
const mysql = require("mysql2");



const app = express();
dotenv.config();

app.use(logger("dev"));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());


// const connection = mysql.createConnection({
//   host: "192.168.10.104",
//   user: "CarCarO2",
//   password: "edurootroot",
//   database: "ModoosMovie",
// });

// // API에서 데이터 가져오기
// axios
//   .get("https://api.themoviedb.org/3/movie/now_playing?api_key=c4e59022826dc465ea5620d6adaa6813&language=ko&page=1&region=KR")
//   .then((response) => {
//     const movies = response.data.results; // 필요한 데이터 추출
//     movies.forEach((movie) => {
//       // 데이터베이스에 데이터 삽입
//       const query = "INSERT INTO movies (movie_name, tiketing, star, popularity, movie_id) VALUES (?, ?, ?, ?, ?)"; // SQL INSERT 문
//       const values = [movie.title, movie.popularity, movie.vote_average, movie.vote_count, movie.id]; // 삽입할 데이터 값

//       connection.query(query, values, (error, results) => {
//         if (error) {
//           console.error(error);
//         } else {
//           console.log("데이터 삽입 성공");
//         }
//       });
//     });
//   })
//   .catch((error) => {
//     console.error(error);
//   });

// connection.end();

app.use(express.static(path.join(__dirname, "public")));

app.use(
  cors({
    origin: "http://localhost:3001",
    methods: ["GET", "POST", "OPTIONS"],
    credentials: true,
  })
);
// sequelize
//   .sync({ force: false })
//   .then(() => {
//     console.log("데이터베이스 연결성공!!");
//   })
//   .catch((err) => {
//     console.error(err);
//   });

app.use("/auth", authRouter);
app.use("/ticket", ticketRouter);
app.use("/post",postRouter)
app.use("/event", eventRouter);
app.use("/currentmovie", currentMovie);

// catch 404 and forward to error handler
app.use((req, res, next) => {
  const error = new Error(`${req.method} ${req.url} 라우터가 없습니다.`);
  error.status = 404;
  next(error);
});

// error handler
app.use(function (err, req, res, next) {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get("env") === "development" ? err : {};

  // render the error page
  res.status(err.status || 500);
});
app.listen(app.get("port"), () => {
  console.log(app.get("port"), "번 포트에서 대기중");
});

module.exports = app;
