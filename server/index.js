const express = require("express");

const app = express();

port = 3001;

app.listen(port, () => {
  console.log(`Port: ${port} Active!`);
});
