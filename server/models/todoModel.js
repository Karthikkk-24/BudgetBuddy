import mongoose from 'mongoose';

const todoSchema = new mongoose.Schema({
    username: {
        type: String,
        required: true,
    },
    title: {
        type: String,
        required: true,
    },
    status: {
        type: String,
        required: true,
    },
    createdAt: {
        type: Date,
        default: Date.now,
    },
});

const TodoModel = mongoose.model('todos', todoSchema);

export default TodoModel;