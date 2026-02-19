import { Link } from 'react-router-dom';
import './Footer.css';
import { FaLinkedin, FaTwitter, FaGithub, FaInstagram } from 'react-icons/fa';

const Footer = () => {
    return (
        <footer className="footer">
            <div className="footer-content">
                <div className="footer-brand">
                    <h3>MUHAMMED JINSHAD K</h3>
                    <p>SEO-driven websites and growth systems for modern businesses.</p>
                </div>

                <div className="footer-links">
                    <div className="footer-section">
                        <h4>Menu</h4>
                        <ul>
                            <li><Link to="/">Home</Link></li>
                            <li><Link to="/about">About</Link></li>
                            <li><Link to="/services">Services</Link></li>
                            <li><Link to="/projects">Projects</Link></li>
                            <li><Link to="/contact">Contact</Link></li>
                        </ul>
                    </div>

                    <div className="footer-section">
                        <h4>Socials</h4>
                        <div className="social-icons">
                            <a href="#" aria-label="LinkedIn"><FaLinkedin /></a>
                            <a href="#" aria-label="Twitter"><FaTwitter /></a>
                            <a href="#" aria-label="GitHub"><FaGithub /></a>
                            <a href="#" aria-label="Instagram"><FaInstagram /></a>
                        </div>
                    </div>
                </div>
            </div>
            <div className="footer-bottom">
                <p>&copy; {new Date().getFullYear()} Muhammed Jinshad K. All rights reserved.</p>
            </div>
        </footer>
    );
};

export default Footer;
