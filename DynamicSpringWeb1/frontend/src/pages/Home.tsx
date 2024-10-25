import React from 'react';
import '../css/Home.css';

const Home: React.FC = () => {
    return (
        <div className="min-h-screen bg-gray-100">
            {/* Hero Section */}
            <section className="bg-blue-500 text-white text-center py-16">
                <h1 className="text-5xl font-bold mb-4">Welcome to the Fan Club!</h1>
                <p className="text-xl mb-8">
                    Join the exclusive fan club of <strong>Hayk Hovhannisyan</strong> to order custom songs, receive special messages, and more.
                </p>
                <button className="bg-white text-blue-500 px-6 py-2 rounded-full font-bold hover:bg-gray-200 transition">
                    Join Now
                </button>
            </section>

            {/* About Section */}
            <section className="p-10">
                <h2 className="text-3xl font-bold text-center mb-6">What We Offer</h2>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                    <div className="bg-white shadow-lg rounded-lg p-6">
                        <img src="/images/song-order.jpg" alt="Order Song" className="w-full rounded-lg mb-4" />
                        <h3 className="text-2xl font-bold">Order a Custom Song</h3>
                        <p>Get a personalized song crafted just for you by the artist.</p>
                    </div>
                    <div className="bg-white shadow-lg rounded-lg p-6">
                        <img src="/images/special-message.jpg" alt="Special Message" className="w-full rounded-lg mb-4" />
                        <h3 className="text-2xl font-bold">Receive a Special Message</h3>
                        <p>Order a heartfelt message for special occasions.</p>
                    </div>
                    <div className="bg-white shadow-lg rounded-lg p-6">
                        <img src="/images/fan-club.jpg" alt="Fan Club" className="w-full rounded-lg mb-4" />
                        <h3 className="text-2xl font-bold">Join the Fan Club</h3>
                        <p>Exclusive content and experiences await for members!</p>
                    </div>
                </div>
            </section>
        </div>

    );
};

export default Home;
