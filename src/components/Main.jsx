import { useEffect } from 'react';

export default function Main() {

    useEffect(() => {
        checkLogin();
    }, [])

    function checkLogin() {
        if (!localStorage.getItem('user')) {
            window.location.href = '/login';
        } else {
            window.location.href = '/dashboard';
        }
    }

  return (
    <></>
  )
}
