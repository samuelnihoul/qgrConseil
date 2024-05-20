import React, { useState } from 'react';
import './FloatingCard.module.css'; // Import the CSS file

const FloatingCard = ({ children }) => {
    const [isVisible, setIsVisible] = useState(false);

    const toggleCard = () => {
        setIsVisible(!isVisible);
    };

    return (
        <div className="floating-card-container">
            <div onClick={toggleCard}>
                {children}
            </div>
            {isVisible && (
                <div className="floating-card">
                    <h2>Floating Card</h2>
                    <p>This is a floating card that can be toggled on and off.</p>
                </div>
            )}
        </div>
    );
};

export default FloatingCard;
