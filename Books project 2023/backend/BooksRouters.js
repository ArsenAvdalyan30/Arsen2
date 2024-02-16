import express from "express";
import BooksController from "./BooksController.js";
const router = express.Router();

router.get("/books", BooksController.getAllBooks);
router.post("/books", BooksController.addBooks);
router.delete("/books/:id", BooksController.deleteBookById);
router.put("/books/:id", BooksController.updateBook);

export default router;
