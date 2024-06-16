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
    createdAt: {
        type: Date,
        default: Date.now,
    },
});

const ExpenseCategoryModel = mongoose.model('expenseCategory', expenseSchema);

export default ExpenseCategoryModel;