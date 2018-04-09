// API Routes
// =============================================================

const fetch = require("../../controllers/fetch");
const headline = require("../../controllers/headline");
const note = require("../../controllers/note");

module.exports = function(app) {
  
  try {
  app.get("/api/fetch", fetch.goScrape);

  app.post("/api/save/:id", headline.save);

  app.post("/api/delete/:id", note.delete);
  }
  catch(err) {
    if (err) console.log(err);
  }

};