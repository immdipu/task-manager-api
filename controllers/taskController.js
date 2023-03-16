const Task = require("./../Models/taskModel");

const getAllTasks = async (req, res) => {
  try {
    const tasks = await Task.find();
    res.status(200).json({
      status: "success",
      result: tasks.length,
      data: {
        tasks,
      },
    });
  } catch (error) {
    res.status(400).json({
      status: "failed getAllTasks",
      message: "Error",
    });
  }
};

const createTask = async (req, res) => {
  try {
    const newTask = await Task.create(req.body);
    res.status(200).json({
      status: "success",
      data: {
        tasks: newTask,
      },
    });
  } catch (error) {
    res.status(400).json({
      status: "failed",
      message: "Error",
    });
  }
};

const getTask = async (req, res) => {
  try {
    res.status(200).json({
      status: "success",
      data: {
        task,
      },
    });
  } catch (error) {
    res.status(400).json({
      status: "failed",
      message: "Error",
    });
  }
};

const updateTask = async (req, res) => {
  try {
    res.status(200).json({
      status: "success",
      data: {
        task,
      },
    });
  } catch (error) {
    res.status(400).json({
      status: "failed",
      message: "Error",
    });
  }
};

const deleteTask = async (req, res) => {
  try {
    res.status(200).json({
      status: "success",
      data: {
        task,
      },
    });
  } catch (error) {
    res.status(400).json({
      status: "failed",
      message: "Error",
    });
  }
};

module.exports = {
  getAllTasks,
  createTask,
  updateTask,
  getTask,
  deleteTask,
};
