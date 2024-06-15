import { useEffect, useState } from "react";
import TodoItem from "./TodoItem";

export default function TodoList() {

    const [todoTitle, setTodoTitle] = useState('');

    const handleSubmit = async () => {
        try {
            // const response = await axios.post(`${Serverport()}/api/users/insertTodo`, {
            //     title
            // });
            console.log('handleSubmit');
        } catch (error) {
            console.log(error);
        }
    }

    const handleKeyDown = (e) => {
        if (e.key === 'Enter') {
            handleSubmit();
        }
    }

    const fetchTodos = async () => {
        try {
            console.log('fetchTodos');
        } catch (error) {
            console.log(error);
        }
    }

    useEffect(() => {
        fetchTodos();
    }, []);

    return (
        <div className="flex flex-col gap-12 w-full h-full items-start justify-start bg-background px-4 py-6">
            <h1 className="text-3xl font-semibold uppercase">Todolist</h1>
            <div className="w-full h-full items-start justify-start gap-10">
                <div className="w-full flex items-start justify-start gap-6">
                    <input
                        type="text"
                        name=""
                        className="w-[25rem] h-12 pl-3 pr-3 rounded-full border-2 border-primary text-slate-800"
                        id=""
                        value={todoTitle}
                        onKeyDown={handleKeyDown}
                        onChange={(e) => setTodoTitle(e.target.value)}
                        placeholder="Add new task"
                    />
                    <button onClick={handleSubmit} className="w-12 h-12 bg-primary hover:scale-110 transition-all text-white flex items-center justify-center font-semibold rounded-full">
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            width="24"
                            height="24"
                            viewBox="0 0 24 24"
                            fill="none"
                            stroke="currentColor"
                            strokeWidth="2"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            className="icon icon-tabler icons-tabler-outline icon-tabler-send-2"
                        >
                            <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                            <path d="M4.698 4.034l16.302 7.966l-16.302 7.966a.503 .503 0 0 1 -.546 -.124a.555 .555 0 0 1 -.12 -.568l2.468 -7.274l-2.468 -7.274a.555 .555 0 0 1 .12 -.568a.503 .503 0 0 1 .546 -.124z" />
                            <path d="M6.5 12h14.5" />
                        </svg>
                    </button>
                </div>
                <div className="w-full h-auto grid mt-10 grid-cols-3 gap-3">
                    <TodoItem title="Todo" status={false} id={1}  />
                    <TodoItem title="Todo" status={true} id={1}  />
                    <TodoItem />
                    <TodoItem />
                    <TodoItem />
                    <TodoItem />
                    <TodoItem />
                </div>
            </div>
        </div>
    );
}