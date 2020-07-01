import React from 'react';

import './Features.css';

function Features() {
    return (
        <div className="features">
            <div className="feature">
                <div className="feature__icon">
                <i className="fas fa-dollar-sign fa-7x"></i>
                </div>
                <h2 className="feature__text">Free of all cost !</h2>
            </div>
            <div className="feature">
                <div className="feature__icon">
                <i className="fas fa-history fa-7x"></i>
                </div>
                <h2 className="feature__text">Start right now !</h2>
            </div>
            <div className="feature">
                <div className="feature__icon">
                <i className="fas fa-users fa-7x"></i>
                </div>
                <h2 className="feature__text">Huge community !</h2>
            </div>
        </div>
    );
}

export default Features;