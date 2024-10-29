import axios from 'axios';
import { useEffect, useState } from 'react';
import BaseURL from '../components/BaseURL';

export default function Cashbook() {
    const [cashbookEntries, setCashbookEntries] = useState([]);

    useEffect(() => {
        fetchCashbookEntries();
    }, []);

    const user = sessionStorage.getItem('user_id');

    const fetchCashbookEntries = async () => {
        try {
            const response = await axios.post(
                `${BaseURL()}/api/finance/getCashbookEntries`,
                {
                    user,
                }
            );

            console.log(response.data);

            if (response.status === 200) {
                console.log(response.data);
                setCashbookEntries(response.data.cashbookEntries);
            }
        } catch (error) {
            console.log(error);
        }
    };

    const formatDate = (param) => {
        const arr = param.split('-');
        return arr[2] + ' / ' + arr[1] + ' / ' + arr[0];
    };

    return (
        <div className="min-h-screen bg-zinc-900 p-4 md:p-6">
            <div className="bg-zinc-800 rounded-xl shadow-2xl overflow-hidden">
                {/* Header Section */}
                <div className="p-6 border-b border-zinc-700">
                    <h1 className="text-3xl md:text-4xl font-bold text-white tracking-tight">
                        Cashbook
                    </h1>
                </div>

                {/* Table Container */}
                <div className="p-6">
                    <div className="rounded-lg overflow-hidden shadow-xl">
                        <div className="overflow-x-auto">
                            <table className="w-full border-collapse bg-zinc-800">
                                <thead>
                                    <tr>
                                        <th className="bg-blue-500 px-6 py-4 text-left text-sm font-semibold text-white transition-colors duration-150 border-b border-blue-600">
                                            Date
                                        </th>
                                        <th className="bg-blue-500 px-6 py-4 text-left text-sm font-semibold text-white transition-colors duration-150 border-b border-blue-600">
                                            Title
                                        </th>
                                        <th className="bg-blue-500 px-6 py-4 text-left text-sm font-semibold text-white transition-colors duration-150 border-b border-blue-600">
                                            Debit
                                        </th>
                                        <th className="bg-blue-500 px-6 py-4 text-left text-sm font-semibold text-white transition-colors duration-150 border-b border-blue-600">
                                            Credit
                                        </th>
                                    </tr>
                                </thead>
                                <tbody className="divide-y divide-zinc-700">
                                    {cashbookEntries.map((entry) => (
                                        <tr
                                            key={entry._id}
                                            className="hover:bg-zinc-700 transition-colors duration-150"
                                        >
                                            <td className="px-6 py-4 text-sm text-zinc-300 whitespace-nowrap">
                                                {formatDate(entry.date)}
                                            </td>
                                            <td className="px-6 py-4 text-sm text-zinc-300">
                                                {entry.title}
                                            </td>
                                            <td className="px-6 py-4 text-sm text-zinc-300">
                                                {entry.heading === 'Expense' ? (
                                                    <span className="text-red-400">
                                                        {entry.amount}
                                                    </span>
                                                ) : (
                                                    <span className="text-zinc-500">
                                                        0
                                                    </span>
                                                )}
                                            </td>
                                            <td className="px-6 py-4 text-sm text-zinc-300">
                                                {entry.heading === 'Income' ? (
                                                    <span className="text-green-400">
                                                        {entry.amount}
                                                    </span>
                                                ) : (
                                                    <span className="text-zinc-500">
                                                        0
                                                    </span>
                                                )}
                                            </td>
                                        </tr>
                                    ))}
                                </tbody>
                            </table>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
