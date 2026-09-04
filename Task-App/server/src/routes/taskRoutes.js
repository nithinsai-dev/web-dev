import express from "express";

import {
  getTasks,
  getTask,
  addTask,
  editTask,
  removeTask
} from "../controllers/taskController.js";

import { validate } from "../middleware/validate.js";

import {
  createTaskSchema,
  updateTaskSchema
} from "../schemas/taskSchema.js";


const router = express.Router();


router.get("/", getTasks);

router.get("/:id", getTask);

router.post(
  "/",
  validate(createTaskSchema),
  addTask
);

router.patch(
  "/:id",
  validate(updateTaskSchema),
  editTask
);

router.delete(
  "/:id",
  removeTask
);


export default router;