
import express from 'express';
import CashbookModel from '../models/cashbookModel.js';
import ExpenseCategoryModel from '../models/expenseCategoryModel.js';
import ExpenseModel from '../models/expenseModel.js';
import IncomeCategoryModel from '../models/incomeCategoryModel.js';
import IncomeModel from '../models/incomeModel.js';

const cashRouter = express.Router();

const getFormattedDate = () => {
    const date = new Date();
    const year = date.getFullYear();
    const month = String(date.getMonth() + 1).padStart(2, '0');
    const day = String(date.getDate()).padStart(2, '0');
    return `${year}-${month}-${day}`;
};

cashRouter.post('/addExpenseCategory', async (req, res) => {
    try {
        const { user, expenseCategoryName } = req.body;

        const expenseCategory = await ExpenseCategoryModel.create({
            username: user,
            title: expenseCategoryName
        });

        res.status(201).json({ expenseCategory });

    } catch (error) {
        console.log(error);
        res.status(500).json({ message: error.message });
    }
});

cashRouter.post('/getExpenseCategories', async (req, res) => {
    try {
        const { user } = req.body;

        const expenseCategories = await ExpenseCategoryModel.find({
            username: user
        });

        res.status(200).json({ expenseCategories });

    } catch (error) {
        console.log(error);
        res.status(500).json({ message: error.message });
    }
});

cashRouter.post('/addIncomeCategory', async (req, res) => {
    try {
        const { user, incomeCategoryName } = req.body;

        console.log('req.body', req.body);

        const incomeCategory = await IncomeCategoryModel.create({
            username: user,
            title: incomeCategoryName
        });

        res.status(201).json({ incomeCategory });
    } catch (error) {
        console.log(error);
        res.status(500).json({ message: error.message });
    }
});

cashRouter.post('/getIncomeCategories', async (req, res) => {
    try {
        const { user } = req.body;

        const incomeCategories = await IncomeCategoryModel.find({
            username: user
        });

        res.status(200).json({ incomeCategories });
    } catch (error) {
        console.log(error);
        res.status(500).json({ message: error.message });
    }


});

cashRouter.post('/addIncome', async (req, res) => {
    try {
        const { user, incomeName, incomeCategory, amount, incomeDate } = req.body;

        const income = await IncomeModel.create({
            username: user,
            title: incomeName,
            category: incomeCategory,
            amount,
            date: incomeDate,
        });

        res.status(201).json({ income });

    } catch (error) {
        console.log(error);
    }
});

cashRouter.post('/addExpense', async (req, res) => {
    try {
        const { user, expenseName, expenseCategory, amount, expenseDate } = req.body;

        const expense = await ExpenseModel.create({
            username: user,
            title: expenseName,
            category: expenseCategory,
            amount,
            date: expenseDate
        });

        res.status(201).json({ expense });

    } catch (error) {
        console.log(error);
    }
});



export default cashRouter;