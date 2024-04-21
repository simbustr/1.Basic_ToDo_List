const express = require("express");
const todoModel = require("../model/todo");


// Define the individual route handlers
exports.createTodo = async (req, res) => {
    // Function logic for creating a new todo
    const { title, description } = req.body;
    try {
      const newTodo = new todoModel({ title, description });
      await newTodo.save();
      res.status(201).json(newTodo);
    } catch (error) {
      console.log(error);
      res.status(500).json({ message: error.message });
    }
  };
  
  exports.getAllTodos = async (req, res) => {
    // Function logic for getting all todos
    try {
      const todos = await todoModel.find();
      res.json(todos);
    } catch (error) {
      console.log(error);
      res.status(500).json({ message: error.message });
    }
  };


