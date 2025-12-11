import React from 'react';
import Avatar from'./Avatar';
import { NavLink } from 'react-router-dom';
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
                            <NavLink exact className="nav-link" activeClassName="nav-link-active" to="/">
                                About
                            </NavLink>
                        </li>
                        <li className="nav-item">
                            <NavLink className="nav-link" activeClassName="nav-link-active" to="/portfolio">
                                Portfolio
                            </NavLink>
                        </li>
                        <li className="nav-item">
                            <NavLink className="nav-link" activeClassName="nav-link-active" to="/contact">
                                Contact
                            </NavLink>
                        </li>
                    </ul>
                </nav>
            </div>
        </header>
    );
}

export default Navbar;