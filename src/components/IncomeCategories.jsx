import axios from 'axios';
import { useEffect, useState } from 'react';
import Serverport from './Serverport';

export default function IncomeCategories() {
    const [incomeCategoryName, setIncomeCategoryName] = useState('');
    const [incomeCategories, setIncomeCategories] = useState([]);

    useEffect(() => {
        getIncomeCategories();
    }, []);

    const user = localStorage.getItem('user_id');

    const getIncomeCategories = async () => {
        try {
            const response = await axios.post(
                `${Serverport()}/api/users/getIncomeCategories`,
                {
                    user,
                }
            );

            console.log(response.data);

            if (response.status === 200) {
                console.log(response.data);
                setIncomeCategories(response.data.income);
            }
        } catch (error) {
            console.log(error);
        }
    };

    return (
        <>
            <h3 className="text-2xl font-semibold">Income Categories</h3>
            <div className="flex flex-col items-start justify-start gap-2 w-full h-auto">
                <label
                    htmlFor="income"
                    className="font-semibold text-sm text-left"
                >
                    Income Category Name
                </label>
                <input
                    type="text"
                    className="border-2 rounded-xl border-slate-100 pl-3 pr-3 h-10 w-96"
                    value={incomeCategoryName}
                    id="income"
                    onChange={(e) => setIncomeCategoryName(e.target.value)}
                />
            </div>
            <button
                type="submit"
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
