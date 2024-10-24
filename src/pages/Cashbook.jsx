import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
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
        <div className="min-h-screen bg-zinc-900 p-6">
            <Card className="bg-zinc-800 border-none shadow-2xl">
                <CardHeader className="pb-4">
                    <CardTitle className="text-4xl font-bold text-white tracking-tight">
                        Cashbook
                    </CardTitle>
                </CardHeader>
                <CardContent>
                    <div className="rounded-lg overflow-hidden shadow-xl">
                        <div className="overflow-x-auto">
                            <table className="w-full border-collapse">
                                <thead>
                                    <tr className="bg-blue-500">
                                        <th className="px-6 py-4 text-left text-sm font-semibold text-white">
                                            Date
                                        </th>
                                        <th className="px-6 py-4 text-left text-sm font-semibold text-white">
                                            Title
                                        </th>
                                        <th className="px-6 py-4 text-left text-sm font-semibold text-white">
                                            Debit
                                        </th>
                                        <th className="px-6 py-4 text-left text-sm font-semibold text-white">
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
                                            <td className="px-6 py-4 text-sm text-zinc-300">
                                                {formatDate(entry.date)}
                                            </td>
                                            <td className="px-6 py-4 text-sm text-zinc-300">
                                                {entry.title}
                                            </td>
                                            <td className="px-6 py-4 text-sm text-zinc-300">
                                                {entry.heading === 'Expense'
                                                    ? entry.amount
                                                    : 0}
                                            </td>
                                            <td className="px-6 py-4 text-sm text-zinc-300">
                                                {entry.heading === 'Income'
                                                    ? entry.amount
                                                    : 0}
                                            </td>
                                        </tr>
                                    ))}
                                </tbody>
                            </table>
                        </div>
                    </div>
                </CardContent>
            </Card>
        </div>
    );
}
