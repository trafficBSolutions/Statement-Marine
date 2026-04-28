import React, { useState } from 'react';
import '../../css/header.css';
import images from '../../utils/images';

function Header() {
    const [isOpen, setIsOpen] = useState(false);

    return (
        <header className="header">
            <a href="/" className="logo">
                <img src={images['Statement Marine Logo.svg']} alt="Statement Marine" />
            </a>
            <button className="menu-button" onClick={() => setIsOpen(!isOpen)}>
                <ion-icon name="menu-outline"></ion-icon>
            </button>
            <nav className={`nav ${isOpen ? 'open' : ''}`}>
                <ul className="nav-list">
                    <li><a className="main-nav-view" href="/about">Why Statement</a></li>
                    <li className="dropdown">
                        <a className="main-nav-view" href="/designs">Designs</a>
                        <ul className="dropdown-menu">
                            <li><a href="/designs/350-open">350 Open</a></li>
                            <li><a href="/designs/380-open">380 Open</a></li>
                            <li><a href="/designs/360-cat">360 Cat</a></li>
                            <li><a href="/designs/430-tigress">430 Tigress</a></li>
                            <li><a href="/designs/42-ultimate">42 Ultimate</a></li>
                            <li><a href="/designs/50-passion">50 Passion</a></li>
                        </ul>
                    </li>
                    <li><a className="main-nav-view" href="/boats-available">Boats Available</a></li>
                    <li><a className="main-nav-view" href="/contact">Contact Us</a></li>
                </ul>
            </nav>
        </header>
    );
}

export default Header;
