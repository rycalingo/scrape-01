// Routes
// =============================================================
module.exports = function(app) {
  
  module.exports = {
    
       fetch: require("../../controllers/fetch.js")(app),
    headline: require("../../controllers/headline.js")(app),
        view: require("../../controllers/note.js")(app)
  };

};