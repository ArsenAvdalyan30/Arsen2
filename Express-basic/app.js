"use strict";
const express = require("express");
const app = express();
const things = require("./routes/things");

app.use(express.json());

app.listen(3000, (err) => {
  if (err) {
    console.log("there was a problem", err);
    return;
  }
  console.log("listening on port 3000");
});
