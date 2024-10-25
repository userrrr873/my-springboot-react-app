import React, { useEffect } from 'react';
import './index.css'; // Make sure to create and link this CSS file.

const StarsBackground: React.FC = () => {

    useEffect(() => {
        const numStars = 100;
        const starsContainer = document.querySelector('.stars') as HTMLElement;

        for (let i = 0; i < numStars; i++) {
            let star = document.createElement('div');
            star.classList.add('star');
            star.style.left = `${Math.random() * 100}vw`;
            star.style.top = `${Math.random() * 100}vh`;
            star.style.animationDuration = `${2 + Math.random() * 4}s`;
            starsContainer.appendChild(star);
        }
    }, []);

    return <div className="stars"></div>;
};

export default StarsBackground;
