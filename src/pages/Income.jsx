import axios from 'axios';
import { useEffect, useState } from 'react';
import BaseURL from '../components/BaseURL';
import IncomeTable from '../components/IncomeTable';

export default function Income() {
    const [incomeCategories, setIncomeCategories] = useState([]);
    const [amount, setAmount] = useState(0);
    const [incomeName, setIncomeName] = useState('');
    const [incomeDate, setIncomeDate] = useState('');
    const [incomeCategory, setIncomeCategory] = useState('');
    const [refresh, setRefresh] = useState(false);

    useEffect(() => {
        getIncomeCategories();
    }, []);

    const user = localStorage.getItem('user_id');

    const getIncomeCategories = async () => {
        try {
            const response = await axios.post(
                `${BaseURL()}/api/finance/getIncomeCategories`,
                {
                    user,
                }
            );

            console.log(response.data);

            if (response.status === 200) {
                console.log(response.data);
                console.log('incomeCategory', response.data.incomeCategories);
                setIncomeCategories(response.data.incomeCategories);

            }
        } catch (error) {
            console.log(error);
        }
    };

    const handleIncomeSubmit = async () => {
        try {
            const response = await axios.post(
                `${BaseURL()}/api/finance/addIncome`,
                {
                    user,
                    incomeName,
                    incomeCategory,
                    amount,
                    incomeDate,
                }
            );

            console.log(response.data);

            if (response.status === 201) {
                console.log(response.data);
                setAmount(0);
                setIncomeName('');
                setIncomeDate('');
                setIncomeCategory('');
                getIncomeCategories();
                setRefresh(!refresh);
            }
        } catch (error) {
            console.log(error);
        }
    };

    return (
        <div className="flex w-full h-full items-start justify-start gap-10 bg-background px-4 py-6 flex-col">
            <h1 className="text-5xl">Income</h1>
            <div className="flex flex-col items-start justify-start w-full h-auto gap-4">
                <div className="flex items-center justify-center w-full h-auto gap-6">
                    <div className="w-1/2 flex flex-col items-start justify-start gap-2">
                        <label className="font-semibold text-sm">
                            Income Name
                        </label>
                        <input
                            type="text"
                            name="name"
                            value={incomeName}
                            onChange={(e) => setIncomeName(e.target.value)}
                            id="name"
                            className="w-full h-12 border-2 border-slate-100 rounded-lg p-2"
                            required
                        />
                    </div>
                    <div className="w-1/2 flex flex-col items-start justify-start gap-2">
                        <label className="font-semibold text-sm">Date</label>
                        <input
                            type="date"
                            name="name"
                            value={incomeDate}
                            onChange={(e) => setIncomeDate(e.target.value)}
                            id="name"
                            className="w-full h-12 border-2 border-slate-100 rounded-lg p-2"
                            required
                        />
                    </div>
                </div>
                <div className="flex items-center justify-center w-full h-auto gap-6">
                    <div className="w-1/2 flex flex-col items-start justify-start gap-2">
                        <label className="font-semibold text-sm">
                            Select Income Category
                        </label>
                        <select
                            name="category"
                            id="category"
                            className="w-full h-12 border-2 border-slate-100 rounded-lg p-2"
                            required
                            value={incomeCategory}
                            onChange={(e) => setIncomeCategory(e.target.value)}
                        >
                            <option value="">Select Income Category</option>
                            {incomeCategories.map((category) => (
                                <option key={category._id} value={category._id}>
                                    {category.title}
                                </option>
                            ))}
                        </select>
                    </div>
                    <div className="w-1/2 flex flex-col items-start justify-start gap-2">
                        <label className="font-semibold text-sm">
                            Enter Amount
                        </label>
                        <input
                            type="number"
                            name="amount"
                            id="amount"
                            value={amount}
                            onChange={(e) => setAmount(e.target.value)}
                            className="w-full h-12 border-2 border-slate-100 rounded-lg p-2"
                            required
                        />
                    </div>
                </div>
                <button
                    onClick={handleIncomeSubmit}
                    type="submit"
                    className="w-auto h-auto hover:scale-110 transition-all bg-primary rounded-lg text-white px-5 py-3 flex items-center justify-center gap-1"
                >
                    Submit
                </button>
            </div>
            <IncomeTable refresh={refresh} />
        </div>
    );
}
