import Link from 'next/link';
import './Footer.css';
import { FaLinkedin, FaTwitter, FaInstagram, FaWhatsapp, FaEnvelope } from 'react-icons/fa';

const Footer = () => {
    return (
        <footer className="footer">
            <div className="footer-content">
                <div className="footer-brand">
                    <h3>Muhammed Jinshad K</h3>
                    <p>Digital marketing strategies focused on traffic conversions and measurable growth.</p>
                </div>

                <nav className="footer-links" aria-label="Footer navigation">
                    <div className="footer-section">
                        <h4>Quick links</h4>
                        <ul>
                            <li><Link href="/">Home</Link></li>
                            <li><Link href="/about">About</Link></li>
                            <li><Link href="/services">Services</Link></li>
                            <li><Link href="/projects">Projects</Link></li>
                            <li><Link href="/contact">Contact</Link></li>
                        </ul>
                    </div>

                    <div className="footer-section">
                        <h4>Services</h4>
                        <ul>
                            <li><Link href="/services">Search Engine Optimisation</Link></li>
                            <li><Link href="/services">Performance Marketing</Link></li>
                            <li><Link href="/services">Social Media Marketing</Link></li>
                            <li><Link href="/services">Conversion Optimisation</Link></li>
                        </ul>
                    </div>

                    <div className="footer-section">
                        <h4>Contact</h4>
                        <ul>
                            <li><a href="mailto:jinshad312@gmail.com" style={{ display: 'flex', alignItems: 'center', gap: '8px' }}><FaEnvelope /> Email</a></li>
                            <li><a href="https://wa.me/919744632798" target="_blank" rel="noopener noreferrer" style={{ display: 'flex', alignItems: 'center', gap: '8px' }}><FaWhatsapp /> WhatsApp</a></li>
                        </ul>
                        <div className="social-icons" style={{ marginTop: '1rem' }}>
                            <a href="https://www.linkedin.com/in/muhammed-jinshadk?utm_source=share_via&utm_content=profile&utm_medium=member_ios" target="_blank" rel="noopener noreferrer" aria-label="Follow on LinkedIn"><FaLinkedin /></a>
                            <a href="https://x.com/jinshaddk" target="_blank" rel="noopener noreferrer" aria-label="Follow on Twitter"><FaTwitter /></a>
                            <a href="https://www.instagram.com/jinshadd.co?igsh=MTBxNjJzeWRuMHZiaw==" target="_blank" rel="noopener noreferrer" aria-label="Follow on Instagram"><FaInstagram /></a>
                        </div>
                    </div>
                </nav>
            </div>
            <div className="footer-bottom">
                <p>&copy; {new Date().getFullYear()} Muhammed Jinshad K. All rights reserved.</p>
            </div>
        </footer>
    );
};

export default Footer;
