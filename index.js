const express = require("express");
const app = express();
const PORT = 3009;

app.set("view engine", "ejs");
app.use(express.static("public"));
// REST API: Re-presentational State Transfer
// GET POST PUT DELETE UPDATE
// www.bbc.com / sport;
// www.bbc.com / news;
// www.google.com/books
// www.fakebook.com = localhost
// app.get("localhost/homepage");

app.get("/homepage", (request, response) => {
  response.render("index", { data: { username: "Yassir", loggedIn: true } });
});

app.listen(PORT, () => {
  console.log(`Fakebook app. listening on port: ${PORT}.`);
});
