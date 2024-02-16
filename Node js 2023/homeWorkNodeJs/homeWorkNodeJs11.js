const express = require("express");
const app = express();
app.use(express.json());
const dotenv = require("dotenv");
dotenv.config();
const PORT = process.env.PORT || 5000;

app.listen(PORT, () => {
  console.log(`server is listening on port ${PORT}`);
});

const allStudents = [];

app.post("/students", (req, res) => {
  createUser(req.body, res);
  console.log("allStudents", allStudents);
});

app.get("/students", (req, res) => {
  console.log("req.query", req.query);
  console.log("req.params", req.params);
  getStudentByID(req.query, res);
  console.log(`allStudent in get`, allStudents);
});

function getStudentByID({ id }, res) {
  console.log("allStudents in getStudentByID", allStudents);
  let foundUser = allStudents.find((user) => user.id === Number(id));
  console.log(foundUser);
  if (foundUser) {
    res.status(200).json(foundUser);
  } else {
    res.status(400).send(`user is not found!`);
  }
}

class Validate {
  validName(name) {
    if (typeof name !== "string" || name.length <= 1) return false;
    return true;
  }
  validAge(num) {
    if (isNaN(num)) return false;
    return true;
  }
  validGrade(num) {
    if (isNaN(num) || num > 100) return false;
    return true;
  }
}
let id = 0;

function createUser(userBody, res) {
  id++;
  userBody.id = id;
  if (!new Validate().validAge(userBody.age))
    res.status(400).send(`age is wrong!`);
  else if (!new Validate().validName(userBody.name))
    res.status(400).send(`name is wrong!`);
  else if (!new Validate().validGrade(userBody.grade))
    res.status(400).send(`grade is wrong!`);
  else {
    allStudents.push(userBody);
    res.status(200).json(userBody);
    console.log("allStudents in createUser", allStudents);
  }
}