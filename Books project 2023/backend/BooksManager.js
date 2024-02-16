import db from "./Connection.js";
import util from "util";

db.query = util.promisify(db.query);

class BooksManager {
  getAllBooks() {
    return new Promise((resolve, reject) => {
      const q = "SELECT * FROM books";
      db.query(q, (err, data) => {
        if (err) return reject(err);
        return resolve(data);
      });
    });
  }

  addBooks(req) {
    const q =
      "INSERT INTO books (`title`, `desc`, `price`, `cover`) VALUES (?)";
    const values = [
      req.body.title,
      req.body.desc,
      req.body.price,
      req.body.cover,
    ];
    return new Promise((resolve, reject) => {
      db.query(q, [values], (err) => {
        if (err) reject(err);
        resolve("book has been added");
      });
    });
  }

  deleteBookById(req) {
    return new Promise((resolve, reject) => {
      const q = "DELETE FROM books WHERE id = ?";
      const bookId = req.params.id;
      db.query(q, [bookId], (err) => {
        if (err) reject(err);
        resolve("Book has been deleted");
      });
    });
  }
  
  updateBook(req) {
    return new Promise((resolve, reject) => {
      const q =
        "UPDATE books SET `title`=?, `desc` =?, `price` = ?, `cover` =? WHERE id = ?";
      const bookId = req.params.id;
      const values = [
        req.body.title,
        req.body.desc,
        req.body.price,
        req.body.cover,
      ];
      db.query(q, [...values, bookId], (err) => {
        if (err) return reject(err);
        resolve("book has been updated");
      });
    });
  }
}

export default new BooksManager();
