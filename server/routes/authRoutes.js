
import express from 'express';
import User from '../models/userModel.js';

const authRouter = express.Router();

authRouter.post('/registerUser', async (req, res) => {
    try {
        const { name, email, password } = req.body;
        const newUser = new User({ name, email, password });
        await newUser.save();
        res.status(201).json(newUser);
    } catch (err) {
        res.status(500).json({ message: err.message });
    }
});

export default authRouter;