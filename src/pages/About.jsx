import { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import './About.css';

gsap.registerPlugin(ScrollTrigger);

const About = () => {
    const containerRef = useRef(null);

    useEffect(() => {
        const ctx = gsap.context(() => {
            gsap.from('.about-hero > *', {
                y: 30,
                opacity: 0,
                duration: 1,
                stagger: 0.1,
                ease: 'power3.out'
            });

            gsap.from('.bio-text p', {
                scrollTrigger: {
                    trigger: '.bio-section',
                    start: 'top 80%'
                },
                y: 20,
                opacity: 0,
                stagger: 0.1,
                duration: 0.8
            });

            gsap.from('.sidebar-block', {
                scrollTrigger: {
                    trigger: '.about-sidebar',
                    start: 'top 80%'
                },
                x: 20,
                opacity: 0,
                stagger: 0.1,
                duration: 0.8
            });

        }, containerRef);

        return () => ctx.revert();
    }, []);

    return (
        <div className="page-container about-container" ref={containerRef}>

            <div className="about-hero">
                <h1>Who I Am</h1>
                <p className="about-hero-sub">Digital Strategist. Web Creator. Growth Architect.</p>
            </div>

            <div className="section about-grid">

                {/* Main Content */}
                <div className="bio-section">
                    <h2>My Story</h2>
                    <div className="bio-text">
                        <p>
                            I’m a digital marketer and web creator focused on building long-term growth systems for businesses through SEO, high-performance websites, and automation.
                        </p>
                        <p>
                            In a world where everyone is chasing the latest trend, I focus on what actually works: solid technical foundations, data-driven content strategies, and user experiences that convert.
                        </p>
                        <p>
                            Started as a curious developer, I quickly realized that code without visibility is wasted potential. That's when I deep-dived into SEO and digital marketing, bridging the gap between "building" and "growing".
                        </p>
                    </div>

                    <div className="mission-box">
                        <h3>My Mission</h3>
                        <p>To turn websites into revenue-generating assets instead of static online brochures.</p>
                    </div>

                    <div className="philosophy-section">
                        <h2>Work Philosophy</h2>
                        <div className="philosophy-grid">
                            <div className="philo-item">
                                <h3>Strategy First</h3>
                                <p>No random acts of marketing. Everything starts with a plan.</p>
                            </div>
                            <div className="philo-item">
                                <h3>Performance Always</h3>
                                <p>Speed, UX, and technical excellence are non-negotiable.</p>
                            </div>
                            <div className="philo-item">
                                <h3>Results Measured</h3>
                                <p>If we can't track it, we can't improve it. Data is king.</p>
                            </div>
                        </div>
                    </div>

                    <div className="certs-section">
                        <h2>Certifications</h2>
                        <div className="certs-grid">
                            <div className="cert-placeholder">Google Ads</div>
                            <div className="cert-placeholder">HubSpot SEO</div>
                            <div className="cert-placeholder">Google Analytics</div>
                            <div className="cert-placeholder">Meta Blueprint</div>
                        </div>
                    </div>

                </div>

                {/* Sidebar */}
                <div className="about-sidebar">
                    <div className="sidebar-block">
                        {/* Profile Image Placeholder */}
                        <div style={{
                            width: '100%',
                            aspectRatio: '1/1',
                            background: '#222',
                            borderRadius: '12px',
                            marginBottom: '20px',
                            display: 'flex',
                            alignItems: 'center',
                            justifyContent: 'center',
                            color: '#555'
                        }}>
                            [Profile Photo]
                        </div>
                    </div>

                    <div className="sidebar-block">
                        <h3>Core Expertise</h3>
                        <div className="skill-list">
                            <span className="skill-tag">SEO Strategy</span>
                            <span className="skill-tag">Technical SEO</span>
                            <span className="skill-tag">WordPress Dev</span>
                            <span className="skill-tag">React / Next.js</span>
                            <span className="skill-tag">Marketing Automation</span>
                        </div>
                    </div>

                    <div className="sidebar-block">
                        <h3>Tools & Platforms</h3>
                        <div className="tools-grid">
                            <div className="tool-item">VS Code</div>
                            <div className="tool-item">Cursor</div>
                            <div className="tool-item">WordPress</div>
                            <div className="tool-item">Zapier</div>
                            <div className="tool-item">Make</div>
                            <div className="tool-item">n8n</div>
                            <div className="tool-item">GSC</div>
                            <div className="tool-item">Analytics</div>
                        </div>
                    </div>

                    <div className="sidebar-block">
                        <h3>Industries</h3>
                        <ul style={{ color: '#aaa', lineHeight: '1.6', paddingLeft: '20px', listStyleType: 'disc' }}>
                            <li>E-commerce</li>
                            <li>Local Business</li>
                            <li>Startups</li>
                            <li>Agencies</li>
                            <li>Real Estate</li>
                        </ul>
                    </div>
                </div>

            </div>

        </div>
    );
};

export default About;
