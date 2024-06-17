
import express from 'express';
import TodoModel from '../models/todoModel.js';

const todoRouter = express.Router();


const getFormattedDate = () => {
    const date = new Date();
    const year = date.getFullYear();
    const month = String(date.getMonth() + 1).padStart(2, '0');
    const day = String(date.getDate()).padStart(2, '0');
    return `${year}-${month}-${day}`;
};

todoRouter.post('/insertTodo', async (req, res) => {
    try {
        const { todoTitle, user, date } = req.body;

        const insertTodo = await TodoModel.create({
            title: todoTitle,
            username: user,
            date: date
        });

        res.status(201).json(insertTodo);
    } catch (error) {
        console.log(error);
        res.status(500).json({ message: error.message });
    }
});

todoRouter.post('/getPendingTodos', async (req, res) => {
    try {
        const { user } = req.body;

        const getTodos = await TodoModel.find({
            username: user, 
            status: 'pending'
        });

        res.status(200).json({ getTodos });
    } catch (error) {
        console.log(error);
        res.status(500).json({ message: error.message });
    }
});

todoRouter.post('/getCompletedTodos', async (req, res) => {
    try {
        const { user } = req.body;

        const getTodos = await TodoModel.find({
            username: user, 
            status: 'completed'
        });

        res.status(200).json({ getTodos });
    } catch (error) {
        console.log(error);
        res.status(500).json({ message: error.message });
    }
});

todoRouter.post('/updateTodo', async (req, res) => {
    try {
        const { id, status } = req.body;
        console.log('id', id, 'status', status);
        const updateTodo = await TodoModel.findByIdAndUpdate(id, { status });
        res.status(200).json({ updateTodo });
    } catch (error) {
        console.log(error);
        res.status(500).json({ message: error.message });
    }
});

todoRouter.post('/getTodayTasks', async (req, res) => {
    try {
        const { user } = req.body;

        const getTodo = await TodoModel.find({
            username: user,
            status: 'pending'
        });

        const count = getTodo.length;

        res.status(200).json({ count });

    } catch (error) {
        console.log(error);
        res.status(500).json({ message: error.message });
    }
});

todoRouter.post('/getTodayCompletedTasks', async (req, res) => {
    try {
        const { user } = req.body;

        const getTodo = await TodoModel.find({
            username: user,
            status: 'completed'
        });

        const count = getTodo.length;

        res.status(200).json({ count });

    } catch (error) {
        console.log(error);
        res.status(500).json({ message: error.message });
    }
});

export default todoRouter;