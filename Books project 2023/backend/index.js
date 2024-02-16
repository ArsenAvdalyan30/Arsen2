import express from "express";
import BooksRouters from "./BooksRouters.js";

const router = express.Router();
router.use("/", BooksRouters);

export default router;
