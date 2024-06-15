
import express from 'express';
import TodoModel from '../models/todoModel.js';

const todoRouter = express.Router();

todoRouter.post('/insertTodo', async (req, res) => {
    try {
        const { todoTitle, user } = req.body;

        const insertTodo = await TodoModel.create({
            title: todoTitle,
            username: user
        });

        res.status(201).json(insertTodo);
    } catch (error) {
        console.log(error);
        res.status(500).json({ message: error.message });
    }
})

export default todoRouter;