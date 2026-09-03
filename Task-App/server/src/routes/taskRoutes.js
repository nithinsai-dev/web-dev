import express from "express";

import {
  getTasks,
  addTask,
  toggleTask,
  removeTask,
} from "../controllers/taskController.js";

import { validate } from "../middleware/validate.js";

import {
  createTaskSchema,
  updateTaskSchema,
} from "../schemas/taskSchema.js";

const router = express.Router();

router.get("/", getTasks);

router.post("/", validate(createTaskSchema), addTask);

router.patch("/:id", validate(updateTaskSchema), toggleTask);

router.delete("/:id", removeTask);

export default router;