var path = require("path");

// Routes
// =============================================================
module.exports = function(app) {

  module.exports = {
    // API: require("./api/api-routes.js")(app),
    VIEW: require("./view/view-routes.js")(app)
  };


};