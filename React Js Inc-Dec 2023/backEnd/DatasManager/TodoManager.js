import mysql from "mysql";
import { resolve } from "path";
import util from "util";
const con = mysql.createConnection({
  host: "localhost",
  user: "root",
  password: "mynewpassword00",
  database: "Todos",
});

con.query = util.promisify(con.query);

class TodoManager {
  getAllTodos() {
    return new Promise((resolve, reject) => {
      const q = "SELECT * FROM todotable";
      con.query(q, (err, data) => {
        if (err) return reject(err);
        resolve(data);
      });
    });
  }

  addTodo(req) {
    return new Promise((resolve, reject) => {
      console.log("add", req.body);
      const q = "INSERT INTO todotable (title, todoId, isComplete) VALUES (?)";
      const values = [req.body.title, req.body.todoId, req.body.isComplete];
      con.query(q, [values], (err) => {
        if (err) return reject(err);
        resolve("todo has been added");
      });
    });
  }

  deleteTodo(req) {
    return new Promise((resolve, reject) => {
      const q = `DELETE FROM todotable WHERE todoId = (?)`;
      const values = [req.params.id];
      con.query(q, [values], (err) => {
        if (err) return reject(err);
        resolve("todo has been deleted");
      });
    });
  }

  updateTodo(req) {
    return new Promise((resolve, reject) => {
      console.log("req.params.id: ", req.params.id);
      const q = `UPDATE todotable SET isComplete = true WHERE todoId = (?)`;
      const values = [req.params.id];
      con.query(q, [values], (err) => {
        if (err) return reject(err);
        resolve("todo has been updated");
      });
    });
  }
}

export default new TodoManager();
