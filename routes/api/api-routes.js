var express = require("express");
var app = express();

// Our scraping tools
// Axios is a promised-based http library, similar to jQuery's Ajax method
// It works on the client and on the server
var axios = require("axios");
var cheerio = require("cheerio");

// Require all models
var db = require("../../models");

app.get("/fetch", function(req, res) {
    console.log("GO");
    // // First, we grab the body of the html with request
    // axios.get("https://www.smashingmagazine.com/articles/").then(function(response) {
    //   // Then, we load that into cheerio and save it to $ for a shorthand selector
    //   var $ = cheerio.load(response.data);
  
    //   // Now, we grab every h2 within an article tag, and do the following:
    //   $("article h2").each(function(i, element) {
    //     // Save an empty result object
    //     var result = {};
  
    //     // Add the text and href of every link, and save them as properties of the result object
    //     result.title = $(this)
    //       .children("a")
    //       .text();
    //     result.link = $(this)
    //       .children("a")
    //       .attr("href");
  
    //     // Create a new Article using the `result` object built from scraping
    //     db.Article.create(result)
    //       .then(function(dbArticle) {
    //         // View the added result in the console
    //         console.log(dbArticle);
    //       })
    //       .catch(function(err) {
    //         // If an error occurred, send it to the client
    //         return res.json(err);
    //       });
    //   });
  
    //   // If we were able to successfully scrape and save an Article, send a message to the client
    //   res.send("Scrape Complete");
    // });
  });