// Require all models
var db = require("../../models");

module.exports = function(app) {

    app.get('/saved', function (req, res) {
        // var dir = req.params.path;
        res.render('saved', {
            html_title: 'Saved', 
            pageName: 'Saved Articles',
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
            console.log(hbsObject);
            res.render("home", hbsObject);
        });
    });
};