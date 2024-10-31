import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import axios from 'axios';
import {
    ArrowDownCircle,
    ArrowUpCircle,
    BarChart2,
    DollarSign,
} from 'lucide-react';
import { useEffect, useState } from 'react';
import BaseURL from '../components/BaseURL';

export default function Cashbook() {
    const [cashbookEntries, setCashbookEntries] = useState([]);
    const [summary, setSummary] = useState({
        totalIncome: 0,
        totalExpense: 0,
        balance: 0,
    });

    useEffect(() => {
        fetchCashbookEntries();
    }, []);

    const user = sessionStorage.getItem('user_id');

    const fetchCashbookEntries = async () => {
        try {
            const response = await axios.post(
                `${BaseURL()}/api/finance/getCashbookEntries`,
                { user }
            );

            if (response.status === 200) {
                const entries = response.data.cashbookEntries;
                setCashbookEntries(entries);
                calculateSummary(entries);
            }
        } catch (error) {
            console.log(error);
        }
    };

    const calculateSummary = (entries) => {
        const summary = entries.reduce(
            (acc, entry) => {
                if (entry.heading === 'Income') {
                    acc.totalIncome += Number(entry.amount);
                } else {
                    acc.totalExpense += Number(entry.amount);
                }
                return acc;
            },
            { totalIncome: 0, totalExpense: 0 }
        );

        summary.balance = summary.totalIncome - summary.totalExpense;
        setSummary(summary);
    };

    const formatDate = (param) => {
        const arr = param.split('-');
        return arr[2] + ' / ' + arr[1] + ' / ' + arr[0];
    };

    const formatCurrency = (amount) => {
        return new Intl.NumberFormat('en-US', {
            style: 'currency',
            currency: 'USD',
        }).format(amount);
    };

    return (
        <div className="min-h-screen bg-zinc-900 p-4 md:p-6">
            <Card className="bg-zinc-800 border-zinc-700">
                <CardHeader className="border-b border-zinc-700">
                    <div className="flex justify-between items-center">
                        <CardTitle className="text-3xl md:text-4xl font-bold text-white tracking-tight">
                            Cashbook
                        </CardTitle>
                        <div className="text-zinc-400">
                            <BarChart2 className="w-6 h-6" />
                        </div>
                    </div>
                </CardHeader>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-4 p-6">
                    <Card className="bg-zinc-700 border-zinc-600">
                        <CardContent className="p-4">
                            <div className="flex items-center justify-between">
                                <div className="space-y-1">
                                    <p className="text-sm text-zinc-400">
                                        Total Income
                                    </p>
                                    <p className="text-2xl font-bold text-green-400">
                                        {formatCurrency(summary.totalIncome)}
                                    </p>
                                </div>
                                <ArrowUpCircle className="w-8 h-8 text-green-400" />
                            </div>
                        </CardContent>
                    </Card>

                    <Card className="bg-zinc-700 border-zinc-600">
                        <CardContent className="p-4">
                            <div className="flex items-center justify-between">
                                <div className="space-y-1">
                                    <p className="text-sm text-zinc-400">
                                        Total Expense
                                    </p>
                                    <p className="text-2xl font-bold text-red-400">
                                        {formatCurrency(summary.totalExpense)}
                                    </p>
                                </div>
                                <ArrowDownCircle className="w-8 h-8 text-red-400" />
                            </div>
                        </CardContent>
                    </Card>

                    <Card className="bg-zinc-700 border-zinc-600">
                        <CardContent className="p-4">
                            <div className="flex items-center justify-between">
                                <div className="space-y-1">
                                    <p className="text-sm text-zinc-400">
                                        Current Balance
                                    </p>
                                    <p
                                        className={`text-2xl font-bold ${
                                            summary.balance >= 0
                                                ? 'text-green-400'
                                                : 'text-red-400'
                                        }`}
                                    >
                                        {formatCurrency(summary.balance)}
                                    </p>
                                </div>
                                <DollarSign
                                    className={`w-8 h-8 ${
                                        summary.balance >= 0
                                            ? 'text-green-400'
                                            : 'text-red-400'
                                    }`}
                                />
                            </div>
                        </CardContent>
                    </Card>
                </div>

                <CardContent className="p-6">
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
                                                        {formatCurrency(
                                                            entry.amount
                                                        )}
                                                    </span>
                                                ) : (
                                                    <span className="text-zinc-500">
                                                        {formatCurrency(0)}
                                                    </span>
                                                )}
                                            </td>
                                            <td className="px-6 py-4 text-sm text-zinc-300">
                                                {entry.heading === 'Income' ? (
                                                    <span className="text-green-400">
                                                        {formatCurrency(
                                                            entry.amount
                                                        )}
                                                    </span>
                                                ) : (
                                                    <span className="text-zinc-500">
                                                        {formatCurrency(0)}
                                                    </span>
                                                )}
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
