var DataTypes = require("sequelize").DataTypes;
var _cinemas = require("./cinemas");
var _cinemas1 = require("./cinemas1");
var _eventcategory = require("./eventcategory");
var _events = require("./events");
var _meetboards = require("./meetboards");
var _meetcomments = require("./meetcomments");
var _meets = require("./meets");
var _meetusers = require("./meetusers");
var _moviereviews = require("./moviereviews");
var _movies = require("./movies");
var _movietimes = require("./movietimes");
var _postcomments = require("./postcomments");
var _posts = require("./posts");
var _regions = require("./regions");
var _tickets = require("./tickets");
var _users = require("./users");

function initModels(sequelize) {
  var cinemas = _cinemas(sequelize, DataTypes);
  var cinemas1 = _cinemas1(sequelize, DataTypes);
  var eventcategory = _eventcategory(sequelize, DataTypes);
  var events = _events(sequelize, DataTypes);
  var meetboards = _meetboards(sequelize, DataTypes);
  var meetcomments = _meetcomments(sequelize, DataTypes);
  var meets = _meets(sequelize, DataTypes);
  var meetusers = _meetusers(sequelize, DataTypes);
  var moviereviews = _moviereviews(sequelize, DataTypes);
  var movies = _movies(sequelize, DataTypes);
  var movietimes = _movietimes(sequelize, DataTypes);
  var postcomments = _postcomments(sequelize, DataTypes);
  var posts = _posts(sequelize, DataTypes);
  var regions = _regions(sequelize, DataTypes);
  var tickets = _tickets(sequelize, DataTypes);
  var users = _users(sequelize, DataTypes);

  events.belongsTo(eventcategory, { as: "category", foreignKey: "categoryId"});
  eventcategory.hasMany(events, { as: "events", foreignKey: "categoryId"});
  meetcomments.belongsTo(meetboards, { as: "meetboard_Num_meetboard", foreignKey: "meetboard_Num"});
  meetboards.hasMany(meetcomments, { as: "meetcomments", foreignKey: "meetboard_Num"});
  meetboards.belongsTo(meets, { as: "meet_Num_meet", foreignKey: "meet_Num"});
  meets.hasMany(meetboards, { as: "meetboards", foreignKey: "meet_Num"});
  meetusers.belongsTo(meets, { as: "meet_MeetNum_meet", foreignKey: "meet_MeetNum"});
  meets.hasMany(meetusers, { as: "meetusers", foreignKey: "meet_MeetNum"});
  postcomments.belongsTo(posts, { as: "postNum_post", foreignKey: "postNum"});
  posts.hasMany(postcomments, { as: "postcomments", foreignKey: "postNum"});
  cinemas.belongsTo(regions, { as: "grade_region", foreignKey: "grade"});
  regions.hasMany(cinemas, { as: "cinemas", foreignKey: "grade"});
  events.belongsTo(users, { as: "userNum_user", foreignKey: "userNum"});
  users.hasMany(events, { as: "events", foreignKey: "userNum"});
  meetboards.belongsTo(users, { as: "user", foreignKey: "user_Id"});
  users.hasMany(meetboards, { as: "meetboards", foreignKey: "user_Id"});
  meetcomments.belongsTo(users, { as: "user", foreignKey: "user_Id"});
  users.hasMany(meetcomments, { as: "meetcomments", foreignKey: "user_Id"});
  meetusers.belongsTo(users, { as: "user", foreignKey: "user_Id"});
  users.hasMany(meetusers, { as: "meetusers", foreignKey: "user_Id"});
  postcomments.belongsTo(users, { as: "userNum_user", foreignKey: "userNum"});
  users.hasMany(postcomments, { as: "postcomments", foreignKey: "userNum"});

  return {
    cinemas,
    cinemas1,
    eventcategory,
    events,
    meetboards,
    meetcomments,
    meets,
    meetusers,
    moviereviews,
    movies,
    movietimes,
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
