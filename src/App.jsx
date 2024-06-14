import { Route, BrowserRouter as Router, Routes } from 'react-router-dom';
import './App.css';
import Cashbook from './components/Cashbook';
import Categories from './components/Categories';
import Completed from './components/Completed';
import Dashboard from './components/Dashboard';
import Expenses from './components/Expenses';
import Income from './components/Income';
import Login from './components/Login';
import Main from './components/Main';
import PublicRoute from './components/PublicRoute';
import Register from './components/Register';
import TodoList from './components/TodoList';

function App() {
    return (
        <Router>
            <Routes>
                <Route path="/" element={<Main />} />
                <Route path="/login" element={<Login />} />
                <Route path="/register" element={<Register />} />
                <Route path="/main" element={<Main />} />
                <Route path="/" element={<PublicRoute />}>
                    <Route path='/dashboard'  element={<Dashboard />} /> 
                    <Route path='/income' element={<Income />} />
                    <Route path='/expenses' element={<Expenses />} />
                    <Route path='/todo-list' element={<TodoList />} />
                    <Route path='/completed' element={<Completed />} />
                    <Route path='/categories' element={<Categories />} />
                    <Route path='/cashbook' element={<Cashbook />} />
                </Route>
            </Routes>
        </Router>
    );
}

export default App;
