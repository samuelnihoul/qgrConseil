import React, { useState } from 'react';
import './FloatingCard.module.css'; // Import the CSS file

const FloatingCard = ({ children, p }) => {
    const [isVisible, setIsVisible] = useState(false);

    const toggleCard = () => {
        setIsVisible(!isVisible);
    };

    return (
        <div className="floating-card-container">
            <div onClick={toggleCard} className='card-content'>
                {children}
            </div>
            {isVisible && (
                <div className="floating-card">
                    <ul>
                        {p.map(
                            e => {
                                return (<li>•{' '}{e}</li>)
                            }
                        )}
                    </ul>
                </div>
            )}
        </div>
    );
};

export default FloatingCard;
