"use client";

import { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import '../../src/_pages/About.css';

gsap.registerPlugin(ScrollTrigger);

const About = () => {
    const containerRef = useRef(null);

    useEffect(() => {
        const ctx = gsap.context(() => {
            gsap.from('.about-hero > *', {
                y: 30,
                opacity: 0,
                duration: 0.8,
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
                stagger: 0.08,
                duration: 0.6
            });

            gsap.from('.sidebar-block', {
                scrollTrigger: {
                    trigger: '.about-sidebar',
                    start: 'top 80%'
                },
                x: 20,
                opacity: 0,
                stagger: 0.08,
                duration: 0.6
            });

        }, containerRef);

        return () => ctx.revert();
    }, []);

    return (
        <div className="page-container about-container" ref={containerRef}>

            <header className="about-hero">
                <h1>Who I Am</h1>
                <p className="about-hero-sub">Digital Strategist. Web Creator. Growth Architect.</p>
            </header>

            <div className="section about-grid">

                {/* Main Content */}
                <article className="bio-section">
                    <h2>My Story</h2>
                    <div className="bio-text">
                        <p>
                            I’m Muhammed Jinshad K, a freelance digital marketer and web designer based in Calicut, Kerala. My focus is on building long-term digital growth systems for businesses across India and globally through expert SEO services, Google Ads management, and high-performance website design.
                        </p>
                        <p>
                            In a rapidly changing digital landscape, I strictly prioritize strategies that actually generate revenue: solid technical SEO foundations, data-driven social media marketing, and user experiences that convert local searchers into loyal customers.
                        </p>
                        <p>
                            Starting as a web developer in Calicut, I quickly realized that a beautiful website without search engine visibility is wasted potential. That realization led me to master SEO and digital marketing strategy—bridging the vital gap between merely "building" a website and actively "growing" a business online.
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

                </article>

                {/* Sidebar */}
                <aside className="about-sidebar">
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
                            <span className="skill-tag">SEO Expert Calicut</span>
                            <span className="skill-tag">Digital Marketing Strategy</span>
                            <span className="skill-tag">Google Ads PPC</span>
                            <span className="skill-tag">Technical SEO India</span>
                            <span className="skill-tag">Web Design Calicut</span>
                            <span className="skill-tag">Social Media Marketing</span>
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
                </aside>

            </div>

        </div>
    );
};

export default About;
