import {
  getAllTasks,
  getTaskById,
  createTask,
  updateTask,
  deleteTask
} from "../services/taskService.js";


export const getTasks = async (req, res, next) => {
  try {
    const tasks = await getAllTasks();

    res.status(200).json(tasks);
  } catch (error) {
    next(error);
  }
};


export const getTask = async (req, res, next) => {
  try {
    const taskId = Number(req.params.id);

    const task = await getTaskById(taskId);

    if (!task) {
      return res.status(404).json({
        message: "Task not found"
      });
    }

    res.status(200).json(task);
  } catch (error) {
    next(error);
  }
};


export const addTask = async (req, res, next) => {
  try {
    const task = await createTask(req.body);

    res.status(201).json(task);
  } catch (error) {
    next(error);
  }
};


export const editTask = async (req, res, next) => {
  try {
    const taskId = Number(req.params.id);

    const task = await updateTask(taskId, req.body);

    res.status(200).json(task);
  } catch (error) {
    next(error);
  }
};


export const removeTask = async (req, res, next) => {
  try {
    const taskId = Number(req.params.id);

    await deleteTask(taskId);

    res.status(204).send();
  } catch (error) {
    next(error);
  }
};