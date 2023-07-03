var DataTypes = require("sequelize").DataTypes;
var _NewTable = require("./NewTable");
var _boardcomments = require("./boardcomments");
var _boards = require("./boards");
var _cinema = require("./cinema");
var _cinemas = require("./cinemas");
var _eventcategory = require("./eventcategory");
var _events = require("./events");
var _meets = require("./meets");
var _moviereviews = require("./moviereviews");
var _movies = require("./movies");
var _postcomments = require("./postcomments");
var _posts = require("./posts");
var _regions = require("./regions");
var _tickets = require("./tickets");
var _users = require("./users");

function initModels(sequelize) {
  var NewTable = _NewTable(sequelize, DataTypes);
  var boardcomments = _boardcomments(sequelize, DataTypes);
  var boards = _boards(sequelize, DataTypes);
  var cinema = _cinema(sequelize, DataTypes);
  var cinemas = _cinemas(sequelize, DataTypes);
  var eventcategory = _eventcategory(sequelize, DataTypes);
  var events = _events(sequelize, DataTypes);
  var meets = _meets(sequelize, DataTypes);
  var moviereviews = _moviereviews(sequelize, DataTypes);
  var movies = _movies(sequelize, DataTypes);
  var postcomments = _postcomments(sequelize, DataTypes);
  var posts = _posts(sequelize, DataTypes);
  var regions = _regions(sequelize, DataTypes);
  var tickets = _tickets(sequelize, DataTypes);
  var users = _users(sequelize, DataTypes);

  events.belongsTo(eventcategory, { as: "category", foreignKey: "categoryId"});
  eventcategory.hasMany(events, { as: "events", foreignKey: "categoryId"});
  cinemas.belongsTo(regions, { as: "grade_region", foreignKey: "grade"});
  regions.hasMany(cinemas, { as: "cinemas", foreignKey: "grade"});
  events.belongsTo(users, { as: "userNum_user", foreignKey: "userNum"});
  users.hasMany(events, { as: "events", foreignKey: "userNum"});

  return {
    NewTable,
    boardcomments,
    boards,
    cinema,
    cinemas,
    eventcategory,
    events,
    meets,
    moviereviews,
    movies,
    postcomments,
    posts,
    regions,
    tickets,
    users,
  };
}
module.exports = initModels;
module.exports.initModels = initModels;
module.exports.default = initModels;
