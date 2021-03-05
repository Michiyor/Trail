import React from "react";
import './style.scss';
import './Hero.js';

function Hero() {
    return (
        <section className='hero container hero__container' id='hero'>
            <h2>Ścieżki rowerowe</h2>
            <nav className="hero__navigation">
                <ul id="trail__name" className="hero__list">
                    <li>Stefanka<img src='../../images/settings-icon.png' alt='settings' className='hero__img'/></li>
                    <li><img src='../../images/settings-icon.png' alt='settings' className='hero__img decoration'/>Twister</li>
                    <li>Stary zielony<img src='../../images/settings-icon.png' alt='settings' className='hero__img'/>
                    </li>
                    <li><img src='../../images/settings-icon.png' alt='settings' className='hero__img decoration'/>DH+</li>
                    <li>Cyganka<img src='../../images/settings-icon.png' alt='settings' className='hero__img'/></li>
                    <li><img src='../../images/settings-icon.png' alt='settings' className='hero__img decoration'/>Cygan</li>
                    <li>Daglezjowy<img src='../../images/settings-icon.png' alt='settings' className='hero__img'/></li>
                    <li><img src='../../images/settings-icon.png' alt='settings' className='hero__img decoration'/>Kamieniołom</li>
                    <li>Gondola<img src='../../images/settings-icon.png' alt='settings' className='hero__img'/></li>
                    <li><img src='../../images/settings-icon.png' alt='settings' className='hero__img decoration'/>Dębowiec</li>
                    <li>Dziabar<img src='../../images/settings-icon.png' alt='settings' className='hero__img'/></li>
                    <li><img src='../../images/settings-icon.png' alt='settings' className='hero__img decoration'/>Rock'n'Roll</li>
                    <li>Sahaira<img src='../../images/settings-icon.png' alt='settings' className='hero__img'/></li>
                </ul>
            </nav>
        </section>
    );
}


export default Hero;