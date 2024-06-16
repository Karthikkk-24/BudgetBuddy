import axios from 'axios';
import { useEffect, useState } from 'react';
import Serverport from './Serverport';

export default function ExpenseCategories() {
    const [expenseCategoryName, setExpenseCategoryName] = useState('');
    const [expenseCategories, setExpenseCategories] = useState([]);

    useEffect(() => {
        getExpenseCategories();
    }, []);

    const user = localStorage.getItem('user_id');

    const getExpenseCategories = async () => {
        try {
            const response = await axios.post(
                `${Serverport()}/api/users/getExpenseCategories`,
                {
                    user,
                }
            );

            console.log(response.data);

            if (response.status === 200) {
                console.log(response.data);
                setExpenseCategories(response.data.expense);
            }
        } catch (error) {
            console.log(error);
        }
    };

    const handleSubmit = async () => {
        try {
            if (!expenseCategoryName) {
                return;
            }

            const response = await axios.post(
                `${Serverport()}/api/users/addExpenseCategory`,
                {
                    user,
                    expenseCategoryName,
                }
            );

            console.log(response.data);

            if (response.status === 200) {
                console.log(response.data);
                setExpenseCategoryName('');
                getExpenseCategories();
            }

        } catch (error) {
            console.log(error);
        }
    };

    return (
        <>
            <h3 className="text-2xl font-semibold">Expense Categories</h3>
            <div className="flex flex-col items-start justify-start gap-2 w-full h-auto">
                <label
                    htmlFor="expense"
                    className="font-semibold text-sm text-left"
                >
                    Expense Category Name
                </label>
                <input
                    type="text"
                    className="border-2 rounded-xl border-slate-100 pl-3 pr-3 h-10 w-96"
                    value={expenseCategoryName}
                    id="expense"
                    onChange={(e) => setExpenseCategoryName(e.target.value)}
                />
            </div>
            <button
                type="submit"
                onClick={() => {
                    handleSubmit();
                }}
                className="bg-primary h-auto w-auto py-3 px-5 font-semibold text-sm rounded-lg text-white hover:scale-110 transition-all"
            >
                Submit
            </button>
            <table className="w-full border-2 mt-5 border-slate-100">
                <thead>
                    <tr>
                        <th className="py-3">Sr. No</th>
                        <th className="py-3">Income Category Name</th>
                        <th className="py-3">Actions</th>
                    </tr>
                </thead>
            </table>
        </>
    );
}
