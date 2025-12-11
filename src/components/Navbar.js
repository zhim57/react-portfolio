import React from 'react';
import Avatar from'./Avatar';
import { Link } from 'react-router-dom';
import './card.css'


function Navbar() {
    return (
        <header className="fixed-top App">
            <div className="light navbar-bottom">
                <Avatar
                    img="/react-portfolio/assets/images/jivko4a.jpg"
                    alt="Profile photo of Jivko Atanassov"
                />
                <h1>Hello there, I am Jivko</h1>
                <nav aria-label="Main navigation">
                    <ul className="links-nav">
                        <li className="nav-item">
                            <Link className="nav-link links-nav" to="/">About</Link>
                        </li>
                        <li className="nav-item">
                            <Link className="nav-link links-nav" to="/portfolio">Portfolio</Link>
                        </li>
                        <li className="nav-item">
                            <Link className="nav-link links-nav" to="/contact">Contact</Link>
                        </li>
                    </ul>
                </nav>
            </div>
        </header>
    );
}

export default Navbar;