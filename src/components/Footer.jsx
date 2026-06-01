import React from 'react';
import { Link } from 'react-router-dom';

function Footer() {
    return (
        <footer className="footer-v2-centered">
            <div className="container">
                <div className="footer-centered-content">
                    <div className="footer-logo-main">
                        <div className="logo-top">GRUHAMS</div>
                        <div className="logo-bottom">PLANS</div>
                    </div>

                    <div className="footer-contact-info">
                        <p>Sree Sai heights, 3rd floor, ideal home town ship, Rajarajeshwari Nagar, Bangalore - 560098</p>
                        <p>gruhams@gmail.com</p>
                        <p>0411 534 010</p>
                    </div>

                    <div className="footer-links-row">
                        <Link to="/blog">Blog</Link>
                        <Link to="/callback">Request a call back</Link>
                        <Link to="/license">Licensing opportunities</Link>
                    </div>

                    <div className="footer-social-row">
                        <a href="tel:0411534010" className="social-circle">📞</a>
                        <a href="mailto:gruhams@gmail.com" className="social-circle">✉️</a>
                        <a href="#" className="social-circle">f</a>
                        <a href="#" className="social-circle">📸</a>
                    </div>
                </div>

                <div className="footer-bottom-bar">
                    <div className="footer-bottom-left">
                        © Gruhams Plans 2026. All rights reserved | Terms of Service | Privacy Policy
                    </div>
                    <div className="footer-bottom-right">
                        Website by Gruhams XR
                    </div>
                </div>
            </div>
        </footer>
    );
}

export default Footer;
