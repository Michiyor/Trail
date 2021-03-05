import React from "react";
import './style.scss';
import './Hero.js';

function Hero() {
    return(
        <section className='hero container hero__container' id='hero'>
            <h2>Ścieżki rowerowe</h2>
            <div>
                <img src='../../images/settings-icon.png' alt='settings' className='hero__img'/>
            </div>
        </section>
    );
}


export default Hero;