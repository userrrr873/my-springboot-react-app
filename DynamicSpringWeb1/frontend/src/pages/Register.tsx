import React, { useState } from 'react';
import axios from 'axios';
import '../css/Register.css';
import { useNavigate } from 'react-router-dom';

interface PasswordRules {
    minLength: boolean;
    hasUpperCase: boolean;
    hasNumber: boolean;
    hasSpecialChar: boolean;
    isLatin: boolean;
}

const Register: React.FC = () => {
    const [step, setStep] = useState(1);
    const [username, setUsername] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [joinFanClub, setJoinFanClub] = useState(false);
    const [promoCode, setPromoCode] = useState('');
    const [errorMessage, setErrorMessage] = useState('');
    const [successMessage, setSuccessMessage] = useState('');
    const [loading, setLoading] = useState(false);
    const [passwordRequirements, setPasswordRequirements] = useState<PasswordRules>({
        minLength: false,
        hasUpperCase: false,
        hasNumber: false,
        hasSpecialChar: false,
        isLatin: false,
    });

    const navigate = useNavigate();

    const validatePassword = (password: string) => {
        setPasswordRequirements({
            minLength: password.length >= 8,
            hasUpperCase: /[A-Z]/.test(password),
            hasNumber: /[0-9]/.test(password),
            hasSpecialChar: /[!@#$%^&*(),.?":{}|<>]/.test(password),
            isLatin: /^[A-Za-z0-9!@#$%^&*(),.?":{}|<>]+$/.test(password),
        });
    };

    const handleNext = () => {
        if (step < 5) setStep(step + 1);
    };

    const handleSkip = () => {
        setStep(step + 1);
    };

    const allFieldsFilled = () => {
        return username && email && password;
    };

    const handleRegister = async (e: React.FormEvent) => {
        e.preventDefault();
        if (!allFieldsFilled()) {
            setErrorMessage('Խնդրում ենք լրացնել բոլոր դաշտերը');
            return;
        }

        setLoading(true);

        try {
            const response = await axios.post(
                'http://localhost:8080/api/register',
                { username, email, password, joinFanClub, promoCode },
                { headers: { 'Content-Type': 'application/json' }, withCredentials: true }
            );

            if (response.status === 201) {
                setSuccessMessage('Գրանցումը հաջողվել է');
                setErrorMessage('');
                setUsername('');
                setEmail('');
                setPassword('');
                setJoinFanClub(false);
                setPromoCode('');
            } else {
                setErrorMessage('Ինչ-որ սխալ տեղի ունեցավ');
            }
        } catch {
            setErrorMessage('Գրանցման ժամանակ սխալ տեղի ունեցավ');
        } finally {
            setLoading(false);
        }
    };

    return (
        <div className="register-container">
            <h2>Գրանցվել</h2>
            {errorMessage && <p className="error-message">{errorMessage}</p>}
            {successMessage ? (
                <div>
                    <p className="success-message">{successMessage}</p>
                    <button onClick={() => navigate('/login')} className="login-button">Մուտք գործել</button>
                </div>
            ) : (
                <form onSubmit={handleRegister} className="register-form">
                    {step === 1 && (
                        <div className="form-field">
                            <label>Անուն:</label>
                            <input type="text" value={username} onChange={(e) => setUsername(e.target.value)} required />
                        </div>
                    )}
                    {step === 2 && (
                        <div className="form-field">
                            <label>Էլ. փոստ:</label>
                            <input type="email" value={email} onChange={(e) => setEmail(e.target.value)} required />
                        </div>
                    )}
                    {step === 3 && (
                        <div className="form-field">
                            <label>Գաղտնաբառ:</label>
                            <input
                                type="password"
                                value={password}
                                onChange={(e) => {
                                    setPassword(e.target.value);
                                    validatePassword(e.target.value);
                                }}
                                required
                            />
                            <div className="password-requirements">
                                <p className={`password-item ${passwordRequirements.minLength ? 'valid' : 'invalid'}`}>Նվազագույնը 8 նիշ</p>
                                <p className={`password-item ${passwordRequirements.hasUpperCase ? 'valid' : 'invalid'}`}>Մեծատառ (A-Z)</p>
                                <p className={`password-item ${passwordRequirements.hasNumber ? 'valid' : 'invalid'}`}>Առնվազն մեկ թիվ</p>
                                <p className={`password-item ${passwordRequirements.hasSpecialChar ? 'valid' : 'invalid'}`}>Հատուկ նշան (!@#$%^&*)</p>
                                <p className={`password-item ${passwordRequirements.isLatin ? 'valid' : 'invalid'}`}>Լատինատառեր</p>
                            </div>
                        </div>
                    )}
                    {step === 4 && (
                        <div className="form-field checkbox-container">
                            <label className="checkbox-label">
                                <input
                                    type="checkbox"
                                    checked={joinFanClub}
                                    onChange={(e) => setJoinFanClub(e.target.checked)}
                                />
                                Միանալ Ֆան Ակումբին
                            </label>
                        </div>
                    )}
                    {step === 5 && (
                        <div className="form-field">
                            <label>Promocode:</label>
                            <input type="text" value={promoCode} onChange={(e) => setPromoCode(e.target.value)} />
                        </div>
                    )}
                    <div className="button-container">
                        <button
                            type={step < 5 ? "button" : "submit"}
                            onClick={step < 5 ? handleNext : undefined}
                            disabled={loading}
                            className="submit-button"
                        >
                            {loading ? 'Գրանցվում է...' : step < 5 ? 'Առաջ' : 'Գրանցվել'}
                        </button>
                        {step > 3 && step < 5 && (
                            <button type="button" onClick={handleSkip} className="skip-button">
                                Բաց թողնել
                            </button>
                        )}
                    </div>
                </form>
            )}
        </div>
    );
};

export default Register;