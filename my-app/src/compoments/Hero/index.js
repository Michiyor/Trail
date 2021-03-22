import React, {useState} from "react";
import {
    BrowserRouter as Router,
    Route,
    Link
} from 'react-router-dom';
import Stefanka from "../../Trails/Stefanka";
import './style.scss';
import './Hero.js';
import icon from "./../../images/settings-icon.png";
import "../../../node_modules/animate.css/animate.min.css"
import {Switch} from "@material-ui/core";

function Hero() {
    let [bounce, setBounce] = useState(false);
    return (
        <section className='hero  hero__container' id='hero'>
            <h2>Ścieżki rowerowe</h2>
            <nav className="hero__navigation">
                <ul id="trail__name" className="hero__list">
                    <Router>
                        <li className="hero__list-el">
                            <Link to="/Stefanka">Stefanka</Link>
                            <img
                                onMouseEnter={() => setBounce(true)}
                                onMouseLeave={() => setBounce(false)}
                                src={icon}
                                alt='settings'
                                className={`${bounce ? "animate__animated animate__bounceOutRight " : ""} hero__img`}
                            /></li>
                        <li className="hero__list-el">
                            <img
                                onMouseEnter={() => setBounce(true)}
                                onMouseLeave={() => setBounce(false)}
                                src={icon}
                                alt='settings'
                                className={`${bounce ? "animate__animated animate__bounceOutLeft" : ""} hero__img`}/>Twister
                        </li>
                        <li className="hero__list-el">Stary zielony
                            <img
                                onMouseEnter={() => setBounce(true)}
                                onMouseLeave={() => setBounce(false)}
                                src={icon}
                                alt='settings'
                                className={`${bounce ? "animate__animated animate__bounceOutRight" : ""} hero__img`}
                            /></li>

                        <li className="hero__list-el">
                            <img
                                onMouseEnter={() => setBounce(true)}
                                onMouseLeave={() => setBounce(false)}
                                src={icon}
                                alt='settings'
                                className={`${bounce ? "animate__animated animate__bounceOutLeft" : ""} hero__img`}
                            /> DH+
                        </li>
                        <li className="hero__list-el">Cyganka
                            <img
                                onMouseEnter={() => setBounce(true)}
                                onMouseLeave={() => setBounce(false)}
                                src={icon}
                                alt='settings'
                                className={`${bounce ? "animate__animated animate__bounceOutRight" : ""} hero__img`}
                            /></li>
                        <li className="hero__list-el">
                            <img
                                onMouseEnter={() => setBounce(true)}
                                onMouseLeave={() => setBounce(false)}
                                src={icon}
                                alt='settings'
                                className={`${bounce ? "animate__animated animate__bounceOutLeft" : ""} hero__img`}/>
                            Cygan
                        </li>
                        <li className="hero__list-el">Daglezjowy
                            <img
                                onMouseEnter={() => setBounce(true)}
                                onMouseLeave={() => setBounce(false)}
                                src={icon}
                                alt='settings'
                                className={`${bounce ? "animate__animated animate__bounceOutRight" : ""} hero__img`}/>
                        </li>
                        <li className="hero__list-el">
                            <img
                                onMouseEnter={() => setBounce(true)}
                                onMouseLeave={() => setBounce(false)}
                                src={icon}
                                alt='settings'
                                className={`${bounce ? "animate__animated animate__bounceOutLeft" : ""} hero__img`}/>
                            Kamieniołom
                        </li>
                        <li className="hero__list-el">Gondola
                            <img
                                onMouseEnter={() => setBounce(true)}
                                onMouseLeave={() => setBounce(false)}
                                src={icon}
                                alt='settings'
                                className={`${bounce ? "animate__animated animate__bounceOutRight" : ""} hero__img`}/>
                        </li>
                        <li className="hero__list-el">
                            <img
                                onMouseEnter={() => setBounce(true)}
                                onMouseLeave={() => setBounce(false)}
                                src={icon}
                                alt='settings'
                                className={`${bounce ? "animate__animated animate__bounceOutLeft" : ""} hero__img`}/>
                            Dębowiec
                        </li>
                        <li className="hero__list-el">Dziabar
                            <img
                                onMouseEnter={() => setBounce(true)}
                                onMouseLeave={() => setBounce(false)}
                                src={icon}
                                alt='settings'
                                className={`${bounce ? "animate__animated animate__bounceOutRight" : ""} hero__img`}/>
                        </li>
                        <li className="hero__list-el">
                            <img
                                onMouseEnter={() => setBounce(true)}
                                onMouseLeave={() => setBounce(false)}
                                src={icon}
                                alt='settings'
                                className={`${bounce ? "animate__animated animate__bounceOutLeft" : ""} hero__img`}/>
                            Rock'n'Roll
                        </li>
                        <li className="hero__list-el">Sahaira
                            <img
                                onMouseEnter={() => setBounce(true)}
                                onMouseLeave={() => setBounce(false)}
                                src={icon}
                                alt='settings'
                                className={`${bounce ? "animate__animated animate__bounceOutRight" : ""} hero__img`}/>
                        </li>
                        <Switch>
                            <Route path="/Stefanka">
                                <Stefanka/>
                            </Route>
                        </Switch>
                    </Router>
                </ul>
            </nav>
        </section>
    );
}

export default Hero;