
import express from 'express';
import CashbookModel from '../models/cashbookModel.js';
import ExpenseModel from '../models/expenseModel.js';
import IncomeModel from '../models/incomeModel.js';

const cashRouter = express.Router();

const getFormattedDate = () => {
    const date = new Date();
    const year = date.getFullYear();
    const month = String(date.getMonth() + 1).padStart(2, '0');
    const day = String(date.getDate()).padStart(2, '0');
    return `${year}-${month}-${day}`;
};



export default cashRouter;