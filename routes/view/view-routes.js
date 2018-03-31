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
    app.get('*', function (req, res) {
        // var dir = req.params.path;
        res.render('home', {
            html_title: 'Home', 
            pageName: 'Home'
        });

    });
};