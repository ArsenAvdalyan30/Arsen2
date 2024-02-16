import express from "express";
import TodoController from "./TodoController.js";
const router = express.Router();

router.get("/todos", TodoController.getAllTodos);
router.post("/todos", TodoController.addTodo);
router.delete("/todos/:id", TodoController.deleteTodo);
router.patch("/todos/:id", TodoController.updateTodo);

export default router;
