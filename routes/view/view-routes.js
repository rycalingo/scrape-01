// Require all models
var db = require("../../models");

module.exports = function(app) {

    app.get('/saved', function (req, res) {
        // var dir = req.params.path;
        var hbsObject = {}
        db.Headline.find({})
        .then( function(data) {
            hbsObject.html_title = 'Saved', 
            hbsObject.pageName = 'Saved Articles',
            hbsObject.article = data
            // console.log(data);
        })
        .then( function() {
            // console.log(hbsObject);
            res.render("saved", hbsObject);
        });
    });
    // Create all our routes and set up logic within those routes where required.
    app.get("/", function(req, res) {
        console.log(`"in contollers/headlines"`)
        var hbsObject = {}
        db.Headline.find({})
        .then( function(data) {
            hbsObject.html_title = 'Home', 
            hbsObject.pageName = 'Home',
            hbsObject.article = data
            // console.log(data);
        })
        .then( function() {
            // console.log(hbsObject);
            res.render("home", hbsObject);
        });
    });
};