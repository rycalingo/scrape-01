
// Import the model to use its database functions.
var db = require("../models");

module.exports = function(app) {

    app.post("/api/article/:id", function(req, res) {
        db.Headline.updateOne(req.body)
            .then(function(dbArticle) {
                
            // If we were able to successfully find an Article with the given id, send it back to the client
            res.json(req.params);
            })
            .catch(function(err) {
            // If an error occurred, send it to the client
            res.json(err);
            });
    });

    // app.delete("/api/headline/:id", function(req, res) {
    //     var condition = "id = " + req.params.id;
    //     console.log(condition);
    //     burger.delete(condition, function(result) {
    //         if (result.affectedRows == 0) {
    //         // If no rows were changed, then the ID must not exist, so 404
    //         return res.status(404).end();
    //         } else {
    //         res.status(200).end();
    //         }
    //     });
    // });
};