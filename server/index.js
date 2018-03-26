const express = require("express");
const cors = require("cors");
const { json } = require("body-parser");
const massive = require("massive");

const app = express();

app.use(cors());
app.use(json());

port = 3001;

app.listen(port, () => {
  console.log(`Port: ${port} Active!`);
});
