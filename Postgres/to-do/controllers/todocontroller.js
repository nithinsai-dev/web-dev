import {
    getTodos,
    getTodoById,
    createTodo,
    updateTodo,
    deleteTodo
} from "../models/todomodel.js"

export const getAllTodo = async (req, res) => {
    try {
        const todos = await getTodos();

        res.status(200).json(todos);
    } catch (err) {
        res.status(500).json({
            message: err.message
        });
        console.log(err.message);
    }
};

export const getTodo = async (req, res) => {
    try {
        const { id } = req.params;
        const todo = await getTodoById(id);

        if (!todo) {
            res.status(404).json({
                message: "todo not found"
            })
        }

        res.status(200).json(todo);
    } catch (err) {
        res.status(500).json({
            message: err.message
        });
    }
};

export const addTodo = async (req, res) => {

    try {

        const { title, description } = req.body;

        const todo = await createTodo(title, description);

        res.status(201).json(todo);

    } catch (err) {

        res.status(500).json({
            message: err.message
        });

    }

};

export const editTodo = async (req, res) => {

    try {

        const { id } = req.params;

        const { title, description, is_completed } = req.body;

        const todo = await updateTodo(
            id,
            title,
            description,
            is_completed
        );

        res.status(200).json(todo);

    } catch (err) {

        res.status(500).json({
            message: err.message
        });

    }

};

export const removeTodo = async (req, res) => {

    try {

        const { id } = req.params;

        await deleteTodo(id);

        res.status(200).json({
            message: "Todo deleted successfully"
        });

    } catch (err) {

        res.status(500).json({
            message: err.message
        });

    }

};
