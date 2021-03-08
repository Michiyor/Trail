

import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faBicycle} from '@fortawesome/free-solid-svg-icons'

function Footer() {
    return (
        <footer className="footer-container footer" id="footer">
            <div className="footer-div1">
                Lorem ipsum dolor sit amet,<br/>
                consectetur adipisicing elit.<br/>
                A, voluptatem.

                <div className="footer-div2">
                    <h4>Lorem ipsum dolor.</h4>
                    <ul>
                        <li>Lorem ipsum dolor.</li>
                        <li>Lorem ipsum dolor.</li>
                        <li>Lorem ipsum dolor.</li>
                        <li>Lorem ipsum dolor.</li>
                    </ul>
                </div>
            </div>
            <section id="copyright">
                <div className="footer--copyright">
                    <a className="a-copy" href="/">Copyright</a>
                    <a className="a-plan" href="/">EnduroTrails</a>
                </div>
                <div className='iconsAwesome'>
                    <FontAwesomeIcon icon={faBicycle}/>

                </div>
            </section>
        </footer>
    );
}

export default Footer;