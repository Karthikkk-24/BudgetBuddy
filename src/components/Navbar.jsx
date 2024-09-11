import { useNavigate } from "react-router-dom";

export default function Navbar() {

    const navigate = useNavigate();

    const handleLogout = () => {
        localStorage.clear();
        sessionStorage.clear();
        navigate('/login');
    }

    return (
        <div className="h-20 w-full flex items-center px-6 justify-between">
            <div></div>
            <button className="text-white font-bold bg-red-500 rounded-md h-12 w-auto px-7" onClick={handleLogout}>
                Logout 
            </button>
        </div>
    );
}
