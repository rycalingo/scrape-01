// Routes
// =============================================================
module.exports = function(app) {
  
  module.exports = {
    
       fetch: require("../../controllers/fetch")(app),
    headline: require("../../controllers/headline")(app),
        note: require("../../controllers/note")(app)
  };

};