require("dotenv").config();
const express = require("express");
const cors = require("cors");
const { json } = require("body-parser");
const massive = require("massive");
const session = require("express-session");
const passport = require("passport");
const path = require("path");
// CONTROLLER FILES
const { getUser, logout } = require(`${__dirname}/controllers/userController`);
// CONNECTING TO DB
massive(process.env.CONNECTION_STRING)
  .then(db => {
    app.set("db", db);
  })
  .catch(err => console.log("Massive: Connection Error"));
// DECLARE PORT
const port = 3001;
// DECLARE APP
const app = express();
// MIDDLEWARES
app.use(cors());
app.use(json());
// SESSION MIDDLEWARE
app.use(
  session({
    secret: process.env.SESSION_SECRET,
    resave: false,
    saveUninitialized: false,
    cookie: {
      maxAge: 10000
    }
  })
);
// PASSPORT MIDDLEWARE
app.use(passport.initialize());
app.use(passport.session());

// EDIT USER
passport.serializeUser((user, done) => {
  done(null, user);
});

// PUT USER ON REQ OBJECT AS REQ.USER
passport.deserializeUser((user, done) => {
  done(null, user);
});

// "ALEX, WHAT ARE ENDPOINTS?"
// app.get("/login", passport.authenticate("auth0"), function(req, res, next) {
//   you = req.user
//   req.session.user = req.user

// app.get("/logout", logout);
// app.get("/api/me", getUser);

app.listen(port, () => {
  console.log(`Port: ${port} Active!`);
});
