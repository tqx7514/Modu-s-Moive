var DataTypes = require("sequelize").DataTypes;
var _cinemas = require("./cinemas");
var _cinemas1 = require("./cinemas1");
var _eventcategory = require("./eventcategory");
var _events = require("./events");
var _meetboards = require("./meetboards");
var _meetcomments = require("./meetcomments");
var _meetmessages = require("./meetmessages");
var _meets = require("./meets");
var _meetusers = require("./meetusers");
var _moviecomments = require("./moviecomments");
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
  var meetmessages = _meetmessages(sequelize, DataTypes);
  var meets = _meets(sequelize, DataTypes);
  var meetusers = _meetusers(sequelize, DataTypes);
  var moviecomments = _moviecomments(sequelize, DataTypes);
  var moviereviews = _moviereviews(sequelize, DataTypes);
  var movies = _movies(sequelize, DataTypes);
  var movietimes = _movietimes(sequelize, DataTypes);
  var postcomments = _postcomments(sequelize, DataTypes);
  var posts = _posts(sequelize, DataTypes);
  var regions = _regions(sequelize, DataTypes);
  var tickets = _tickets(sequelize, DataTypes);
  var users = _users(sequelize, DataTypes);

  movietimes.belongsTo(cinemas, { as: "movietimes_num_cinema", foreignKey: "movietimes_num"});
  cinemas.hasOne(movietimes, { as: "movietime", foreignKey: "movietimes_num"});
  events.belongsTo(eventcategory, { as: "category", foreignKey: "categoryId"});
  eventcategory.hasMany(events, { as: "events", foreignKey: "categoryId"});
  meetcomments.belongsTo(meetboards, { as: "meetboard_Num_meetboard", foreignKey: "meetboard_Num"});
  meetboards.hasMany(meetcomments, { as: "meetcomments", foreignKey: "meetboard_Num"});
  meetboards.belongsTo(meets, { as: "meet_Num_meet", foreignKey: "meet_Num"});
  meets.hasMany(meetboards, { as: "meetboards", foreignKey: "meet_Num"});
  meetmessages.belongsTo(meets, { as: "meetNum_meet", foreignKey: "meetNum"});
  meets.hasMany(meetmessages, { as: "meetmessages", foreignKey: "meetNum"});
  meetusers.belongsTo(meets, { as: "meet_MeetNum_meet", foreignKey: "meet_MeetNum"});
  meets.hasMany(meetusers, { as: "meetusers", foreignKey: "meet_MeetNum"});
  moviecomments.belongsTo(movies, { as: "movie", foreignKey: "movie_id"});
  movies.hasMany(moviecomments, { as: "moviecomments", foreignKey: "movie_id"});
  postcomments.belongsTo(posts, { as: "postNum_post", foreignKey: "postNum"});
  posts.hasMany(postcomments, { as: "postcomments", foreignKey: "postNum"});
  cinemas.belongsTo(regions, { as: "grade_region", foreignKey: "grade"});
  regions.hasMany(cinemas, { as: "cinemas", foreignKey: "grade"});
  events.belongsTo(users, { as: "user", foreignKey: "userId"});
  users.hasMany(events, { as: "events", foreignKey: "userId"});
  meetboards.belongsTo(users, { as: "user", foreignKey: "user_Id"});
  users.hasMany(meetboards, { as: "meetboards", foreignKey: "user_Id"});
  meetcomments.belongsTo(users, { as: "user", foreignKey: "user_Id"});
  users.hasMany(meetcomments, { as: "meetcomments", foreignKey: "user_Id"});
  meetmessages.belongsTo(users, { as: "sender_user", foreignKey: "sender"});
  users.hasMany(meetmessages, { as: "meetmessages", foreignKey: "sender"});
  meetusers.belongsTo(users, { as: "user_Num_user", foreignKey: "user_Num"});
  users.hasMany(meetusers, { as: "meetusers", foreignKey: "user_Num"});
  moviecomments.belongsTo(users, { as: "id_user", foreignKey: "id"});
  users.hasMany(moviecomments, { as: "moviecomments", foreignKey: "id"});
  postcomments.belongsTo(users, { as: "user", foreignKey: "userId"});
  users.hasMany(postcomments, { as: "postcomments", foreignKey: "userId"});

  return {
    cinemas,
    cinemas1,
    eventcategory,
    events,
    meetboards,
    meetcomments,
    meetmessages,
    meets,
    meetusers,
    moviecomments,
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
