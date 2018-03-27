require("dotenv").config();
const express = require("express");
const cors = require("cors");
const { json } = require("body-parser");
const massive = require("massive");
const session = require("express-session");
const passport = require("passport");
const Auth0Strategy = require("passport-auth0");

const { getUser, logout } = require(`${__dirname}/controllers/userController`);
const app = express();

app.use(
  session({
    secret: process.env.SECRET,
    resave: false,
    saveUninitialized: true
  })
);

massive(process.env.CONNECTION_STRING)
  .then(db => {
    app.set("db", db);
  })
  .catch(err => console.log("Massive: Connection Error"));

app.use(cors());
app.use(json());

port = 3001;

app.listen(port, () => {
  console.log(`Port: ${port} Active!`);
});
