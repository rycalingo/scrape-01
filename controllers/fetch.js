
var express = require("express");

var router = express.Router();

// Import the model "headline" to use its database functions.
var headline = require("../models/index");

// Create all our routes and set up logic within those routes where required.
router.get("/", function(req, res) {
  headline.selectAll(function(data) {
    var hbsObject = {
        headlines: data
    };
    // console.log(hbsObject);
    res.render("index", hbsObject);
  });
});

router.post("/api/fetch", function(req, res) {
  headline.insertOne([
    "title"
  ], [
    req.body.headline
  ], function(result) {
    // Send back the ID of the new quote
    res.json({ id: result.insertId });
  });
});

router.put("/api/fetch/:id", function(req, res) {
  var condition = "id = " + req.params.id;

  console.log("condition", condition);

  headline.updateOne({
    devoured: req.body.devoured
  }, condition, function(result) {
    if (result.changedRows == 0) {
      // If no rows were changed, then the ID must not exist, so 404
      return res.status(404).end();
    } else {
      res.status(200).end();
    }
  });
});

router.delete("/api/fetch/:id", function(req, res) {
  var condition = "id = " + req.params.id;
console.log(condition);
headline.delete(condition, function(result) {
    if (result.affectedRows == 0) {
      // If no rows were changed, then the ID must not exist, so 404
      return res.status(404).end();
    } else {
      res.status(200).end();
    }
  });
});

// Export routes for server.js to use.
module.exports = router;