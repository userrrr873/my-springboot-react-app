import React, {useState} from 'react';
import axios from 'axios';
import {Link, useNavigate} from 'react-router-dom';

const Login: React.FC = () => {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [errorMessage, setErrorMessage] = useState('');
    const navigate = useNavigate();

    const handleLogin = async (e: React.FormEvent) => {
        e.preventDefault();

        try {
            const response = await axios.post('http://localhost:8080/api/auth/login', {
                email: username,
                password: password
            });

            if (response.status === 200) {
                const role = response.data.role;

                if (role === 'Admin') {
                    navigate('/admin'); // Admin Panel
                } else if (role === 'User') {
                    navigate('/dashboard'); // User Dashboard
                } else {
                    navigate('/'); // Բնական էջ՝ կախված դերից
                }
            }
        } catch (error) {
            setErrorMessage('Invalid credentials');
        }
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

                <div className={"Sub"}>
                <button type="submit" className="submit-button">Մուտք գործել</button>
                </div>
                <div className={"PasswordReset"}>
                    <Link to={"/login"} className={"password-reset"}>Մոռացե՞լ եք գաղտնաբառը</Link>
                </div>
                <div className={"login-form-line"}></div>
                <div className={"reg"}>
                    <Link to={"/register"} className={"register-button"}>Ստեղծել նոր հաշիվ</Link>
                </div>
            </form>
        </div>
    );
};

export default Login;