import Sidebar from './Sidebar';

export default function Dashboard() {
    return (
        <div className="flex w-screen h-screen items-start justify-start bg-background">
            <div className="w-96 h-full flex flex-col items-start justify-start">
                <Sidebar />
            </div>
            <di className="w-full h-full"></di>
        </div>
    );
}
