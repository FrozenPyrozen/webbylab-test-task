const movieRoutes = require("./movie_routes");

module.exports = function(app, db) {
  movieRoutes(app, db);
};
