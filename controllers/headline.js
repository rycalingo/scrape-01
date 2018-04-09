
// Import the model to use its database functions.
var db = require("../models");

module.exports = {

    save: function(req, res) {
        db.Headline.findOneAndUpdate({ _id: req.params.id }, req.body)
            .then(function(dbArticle) {
                
            // If we were able to successfully find an Article with the given id, send it back to the client
            res.json(req.params);
            })
            .catch(function(err) {
            // If an error occurred, send it to the client
            res.json(err);
            });
    }
};