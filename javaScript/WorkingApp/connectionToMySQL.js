const express = require("express");
const app = express();
const PORT = 8000;
const { getUsers } = require("./getUsersFromDB");

app.listen(PORT, () => {
  console.log(`app is listening on port ${PORT}`);
});

function getUsers1() {
  app.get("/getUsers", async (req, res) => {
    res.send(await getUsers());
    res.end();
  });
}

getUsers1();
