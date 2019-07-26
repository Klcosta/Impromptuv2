const express = require("express");
const path = require("path");
const bodyParser = require("body-parser")
const routes = require("./routes")
const PORT = process.env.PORT || 3001;
const app = express();

// Define middleware here
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());


// Serve up static assets (usually on heroku)
if (process.env.NODE_ENV === "production") {
  app.use(express.static("client/build"));
}

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
