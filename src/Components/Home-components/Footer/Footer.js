import React from 'react';
import { Link } from 'react-router-dom';

import './Footer.css';

function Footer() {
    return (
        <div className="footer">
            <h1 className="footer__title">Join us now!</h1>
            <div className="footer__button"><Link to="/auth">Get Started</Link></div>
            <div className="footer__social">
                <span className="footer__social-icon icon-facebook"><i className="fab fa-facebook-square fa-5x"></i></span>
                <span className="footer__social-icon icon-linkedin"><i className="fab fa-linkedin fa-5x"></i></span>
                <span className="footer__social-icon"><i className="fab fa-github-square fa-5x"></i></span>
            </div>
        </div>
    );
}

export default Footer;
