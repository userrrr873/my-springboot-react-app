import React, {useEffect, useState} from "react";
import {Link} from "react-router-dom";

// LanguageSelector կոմպոնենտ
const LanguageSelector: React.FC = () => {
    const [isOpen, setIsOpen] = useState(false);
    const [language, setLanguage] = useState("AM");

    const toggleMenu = () => {
        setIsOpen(!isOpen);
    };

    const handleLanguageChange = (lang: string) => {
        setLanguage(lang);
        setIsOpen(false);
    };

    return (
        <div className="language-selector">
            <button onClick={toggleMenu} className="language-button">
                Լեզու: {language}
            </button>
            {isOpen && (
                <ul className="language-menu">
                    <li onClick={() => handleLanguageChange("AM")}>Հայերեն</li>
                    <li onClick={() => handleLanguageChange("EN")}>English</li>
                    <li onClick={() => handleLanguageChange("RU")}>Русский</li>
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
                    <li>
                        <Link to="/order-song">Պատվիրել երգ</Link>
                    </li>
                    <li>
                        <Link to="/order-greeting">Պատվիրել շնորհավորանք</Link>
                    </li>
                </ul>
            )}
        </div>
    );
};

const ServicesMenu: React.FC = () => {
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    const toggleMenu = () => {
        setIsMenuOpen(!isMenuOpen);
    };

    return (
        <div className="services-menu">
            <button onClick={toggleMenu} className="services-menu-button">
                Ծառայություններ
            </button>
            {isMenuOpen && (
                <ul className="services-menu-list">
                    <li>
                        <a href="/order-song">Պատվիրել երգ</a>
                    </li>
                    <li>
                        <a href="/order-greeting">Պատվիրել շնորհավորանք</a>
                    </li>
                </ul>
            )}
        </div>
    );
};

// ImageWithLoader կոմպոնենտ
const ImageWithLoader: React.FC<{ src: string; alt: string }> = ({src, alt}) => {
    const [loaded, setLoaded] = useState(false);

    return (
        <div className="image-container">
            {!loaded && <div className="loader">Բեռնվում է...</div>}
            <img
                src={src}
                alt={alt}
                onLoad={() => setLoaded(true)}
                style={{display: loaded ? "block" : "none"}}
            />
        </div>
    );
};

// Home կոմպոնենտ
const Home: React.FC = () => {
    const [isMobile, setIsMobile] = useState(window.innerWidth <= 768);
    const [menuOpen, setMenuOpen] = useState(false);

    useEffect(() => {
        const updateMobileView = () => setIsMobile(window.innerWidth <= 768);
        window.addEventListener("resize", updateMobileView);
        return () => window.removeEventListener("resize", updateMobileView);
    }, []);

    const toggleMenu = () => {
        setMenuOpen(!menuOpen);
    };

    return (
        <div className="container">
            {isMobile ? (
                <>
                    {/* Mobile Header */}
                    <div className="header">
                        <h3>Հայկ Հովհաննիսյան</h3>
                        <button className="menu-button" onClick={toggleMenu}>
                            ☰
                        </button>
                        {menuOpen && (
                            <div className="mobile-menu">
                                <Link
                                    to="/"
                                    className="menu-item"
                                    onClick={() => setMenuOpen(false)}
                                >
                                    Գլխավոր էջ
                                </Link>
                                <Link
                                    to="/fan-club"
                                    className="menu-item"
                                    onClick={() => setMenuOpen(false)}
                                >
                                    Ֆան ակումբ
                                </Link>
                                <Link
                                    to="/login"
                                    className="menu-item"
                                    onClick={() => setMenuOpen(false)}
                                >
                                    Մուտք գործել/Գրանցվել
                                </Link>

                                {/* Services Menu */}
                                <div>
                                    <ServicesMenu/>
                                </div>

                                {/* Language Selector */}
                                <div className="mobile-services-dropdown">
                                    <LanguageSelector/>
                                </div>
                            </div>
                        )}
                    </div>
                    <div className="imagem">
                        <a href="#about">
                            <img
                                src="../images/your-image.jpg"
                                alt="Artist"
                            />
                            <div className="overlay">
                                <div className="text">Իմ մասին</div>
                            </div>
                        </a>
                    </div>

                    {/* Mobile Content */}
                    <div className="content">
                        <h3>Նոր երգ</h3>
                        <p>Ush a</p>
                        <ImageWithLoader
                            src="../images/songPhoto.png"
                            alt="Song Photo"
                        />
                        <a
                            href="https://youtu.be/u_AGsTS6rl8?si=SY5nYWskvdPjOLiy"
                            className="listen-button"
                        >
                            Լսել
                        </a>
                    </div>


                    {/* Mobile Footer */}
                    <div className="footer">
                        <p>&copy; 2024 Հայկ Հովհաննիսյան</p>
                        <div className="footer-links">
                            <Link to="/privacy" className="footer-link">
                                Գաղտնիության քաղաքականություն
                            </Link>
                        </div>
                        <div className="footer-links">
                            <Link to="/terms" className="footer-link">
                                Օգտագործման կանոններ
                            </Link>
                        </div>
                    </div>
                </>
            ) : (
                <>
                    {/* Desktop Header */}
                    <div className="container">
                        <div className="header">
                            <h1>Հայկ Հովհաննիսյան</h1>
                            <div className="header-buttons">
                                <Link to="/" className="buttons">Գլխավոր էջ</Link>
                                <ServicesDropdown/>
                                <Link to="/fan-club" className="buttons">Ֆան ակումբ</Link>
                                <Link to="/login" className="buttons">Մուտք գործել/Գրանցվել</Link>
                            </div>
                            <LanguageSelector/>
                        </div>
                        <div className="main-content">
                            <div className="content">
                                <h2>Նոր երգ</h2>
                                <p>Ush a</p>
                                <a href="https://youtu.be/u_AGsTS6rl8?si=SY5nYWskvdPjOLiy"
                                   className="buy-button">Լսել</a>
                                <div className="song-image">
                                    <img src="../images/songPhoto.png" alt="Song"/>
                                </div>
                            </div>
                            <div className="image">
                                <a href="#about">
                                    <img src="../images/your-image.jpg" alt="Artist"/>
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
                </>
            )}
        </div>
    );
};

export default Home;
