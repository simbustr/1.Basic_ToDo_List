var express = require("express");
var router = express.Router();
const todoController = require("../controller/todo");

// Create a new todo item
router.post("/", todoController.createTodo);

// Get all items
router.get("/", todoController.getAllTodos);

module.exports = router;
