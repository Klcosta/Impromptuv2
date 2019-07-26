const express = require("express");
const path = require("path");
const routes = require("./routes")
const bodyParser = require("body-parser")
const PORT = process.env.PORT || 3001;
const app = express();

// Define middleware here
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

// Serve up static assets (usually on heroku)
app.use(routes)

// Define API routes here

// app.get("/", function(req, res){
//     res.sendFile(path.join(__dirname,"home.html"));
// });

// Send every other request to the React app
// Define any API routes before this runs

app.listen(PORT, () => {
  console.log(`🌎 ==> API server now on port ${PORT}!`);
});
