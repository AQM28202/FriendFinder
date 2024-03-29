// Dependencies
var express = require("express");
var path = require("path");


// Sets up the Express App
var app = express();
var PORT = process.env.PORT || 8080;

// Sets up the Express app to handle data parsinG
app.use(express.urlencoded({ extended: true }));  
app.use(express.json());
app.use(express.static('./app/public'));


// ROUTER
// The below points our server to a series of "route" files.
// These routes give our server a "map" of how to respond when users visit or request data from various URLs.

require("./app/routing/apiRoutes.js")(app);
require("./app/routing/htmlRoutes.js")(app);

// Starts the server to begin listening
app.listen(PORT, function(){
    console.log("App listening on PORT: " + PORT);
});
