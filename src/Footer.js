import React from 'react';
import './CSS/Footer.css';

const Footer = () => {
    return (
        <footer>
            <div className="footer-container">
                <div className="footer-column">
                    <h3>Documentation</h3>
                    <ul>
                        <li><a href="https://rickandmortyapi.com">API Docs</a></li>
                    </ul>
                </div>
                <div className="footer-column">
                    <h3>Contact</h3>
                    <ul>
                        <li><a href="mailto:email@example.com">Email</a></li>
                    </ul>
                </div>
                <div className="footer-column">
                    <h3>Author</h3>
                    <ul>
                        <li><a href="https://github.com/PinappleJuice23">Github</a></li>
                    </ul>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
