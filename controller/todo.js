const express = require("express");
const todoModel = require("../model/todo");

exports.createTodo = async (req, res) => {
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
  try {
    const todos = await todoModel.find();
    res.json(todos);
  } catch (error) {
    console.log(error);
    res.status(500).json({ message: error.message });
  }
};

exports.updateTodo = async (req, res) => {
  const { id } = req.params;
  const { title, description } = req.body;

  try {
    const updateTodo = await todoModel.findByIdAndUpdate(
      id,
      { title, description },
      { new: true }
    );

    if (!updatedTodo) {
      return res.status(404).json({ message: "Todo not found" });
    }

    res.json(updateTodo);
  } catch (error) {
    console.log(error);
    res.status(500).json({ message: error.message });
  }
};

exports.deleteTodo = async (req, res) => {
  const { id } = req.params;

  try {
    const deletedTodo = await todoModel.findByIdAndDelete(id);

    if (!deletedTodo) {
      return res.status(404).json({ message: "Todo not found" });
    }

    res.json({ message: "Todo deleted successfully", deletedTodo });
  } catch (error) {
    console.log(error);
    res.status(500).json({ message: error.message });
  }
};
