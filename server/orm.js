const SequelizeAuto = require("sequelize-auto");
const auto = new SequelizeAuto("CarCarO2", "CarCarO2", "edurootroot", {
  host: "192.168.10.104",
  port: "3306",
  dialect: "mysql",
});

auto.run();
