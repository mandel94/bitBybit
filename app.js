const path = require('path');
const express = require("express");
const app = express();


app.listen(3000, () => {
  console.log("Application started and Listening on port 3000");
});

// Set directories for serving static assets
app.use(express.static(path.join(__dirname, 'public')));

// Set view engine
app.set("view engine", "ejs");

// Set parsers
app.use(express.json());

app.get("/", (req, res) => {
  res.render('home');
});


