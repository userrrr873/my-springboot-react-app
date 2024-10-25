import React from 'react';

const Home: React.FC = () => {
    return (
        <div className="container">
            <div className="header">
                <h1>Հայկ Հովհաննիսյան</h1>
                <ul className="menu">
                    <li><a href="#">AM</a></li>
                    <li><a href="#">RU</a></li>
                    <li><a href="#">EN</a></li>
                </ul>
            </div>
            <div className="main-content">
                <div className="content">
                    <h2>Նոր երգ</h2>
                    <p>ՈՒշ ա</p>
                    <a href="https://youtu.be/u_AGsTS6rl8?si=SY5nYWskvdPjOLiy" className="buy-button">Լսել</a>
                    <div className="song-image">
                        <img src="../images/songPhoto.png" alt="Song Image"/>
                    </div>
                </div>
                <div className="image">
                    <a href="#about">
                        <img src="../images/your-image.jpg" alt="Artist Image"/>
                        <div className="overlay">
                            <div className="text">Իմ մասին</div>
                        </div>
                    </a>
                </div>
            </div>

            <div className="order-section">
                <h2>Ծառայություններ</h2>
                <div className="order-buttons">
                    <a href="pages/order-song.jsp" className="order-button">Պատվիրել երգ</a>
                    <a href="pages/order-greeting.jsp" className="order-button">Պատվիրել շնորհավորանք</a>
                </div>
            </div>
        </div>
    );
};

export default Home;
