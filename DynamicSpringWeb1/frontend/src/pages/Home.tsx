import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import '../index.css';


// LanguageSelector կոմպոնենտ
const LanguageSelector: React.FC = () => {
    const [isOpen, setIsOpen] = useState(false);
    const [language, setLanguage] = useState('AM'); // Լռացյալ լեզու

    const toggleMenu = () => {
        setIsOpen(!isOpen);
    };

    const handleLanguageChange = (lang: string) => {
        setLanguage(lang);
        setIsOpen(false); // Փակել մենյուն ընտրությունից հետո
    };

    return (
        <div className="language-selector">
            <button onClick={toggleMenu} className="language-button">
                Լեզու: {language}
            </button>
            {isOpen && (
                <ul className="language-menu">
                    <li onClick={() => handleLanguageChange('AM')}>Հայերեն</li>
                    <li onClick={() => handleLanguageChange('EN')}>English</li>
                    <li onClick={() => handleLanguageChange('RU')}>Русский</li>
                </ul>
            )}
        </div>
    );
};

// ServicesDropdown կոմպոնենտ
const ServicesDropdown: React.FC = () => {
    const [isOpen, setIsOpen] = useState(false);

    const toggleDropdown = () => {
        setIsOpen(!isOpen);
    };

    return (
        <div className="services-dropdown">
            <button onClick={toggleDropdown} className="buttons">
                Ծառայություններ
            </button>
            {isOpen && (
                <ul className="dropdown-menu">
                    <li><Link to="/order-song">Պատվիրել երգ</Link></li>
                    <li><Link to="/order-greeting">Պատվիրել շնորհավորանք</Link></li>
                </ul>
            )}
        </div>
    );
};

// Home կոմպոնենտ
const Home: React.FC = () => {
    useEffect(() => {
        const container = document.querySelector('.container') as HTMLElement;
        if (container) {
            container.style.transform = 'translateY(0)';
            container.style.opacity = '1';
        }

        const header = document.querySelector('.header h1') as HTMLElement;
        if (header) {
            header.style.transform = 'translateX(0)';
        }

        // Scroll animations
        const handleScroll = () => {
            const content = document.querySelector('.content') as HTMLElement;
            const image = document.querySelector('.image') as HTMLElement;
            const scrollPosition = window.scrollY;

            if (content) content.style.transform = `translateY(${scrollPosition * 0.1}px)`;
            if (image) image.style.transform = `translateY(${scrollPosition * 0.1}px)`;
        };

        window.addEventListener('scroll', handleScroll);

        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, []);

    return (
        <div className="container">
            <div className="header">
                <h1>Հայկ Հովհաննիսյան</h1>
                <div className="header-buttons">
                    <Link to="/" className="buttons">Գլխավոր էջ</Link>
                    <ServicesDropdown />
                    <Link to="/fan-club" className="buttons">Ֆան ակումբ</Link>
                    <Link to="/login" className="buttons">Մուտք գործել/Գրանցվել</Link>
                </div>
                <LanguageSelector />
            </div>
            <div className="main-content">
                <div className="content">
                    <h2>Նոր երգ</h2>
                    <p>ՈՒշ ա</p>
                    <a href="https://youtu.be/u_AGsTS6rl8?si=SY5nYWskvdPjOLiy" className="buy-button">Լսել</a>
                    <div className="song-image">
                        <img src="../images/songPhoto.png" alt="Song" />
                    </div>
                </div>
                <div className="image">
                    <a href="#about">
                        <img src="../images/your-image.jpg" alt="Artist" />
                        <div className="overlay">
                            <div className="text">Իմ մասին</div>
                        </div>
                    </a>
                </div>
            </div>

            <div className="join-club">
                <button className="join-button">Միանալ ֆան ակումբին</button>
            </div>

            <div className="order-section">
                <h2>Ծառայություններ</h2>
                <div className="order-buttons">
                    <Link to="/order-song" className="order-button">Պատվիրել երգ</Link>
                    <Link to="/order-greeting" className="order-button">Պատվիրել շնորհավորանք</Link>
                </div>
            </div>

            <footer className="footer">
                <p>© 2024 Հայկ Հովհաննիսյան. Բոլոր իրավունքները պաշտպանված են.</p>
                <div className="footer-links">
                    <a href="#privacy" className="footer-link">Գաղտնիության քաղաքականություն</a>
                    <a href="#terms" className="footer-link">Օգտագործման պայմաններ</a>
                </div>
            </footer>
        </div>
    );
};

export default Home;
