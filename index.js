require("dotenv").config();
const express = require("express");
const app = express();
const PORT = process.env.PORT;
const { pool } = require("./util/databaseConfig");

app.set("view engine", "ejs");
app.use(express.static("public"));
// REST API: Re-presentational State Transfer
// GET POST PUT DELETE UPDATE
// www.bbc.com / sport;
// www.bbc.com / news;
// www.google.com/books
// www.fakebook.com = localhost
// app.get("localhost/homepage");

app.get("/homepage", async (request, response) => {
  try {
    const user = await pool.query("SELECT firstname FROM users");
    response.render("index", {
      data: { username: user.rows[0].firstname, loggedIn: true },
    });
  } catch (error) {
    console.error(error.message);
    res.status(500).json("Server error");
  }
});

app.get("/getAllUsers", async (req, res) => {
  try {
    const users = await pool.query("SELECT * FROM users");
    if (users.rows < 1) {
      res.json({ msg: "You don enter one chance!" });
    } else {
      res.json(users.rows);
    }
  } catch (error) {
    console.error(error.message);
    res.status(500).json("Server error");
  }
});

app.listen(PORT, () => {
  console.log(`Fakebook app. listening on port: ${PORT}.`);
});
