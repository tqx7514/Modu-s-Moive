var DataTypes = require("sequelize").DataTypes;
var _NewTable = require("./NewTable");
var _cinemas = require("./cinemas");
var _eventcategory = require("./eventcategory");
var _events = require("./events");
var _moviereviews = require("./moviereviews");
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
  var moviereviews = _moviereviews(sequelize, DataTypes);
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
    cinemas,
    eventcategory,
    events,
    moviereviews,
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
