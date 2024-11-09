import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import '../index.css';  // Assuming you have styles for form elements

const Login: React.FC = () => {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [errorMessage, setErrorMessage] = useState('');
    const navigate = useNavigate();

    const handleLogin = (e: React.FormEvent) => {
        e.preventDefault();

        // Example credentials check, replace with your own logic
        if (username === 'admin' && password === 'password') {
            // Redirect to the admin panel
            navigate('/admin');
        } else {
            setErrorMessage('Invalid credentials');
        }
    };

    const goToRegister = () => {
        navigate('/register');  // Navigate to register page
    };

    return (
        <div className="login-container">
            <h2>Մուտք գործել</h2>
            <form onSubmit={handleLogin} className="login-form">
                <label htmlFor="username">Անուն</label>
                <input
                    type="text"
                    id="username"
                    value={username}
                    onChange={(e) => setUsername(e.target.value)}
                    required
                />

                <label htmlFor="password">Գաղտնաբառ</label>
                <input
                    type="password"
                    id="password"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    required
                />

                {errorMessage && <p className="error">{errorMessage}</p>}

                <button type="submit" className="submit-button">Մուտք գործել</button>
            </form>

            <div className="register-link">
                <p>Արդեն չունեք հաշիվ? <button onClick={goToRegister}>Գրանցվել</button></p>
            </div>
        </div>
    );
};

export default Login;
