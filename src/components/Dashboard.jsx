import axios from 'axios';
import { useEffect, useState } from 'react';
import Serverport from './Serverport';

export default function Dashboard() {
    const [pendingTask, setPendingTask] = useState([]);
    const [completedTask, setCompletedTask] = useState([]);

    useEffect(() => {
        getTodayTasks();
        getCompletedTasks();
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

    return (
        <div className="flex w-full h-full items-start justify-start bg-background p-5">
            <div className="w-full h-auto flex items-center justify-center gap-6">
                <div className="shadow-xl w-1/4 flex flex-col gap-3 items-center justify-center rounded-xl h-52">
                    <h2 className="font-bold text-primary text-3xl text-center">{pendingTask}</h2>
                    <p className="text-lg text-primary font-semibold">Pending Tasks</p>
                </div>
                <div className="shadow-xl w-1/4 flex flex-col gap-3 items-center justify-center rounded-xl h-52">
                    <h2 className="font-bold text-primary text-3xl text-center">{completedTask}</h2>
                    <p className="text-lg text-primary font-semibold">Completed Tasks</p>
                </div>
                <div className="shadow-xl w-1/4 flex flex-col gap-3 items-center justify-center rounded-xl h-52">
                    <h2 className="font-bold text-primary text-3xl text-center">Heading</h2>
                    <p className="text-lg text-primary font-semibold">Total Expense</p>
                </div>
                <div className="shadow-xl w-1/4 flex flex-col gap-3 items-center justify-center rounded-xl h-52">
                    <h2 className="font-bold text-primary text-3xl text-center">Heading</h2>
                    <p className="text-lg text-primary font-semibold">Balance Amount</p>
                </div>
            </div>
        </div>
    );
}
