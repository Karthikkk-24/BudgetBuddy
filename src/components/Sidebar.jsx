import SidebarItem from './SidebarItem';

export default function Sidebar() {
    return (
        <div className="w-full h-full flex items-start justify-start flex-col px-3 py-5 bg-text">
            <SidebarItem title="Home" icon="🏠" route={'/dashboard'} />
            <SidebarItem title="Income" icon="💸" route={'/income'} />
            <SidebarItem title="Expenses" icon="💰" route={'/expenses'} />
            <SidebarItem title="Categories" icon="📋" route={'/categories'} />
            <SidebarItem title="Cashbook" icon="📕" route={'/cashbook'} />
            <SidebarItem title="Todolist" icon="📝" route={'/todo-list'} />
            <SidebarItem title="Completed" icon="✅" route={'/completed'} />
        </div>
    );
}
