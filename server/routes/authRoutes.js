
import express from 'express';
import User from '../models/userModel.js';

const authRouter = express.Router();

authRouter.post('/registerUser', async (req, res) => {
    try {
        const { username, email, password } = req.body;
        console.log('req.body', req.body);
        const newUser = new User({ username, email, password });
        await newUser.save();
        res.status(201).json(newUser);
    } catch (err) {
        res.status(500).json({ message: err.message });
    }
});

authRouter.post('/login', async (req, res) => {
    try {
        const { email, password } = req.body;
        const user = await User.findOne({ email, password });
        if (user) {
            res.status(200).json(user);
        } else {
            res.status(401).json({ message: 'Invalid credentials' });
        }
    } catch (err) {
        res.status(500).json({ message: err.message });
    }
});

export default authRouter;