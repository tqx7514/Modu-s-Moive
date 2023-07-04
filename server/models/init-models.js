var DataTypes = require("sequelize").DataTypes;
var _NewTable = require("./NewTable");
var _cinemas = require("./cinemas");
var _eventcategory = require("./eventcategory");
var _events = require("./events");
var _meets = require("./meets");
var _meetusers = require("./meetusers");
var _moviereviews = require("./moviereviews");
var _movies = require("./movies");
var _postcomments = require("./postcomments");
var _posts = require("./posts");
var _regions = require("./regions");
var _tickets = require("./tickets");
var _users = require("./users");

function initModels(sequelize) {
  var NewTable = _NewTable(sequelize, DataTypes);
  var cinemas = _cinemas(sequelize, DataTypes);
  var eventcategory = _eventcategory(sequelize, DataTypes);
  var events = _events(sequelize, DataTypes);
  var meets = _meets(sequelize, DataTypes);
  var meetusers = _meetusers(sequelize, DataTypes);
  var moviereviews = _moviereviews(sequelize, DataTypes);
  var movies = _movies(sequelize, DataTypes);
  var postcomments = _postcomments(sequelize, DataTypes);
  var posts = _posts(sequelize, DataTypes);
  var regions = _regions(sequelize, DataTypes);
  var tickets = _tickets(sequelize, DataTypes);
  var users = _users(sequelize, DataTypes);

  events.belongsTo(eventcategory, { as: "category", foreignKey: "categoryId"});
  eventcategory.hasMany(events, { as: "events", foreignKey: "categoryId"});
  meetusers.belongsTo(meets, { as: "meet_MeetNum_meet", foreignKey: "meet_MeetNum"});
  meets.hasMany(meetusers, { as: "meetusers", foreignKey: "meet_MeetNum"});
  cinemas.belongsTo(regions, { as: "grade_region", foreignKey: "grade"});
  regions.hasMany(cinemas, { as: "cinemas", foreignKey: "grade"});
  events.belongsTo(users, { as: "userNum_user", foreignKey: "userNum"});
  users.hasMany(events, { as: "events", foreignKey: "userNum"});
  meetusers.belongsTo(users, { as: "user", foreignKey: "user_Id"});
  users.hasMany(meetusers, { as: "meetusers", foreignKey: "user_Id"});

  return {
    NewTable,
    cinemas,
    eventcategory,
    events,
    meets,
    meetusers,
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
