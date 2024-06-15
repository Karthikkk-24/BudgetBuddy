
import express from 'express';

const todoRouter = express.Router();

todoRouter.post('/insertTodo', async (req, res) => {
    try {
        
    } catch (error) {
        console.log(error);
        res.status(500).json({ message: error.message });
    }
})

export default todoRouter;