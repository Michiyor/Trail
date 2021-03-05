import React from "react";
import './styles.scss';

function Menu() {
    return (
        <header className="header header__container container">
            <span>EnduroTrails</span>
            <nav className="menu">
                <ul className="menu__list">
                    <li className="menu__el"><a href="/" className="menu__link">Home</a></li>
                    <li className="menu__el"><a href="/" className="menu__link">Gallery</a></li>
                    <li className="menu__el"><a href="/" className="menu__link">Trails</a></li>
                    <li className="menu__el"><a href="/" className="menu__link">Contact</a></li>
                </ul>
            </nav>
        </header>
    );
}

export default Menu;