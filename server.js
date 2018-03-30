var express = require("express");
var bodyParser = require("body-parser");
var logger = require("morgan");
var mongoose = require("mongoose");

// Our scraping tools
// Axios is a promised-based http library, similar to jQuery's Ajax method
// It works on the client and on the server
var axios = require("axios");
var cheerio = require("cheerio");

// Require all models
// var db = require("./models");

var PORT = 3000;

try {
// Initialize Express
var app = express();

// Configure middleware

// Use morgan logger for logging requests
app.use(logger("dev"));

// Use express.static to serve the public folder as a static directory
app.use(express.static(process.cwd() + "/public"));

// Use body-parser for handling form submissions
app.use(bodyParser.urlencoded({ extended: true }));


var MONGODB_URI = process.env.MONGODB_URI || "mongodb://localhost/mongoHeadlines";

// By default mongoose uses callbacks for async queries, we're setting it to use promises (.then syntax) instead
// Connect to the Mongo DB
mongoose.Promise = Promise;
mongoose.connect(MONGODB_URI);

// Routes

// parse application/json
app.use(bodyParser.json());

// Set Handlebars.
var exphbs = require("express-handlebars");

var hbs = exphbs.create({
  defaultLayout: "main",
  extname: '.hbs',
  helpers: {
    // add '#is' helper
    is: function(lvalue, rvalue, options) {
      if (arguments.length < 2)
          throw new Error("Handlebars Helper equal needs 2 parameters");
      if( lvalue!=rvalue ) {
          return options.inverse(this);
      } else {
          return options.fn(this);
      }
    }
  }
});

app.engine("hbs", hbs.engine);

app.set("view engine", "hbs");

// Import routes and give the server access to them.
require("./routes/index")(app);

// Start the server
app.listen(PORT, function() {
  console.log("App running on port " + PORT + "!");
});

}
catch(err) {
  if (err) console.log(err);
}