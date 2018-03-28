// Require all models
var db = require("../../models/index.js");

module.exports = function(app) {

    app.get('/saved', function (req, res) {
        // var dir = req.params.path;
        res.render('saved',
        {
            title: 'Saved', 
            page: 'Saved Articles',
        });
        
    });

    app.get('/', function (req, res) {
        // var dir = req.params.path;

        db.Headline.find(function(data) {
            console.log(data);
            var hbsObject = {
                headline: data
            };
        });
        res.render('home',
        {
            title: 'Home',
            page: 'Home',

        });
        
    });
};