// import express and other modules required
var express = require("express");
var bodyParser = require("body-parser");

var exphbs = require("express-handlebars");

// assign a variable to create express.js
var app = express();

//set port

var port = process.env.PORT || 3000;



// allow express to serve static directories

app.use(express.static("public"));

// set up express to handle data parsing
app.use(bodyParser.urlencoded({ extended: true }));


app.use(bodyParser.json());

// set express to use handlebars engine to generate HTML layouts
app.engine("handlebars", exphbs({ defaultLayout: "main"}));
app.set("view engine", "handlebars");

// import routes and  give server access
var routes = require('./controllers/burgers_controller.js');
app.use("/", routes);

// Start the server so that it can begin listening to the client requests
app.listen(port, function() {
    // Log when the server has started
    console.log("Server listening on: http://localhost:" + port);
});