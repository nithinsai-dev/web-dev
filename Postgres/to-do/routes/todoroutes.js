import express from "express"

import {
    getAllTodo,
    getTodo,
    addTodo,
    editTodo,
    removeTodo
} from "../controllers/todocontroller.js"

const router = express.Router();

router.get("/", getAllTodo);

router.get("/:id", getTodo);

router.post("/", addTodo);

router.put("/:id", editTodo);

router.delete("/:id", removeTodo);

export default router;