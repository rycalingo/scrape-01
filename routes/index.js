

// Routes
// =============================================================
module.exports = function(app) {
  
  module.exports = {
    api: require("./api/api-routes")(app),
    view: require("./view/view-routes")(app)
  };

};