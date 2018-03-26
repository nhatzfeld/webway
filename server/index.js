const express = require("express");
const cors = require("cors");
const { json } = require("body-parser");
const massive = require("massive");

massive(process.env.CONNECTION_STRING)
  .then(db => {
    app.set("db", db);
  })
  .catch(err => console.log("Massive: CONNECTION_STRING_ERROR!!!"));

const app = express();

app.use(cors());
app.use(json());

port = 3001;

app.listen(port, () => {
  console.log(`Port: ${port} Active!`);
});
