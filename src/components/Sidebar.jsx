import SidebarItem from './SidebarItem';

export default function Sidebar() {
    return (
        <div className="w-full h-full flex items-start justify-start gap-4 flex-col px-3 py-5 bg-text">
            <div className='w-full h-auto flex flex-col items-start justify-start'>
                <h1 className="text-3xl text-white font-bold">Expense Tracker</h1>
                <h4 className="text-xl text-white font-semibold">Welcome {localStorage.getItem('user')}</h4>
            </div>
            <div className="w-full h-full flex flex-col items-start justify-start">
                <SidebarItem title="Home" icon="🏠" route={'/dashboard'} />
                <SidebarItem title="Income" icon="💸" route={'/income'} />
                <SidebarItem title="Expenses" icon="💰" route={'/expenses'} />
                <SidebarItem
                    title="Categories"
                    icon="📋"
                    route={'/categories'}
                />
                <SidebarItem title="Cashbook" icon="📕" route={'/cashbook'} />
                <SidebarItem title="Todolist" icon="📝" route={'/todo-list'} />
                <SidebarItem title="Completed" icon="✅" route={'/completed'} />
            </div>
        </div>
    );
}
