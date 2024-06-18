import axios from 'axios';
import { useEffect, useState } from 'react';
import DashboardSmallBox from './DashboardSmallBox';
import Serverport from './Serverport';

export default function Dashboard() {
    const [pendingTask, setPendingTask] = useState([]);
    const [completedTask, setCompletedTask] = useState([]);
    const [totalExpenses, setTotalExpenses] = useState([]);
    const [totalIncome, setTotalIncome] = useState([]);

    useEffect(() => {
        getTodayTasks();
        getCompletedTasks();
        getTotalExpenses();
        getTotalIncome();
    }, []);

    const user = localStorage.getItem('user_id');

    const getTodayTasks = async () => {
        try {
            const response = await axios.post(
                `${Serverport()}/api/users/getTodayTasks`,
                {
                    user,
                }
            );

            console.log(response.data);

            if (response.status === 200) {
                console.log(response.data);
                setPendingTask(response.data.count);
            }
        } catch (error) {
            console.log(error);
        }
    };

    const getCompletedTasks = async () => {
        try {
            const response = await axios.post(
                `${Serverport()}/api/users/getTodayCompletedTasks`,
                {
                    user,
                }
            );

            console.log(response.data);

            if (response.status === 200) {
                console.log(response.data);
                setCompletedTask(response.data.count);
            }
        } catch (error) {
            console.log(error);
        }
    };

    const getTotalExpenses = async () => {
        try {
            const response = await axios.post(
                `${Serverport()}/api/finance/getTotalExpenses`,
                {
                    user,
                }
            );

            console.log(response.data);

            if (response.status === 200) {
                if (response.data.totalExpenses.length > 0) {
                    // console.log(
                    //     'totalExpenses',
                    //     response.data.totalExpenses[0].total
                    // );
                    setTotalExpenses(response.data.totalExpenses[0].total);
                } else {
                    setTotalExpenses(0);
                }
            }
        } catch (error) {
            console.log(error);
        }
    };

    const getTotalIncome = async () => {
        try {
            const response = await axios.post(
                `${Serverport()}/api/finance/getTotalIncome`,
                {
                    user,
                }
            );

            console.log(response.data);

            if (response.status === 200) {
                // console.log(response.data);
                // console.log('totalIncome', response.data.totalIncome[0].total);
                if (response.data.totalIncome.length > 0) {
                    setTotalIncome(response.data.totalIncome[0].total);
                } else {
                    setTotalIncome(0);
                }
            }
        } catch (error) {
            console.log(error);
        }
    };

    return (
        <div className="flex w-full h-full items-start justify-start bg-background p-5">
            <div className="w-full h-auto flex items-center justify-center gap-6">
                <DashboardSmallBox data={pendingTask} name="Pending Tasks" />
                <DashboardSmallBox
                    data={completedTask}
                    name="Completed Tasks"
                />
                <DashboardSmallBox data={totalExpenses} name="Total Expenses" />
                <DashboardSmallBox data={totalIncome} name="Total Income" />
            </div>
        </div>
    );
}
