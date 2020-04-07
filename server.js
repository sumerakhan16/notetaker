const express = require("express");
const path = require("path");

// Create server application at port 8080
const app = express();
const PORT = process.env.PORT || 8080;
 
app.use(express.urlencoded({extended: true}));
app.use(express.json());


require("./routes/apiRoutes")(app);
require("./routes/htmlRoutes")(app);

app.use(express.static("public"));

app.listen(PORT, function() {
    console.log("App listening on PORT: " + PORT);
});