import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from './pages/Home'; // մեր նոր ստեղծված Home էջը
import OrderSong from './pages/OrderSong'; // Պատվիրել երգ էջ
import OrderGreeting from './pages/OrderGreeting'; // Պատվիրել շնորհավորանք էջ
import FanClub from "./pages/FanClub"; // Ֆան ակումբ էջ
import Login from './pages/Login'; // Մուտք գործել/Գրանցվել էջ
import AdminPanel from './pages/AdminPanel'; // Նոր Admin Panel էջը
import Register from './pages/Register'; // Ավելացնել Register էջը
import './index.css';

const App: React.FC = () => {
    return (
        <Router>
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/order-song" element={<OrderSong />} />
                <Route path="/order-greeting" element={<OrderGreeting />} />
                <Route path="/fan-club" element={<FanClub />} />
                <Route path="/login" element={<Login />} />
                <Route path="/admin" element={<AdminPanel />} /> {/* Ավելացված նոր Admin Panel էջ */}
                <Route path="/register" element={<Register />} /> {/* Ավելացրու Register էջը */}
                {/* Այստեղ կարող ենք ավելացնել մնացած էջերը հետագայում */}
            </Routes>
        </Router>
    );
};

export default App;
