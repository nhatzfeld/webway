const express = require("express");
const cors = require("cors");
const { json } = require("body-parser");

const app = express();

port = 3001;

app.listen(port, () => {
  console.log(`Port: ${port} Active!`);
});
