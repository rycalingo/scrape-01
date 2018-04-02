
// Import the model to use its database functions.
var db = require("../models");

module.exports = function(app) {

    // // Create all our routes and set up logic within those routes where required.
    // app.get("/", function(req, res) {
    //     console.log(`"in contollers/headlines"`)
    //     var hbsObject = {}
    //     db.Headline.find({})
    //     .then( function(data) {
    //         hbsObject.html_title = 'Home', 
    //         hbsObject.pageName = 'Home',
    //         hbsObject.article = data
    //         // console.log(data);
    //     })
    //     .then( function() {
    //         console.log(hbsObject);
    //         res.render("home", hbsObject);
    //     });
    // });

    // app.post("/api/headline", function(req, res) {
    //     db.Headline.insertOne([
    //         "headline"
    //     ], [
    //         req.body.headline
    //     ], function(result) {
    //         // Send back the ID of the new quote
    //         res.json({ id: result.insertId });
    //     });
    // });

    // app.put("/api/headline/:id", function(req, res) {
    // var condition = "id = " + req.params.id;

    // console.log("condition", condition);

    //     burger.updateOne({
    //         devoured: req.body.devoured
    //     }, condition, function(result) {
    //         if (result.changedRows == 0) {
    //         // If no rows were changed, then the ID must not exist, so 404
    //         return res.status(404).end();
    //         } else {
    //         res.status(200).end();
    //         }
    //     });
    // });

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