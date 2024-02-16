import BooksManager from "./BooksManager.js";

class BooksController {
  async getAllBooks(req, res) {
    const allBooks = await BooksManager.getAllBooks();
    return res.json(allBooks);
  }
  async addBooks(req, res) {
    await BooksManager.addBooks(req);
    return res.json("book has been added");
  }
  async deleteBookById(req, res) {
    await BooksManager.deleteBookById(req);
    return res.json("book has been deleted");
  }
  async updateBook(req, res) {
    await BooksManager.updateBook(req);
    return res.json("book has been updated");
  }
}

export default new BooksController();
