import React from 'react';

const Home: React.FC = () => {
    return (
        <div className="container mx-auto p-6 bg-white rounded-lg shadow-lg">
            <div className="header flex justify-between items-center py-5 bg-gray-800 text-white border-b-2 border-white border-opacity-20">
                <h1 className="text-3xl font-bold uppercase tracking-wide">Հայկ Հովհաննիսյան</h1>
                <ul className="menu flex gap-5">
                    <li><a href="#" className="hover:text-yellow-400 transition duration-300">AM</a></li>
                    <li><a href="#" className="hover:text-yellow-400 transition duration-300">RU</a></li>
                    <li><a href="#" className="hover:text-yellow-400 transition duration-300">EN</a></li>
                </ul>
            </div>

            <div className="main-content flex flex-col md:flex-row justify-between items-center py-10">
                <div className="content max-w-lg text-center">
                    <h2 className="text-5xl font-bold uppercase tracking-wide mb-4 bg-gradient-to-r from-yellow-500 to-red-500 text-transparent bg-clip-text">Նոր երգ</h2>
                    <p className="text-xl text-gray-600 mb-4">ՈՒշ ա</p>
                    <a href="https://youtu.be/u_AGsTS6rl8?si=SY5nYWskvdPjOLiy" className="buy-button inline-block py-4 px-6 bg-gray-800 text-white rounded-full shadow-lg transition-all duration-300 mb-4 hover:bg-red-600 scale-110">Լսել</a>
                    <div className="song-image mb-6">
                        <img src="/images/songPhoto.png" alt="Song Image" className="w-3/4 rounded-lg shadow-lg transition-transform duration-300 hover:scale-105" />
                    </div>
                </div>

                <div className="image relative w-96">
                    <a href="#about">
                        <img src="/images/your-image.jpg" alt="Artist Image" className="w-full rounded-lg shadow-lg transition-transform duration-300 hover:scale-110" />
                        <div className="overlay absolute inset-0 bg-black bg-opacity-60 rounded-lg flex justify-center items-center opacity-0 transition-opacity duration-300 hover:opacity-100">
                            <div className="text text-white text-2xl font-bold uppercase">Իմ մասին</div>
                        </div>
                    </a>
                </div>
            </div>

            <div className="order-section text-center mt-12">
                <h2 className="text-2xl font-bold mb-5">Ծառայություններ</h2>
                <div className="order-buttons flex justify-center gap-7">
                    <a href="#" className="order-button inline-block py-4 px-6 bg-gray-800 text-white rounded-full shadow-lg transition-all duration-300 hover:bg-red-600 scale-110">Պատվիրել երգ</a>
                    <a href="#" className="order-button inline-block py-4 px-6 bg-gray-800 text-white rounded-full shadow-lg transition-all duration-300 hover:bg-red-600 scale-110">Պատվիրել շնորհավորանք</a>
                </div>
            </div>
        </div>
    );
};

export default Home;
