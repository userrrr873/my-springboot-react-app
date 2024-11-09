import React, { useState } from 'react';
import PhoneInput from 'react-phone-input-2';
import 'react-phone-input-2/lib/style.css';
import '../index.css';

const OrderSong: React.FC = () => {
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [phone, setPhone] = useState('');
    const [songDetails, setSongDetails] = useState('');
    const [isSubmitted, setIsSubmitted] = useState(false);
    const [phoneError, setPhoneError] = useState('');

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();

        // Ստուգում ենք՝ հեռախոսահամարը լրացվա՞ծ է
        if (phone === '') {
            setPhoneError('Հեռախոսահամարը պարտադիր է');
            return;
        } else {
            setPhoneError('');
        }

        try {
            const response = await fetch("http://localhost:8080/api/orders", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify({ email, name, phone, songDetails }),
            });

            if (response.ok) {
                console.log("Պատվերը հաստատվեց");
                setIsSubmitted(true);
            } else {
                console.error("Պատվերը չհաջողվեց");
            }
        } catch (error) {
            console.error("Սխալ:", error);
        }
    };

    return (
        <div className="order-song-container">
            <h2 className="order-song-title">Պատվիրել երգ</h2>
            {isSubmitted ? (
                <p className="order-song-message">Շնորհակալություն պատվերի համար, {name}! Մենք շուտով կկապնվենք Ձեզ հետ:</p>
            ) : (
                <form onSubmit={handleSubmit} className="order-song-form">
                    <label className="form-label">
                        Էլ. հասցե:
                        <input
                            type="email"
                            className="form-input"
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                            required
                        />
                    </label>
                    <label className="form-label">
                        Անուն Ազգանուն:
                        <input
                            type="text"
                            className="form-input"
                            value={name}
                            onChange={(e) => setName(e.target.value)}
                            required
                        />
                    </label>
                    <label className="form-label">
                        Հեռախոսահամար:
                        <PhoneInput
                            country="us"
                            value={phone}
                            onChange={(phone) => setPhone(phone)}
                            inputStyle={{ width: "100%" }}
                            containerClass="phone-input-container"
                        />
                        {phoneError && <span className="error">{phoneError}</span>}
                    </label>
                    <label className="form-label">
                        Երգի մանրամասներ:
                        <textarea
                            className="form-textarea"
                            value={songDetails}
                            onChange={(e) => setSongDetails(e.target.value)}
                            required
                        />
                    </label>
                    <button type="submit" className="submit-button">Ուղարկել</button>
                </form>
            )}
        </div>
    );
};

export default OrderSong;
