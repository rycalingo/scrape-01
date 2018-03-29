var path = require("path");

// Routes
// =============================================================
module.exports = function(app) {

  module.exports = {
    API: require("./api/api-routes")(app),
    VIEW: require("./view/view-routes")(app)
  };


};