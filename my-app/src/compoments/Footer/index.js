import React from "react";
import './styles.scss';

function Footer() {
    return (
            <footer className="footer-container footer" id="footer">
                <div className="footer-div1">
                    <h4>Lorem ipsum dolor.</h4>
                    <br>Lorem ipsum dolor sit amet,</br>
                    <br> consectetur adipisicing elit.</br>
                    <br>A, voluptatem.</br>
                </div>
                <div className="footer-div2">
                    <h4>Lorem ipsum dolor.</h4>
                    <ul>
                        <li>Lorem ipsum dolor.</li>
                        <li>Lorem ipsum dolor.</li>
                        <li>Lorem ipsum dolor.</li>
                        <li>Lorem ipsum dolor.</li>
                    </ul>
                </div>
                <div className="footer-div3">
                    <h4>Lorem ipsum dolor.</h4>
                    <input className="footer-input" type="text"/>
                    <button className="footer-button" type="button">Lorem</button>
                </div>

                <div className="footer--copyright">
                    <a className="a-copy" href="/">Copyright</a>
                    <a className="a-plan" href="/">EnduroTrails</a>
                </div>
            </footer>
    );
}

export default Footer;