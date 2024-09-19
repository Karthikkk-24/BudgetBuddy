import { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

export default function Main() {

    useEffect(() => {
        checkLogin();
    }, []);

    const navigate = useNavigate();

    function checkLogin() {
        if (!localStorage.getItem('token')) {
            navigate('/login');
        } else {
            navigate('/dashboard');
        }
    }

  return (
    <></>
  )
}
