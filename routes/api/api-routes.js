// Require all models
var db = require("../../models");

module.exports = function(app) {
    app.get('/fetch', function (req, res) {
        // var dir = req.params.path;
        res.render('saved',
        {
            title: 'Saved', 
            page: 'Saved Articles',
        });
        
    });
};