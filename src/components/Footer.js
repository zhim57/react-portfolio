import React from 'react';
import './card.css';

function Footer() {
    const currentYear = new Date().getFullYear();

    return (
        <footer className="site-footer">
            <div className="footer-content">
                <div className="footer-social">
                    <a
                        href="https://www.linkedin.com/in/jivko-atanassov-542b4112/"
                        target="_blank"
                        rel="noreferrer"
                        className="footer-link"
                        aria-label="LinkedIn"
                    >
                        LinkedIn
                    </a>
                    <a
                        href="https://github.com/zhim57"
                        target="_blank"
                        rel="noreferrer"
                        className="footer-link"
                        aria-label="GitHub"
                    >
                        GitHub
                    </a>
                    <a
                        href="mailto:zhim57@yahoo.com"
                        className="footer-link"
                        aria-label="Email"
                    >
                        Email
                    </a>
                </div>
                <p className="footer-copyright">
                    &copy; {currentYear} Jivko Atanassov. All rights reserved.
                </p>
            </div>
        </footer>
    );
}

export default Footer;