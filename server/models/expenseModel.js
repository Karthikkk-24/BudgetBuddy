import mongoose from 'mongoose';

const expenseSchema = new mongoose.Schema({
    username: {
        type: String,
        required: true,
    },
    title: {
        type: String,
        required: true,
    },
    category: {
        type: String,
        required: true,
    },
    amount: {
        type: Number,
        required: true,
    },
    date: {
        type: String,
    },
    createdAt: {
        type: Date,
        default: Date.now,
    },
});

const ExpenseModel = mongoose.model('expenses', expenseSchema);

export default ExpenseModel;