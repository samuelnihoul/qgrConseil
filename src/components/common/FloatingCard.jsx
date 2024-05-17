import React, { useState } from 'react';
import './FloatingCard.css'; // Import the CSS file

const FloatingCard = () => {
    const [isVisible, setIsVisible] = useState(false);

    const toggleCard = () => {
        setIsVisible(!isVisible);
    };

    return (
        <div className="floating-card-container">
            <button className="toggle-button" onClick={toggleCard}>
                {isVisible ? 'Hide Card' : 'Show Card'}
            </button>
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
