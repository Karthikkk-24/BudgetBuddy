import { useEffect } from 'react';
import { Outlet, useLocation } from 'react-router-dom';
import Navbar from './Navbar';
import Sidebar from './Sidebar';

const PublicRoute = () => {
    const location = useLocation();

    useEffect(() => {
        checkLogin();
    }, []);

    function checkLogin() {
        if (localStorage.getItem('token')) {
            // window.location.href = '/dashboard';
        } else {
            localStorage.clear();
            sessionStorage.clear();
            window.location.href = '/login';
        }
    }


    return (
        <div className="w-screen h-screen flex flex-col items-center justify-center">
            <div className="w-full h-full flex items-start justify-start">
                <div className="w-96 h-full flex flex-col items-start justify-start">
                    <Sidebar currentPath={location.pathname} />
                </div>
                <div className="w-full h-full flex flex-col items-start justify-start">
                    <Navbar />
                    <Outlet />
                </div>
            </div>
        </div>
    );
};

export default PublicRoute;
