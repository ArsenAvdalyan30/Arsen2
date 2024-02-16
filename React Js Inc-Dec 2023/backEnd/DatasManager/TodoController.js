import TodoManager from "./TodoManager.js";

class TodoController {
  async getAllTodos(req, res) {
    const data = await TodoManager.getAllTodos();
    return res.json(data);
  }
  async addTodo(req, res) {
    const result = await TodoManager.addTodo(req);
    return res.json(result);
  }
  async deleteTodo(req, res) {
    const result = await TodoManager.deleteTodo(req);
    return res.json(result);
  }
  async updateTodo(req, res) {
    console.log(req);
    const result = await TodoManager.updateTodo(req);
    return res.json(result);
  }
}
export default new TodoController();
