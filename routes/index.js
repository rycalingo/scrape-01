var path = require("path");

// Routes
// =============================================================
module.exports = function(app) {

  module.exports = {
    API: require("./api/api-routes"),
    VIEW: require("./view/view-routes")
  };


};