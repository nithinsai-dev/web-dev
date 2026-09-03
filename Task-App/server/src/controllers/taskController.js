import {
  getAllTasks,
  createTask,
  updateTask,
  deleteTask,
} from "../models/taskModel.js";

export const getTasks = async (req, res, next) => {
  try {
    const tasks = await getAllTasks();

    res.status(200).json(tasks);
  } catch (error) {
    next(error);
  }
};

export const addTask = async (req, res, next) => {
  try {
    const { title, description } = req.body;

    const task = await createTask(title, description);

    res.status(201).json(task);
  } catch (error) {
    next(error);
  }
};

export const toggleTask = async (req, res, next) => {
  try {
    const { id } = req.params;
    const { completed } = req.body;

    const task = await updateTask(id, completed);

    if (!task) {
      return res.status(404).json({
        message: "Task not found",
      });
    }

    res.status(200).json(task);
  } catch (error) {
    next(error);
  }
};

export const removeTask = async (req, res, next) => {
  try {
    const { id } = req.params;

    const task = await deleteTask(id);

    if (!task) {
      return res.status(404).json({
        message: "Task not found",
      });
    }

    res.status(200).json({
      message: "Task deleted",
      task,
    });
  } catch (error) {
    next(error);
  }
};