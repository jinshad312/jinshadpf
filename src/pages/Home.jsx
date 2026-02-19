import { useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { FaArrowRight, FaCheckCircle } from 'react-icons/fa';
import Carousel from '../components/Carousel'; // Use if we want a carousel for skills or something
import './Home.css';

gsap.registerPlugin(ScrollTrigger);

const Home = () => {
    const contentRef = useRef(null);

    // Refs for animations
    const heroRef = useRef(null);
    const aboutRef = useRef(null);
    const servicesRef = useRef(null);
    const processRef = useRef(null);
    const projectsRef = useRef(null);
    const ctaRef = useRef(null);

    useEffect(() => {
        const ctx = gsap.context(() => {
            // Hero Animation
            gsap.from('.hero-content > *', {
                y: 50,
                opacity: 0,
                duration: 1,
                stagger: 0.2,
                ease: 'power3.out',
                delay: 0.2
            });

            // About Section
            gsap.from(aboutRef.current, {
                scrollTrigger: {
                    trigger: aboutRef.current,
                    start: 'top 80%',
                },
                y: 50,
                opacity: 0,
                duration: 0.8,
                ease: 'power3.out'
            });

            // Services Stagger
            gsap.from('.service-card', {
                scrollTrigger: {
                    trigger: servicesRef.current,
                    start: 'top 80%',
                },
                y: 50,
                opacity: 0,
                duration: 0.6,
                stagger: 0.1,
                ease: 'power3.out'
            });

            // Process Steps
            gsap.from('.process-step', {
                scrollTrigger: {
                    trigger: processRef.current,
                    start: 'top 75%',
                },
                x: -50,
                opacity: 0,
                duration: 0.8,
                stagger: 0.2,
                ease: 'power3.out'
            });

            // Projects
            gsap.from('.project-card', {
                scrollTrigger: {
                    trigger: projectsRef.current,
                    start: 'top 80%'
                },
                scale: 0.9,
                opacity: 0,
                duration: 0.8,
                stagger: 0.2,
                ease: 'power2.out'
            });

        }, contentRef);

        return () => ctx.revert();
    }, []);

    return (
        <div className="home-container" ref={contentRef}>

            {/* HERO SECTION */}
            <section className="hero-section" ref={heroRef}>
                <div className="hero-content">
                    <h1 className="hero-title">MUHAMMED JINSHAD K</h1>
                    <h2 className="hero-subtitle">Digital Marketer • SEO Strategist • Web Creator</h2>
                    <p className="hero-value">
                        Helping brands increase visibility, generate qualified leads, and scale with data-driven digital systems.
                    </p>

                    <div className="trust-metrics-grid">
                        <div className="metric-item">
                            <span className="metric-number">20+</span>
                            <span className="metric-label">Projects Delivered</span>
                        </div>
                        <div className="metric-item">
                            <span className="metric-number">15+</span>
                            <span className="metric-label">Websites Built</span>
                        </div>
                        <div className="metric-item">
                            <span className="metric-number">10+</span>
                            <span className="metric-label">SEO Campaigns</span>
                        </div>
                        <div className="metric-item">
                            <span className="metric-number">25+</span>
                            <span className="metric-label">Automations</span>
                        </div>
                    </div>

                    <div className="hero-cta-group">
                        <Link to="/projects" className="btn btn-primary">View Projects</Link>
                        <Link to="/contact" className="btn btn-secondary">Start a Project</Link>
                    </div>
                </div>
            </section>

            {/* ABOUT PREVIEW */}
            <section className="section about-preview" ref={aboutRef}>
                <div className="about-content">
                    <div className="section-header">
                        <h3 className="section-title">I build SEO-driven websites and marketing systems that don’t just look good — but rank, convert, and scale.</h3>
                    </div>
                    <p>
                        My work combines SEO strategy, high-performance development, and automation to turn your digital presence into a growth engine.
                    </p>
                    <div className="about-tags">
                        <span className="tag">SEO Strategy</span>
                        <span className="tag">High-Performance Dev</span>
                        <span className="tag">Automation</span>
                    </div>
                    <Link to="/about" className="btn btn-secondary">Learn More About Me <FaArrowRight style={{ marginLeft: '8px', fontSize: '0.8em' }} /></Link>
                </div>
                {/* Placeholder for an image or graphic */}
                <div className="about-visual" style={{
                    height: '400px',
                    background: 'linear-gradient(135deg, rgba(255,255,255,0.05), rgba(255,255,255,0.01))',
                    borderRadius: '24px',
                    border: '1px solid rgba(255,255,255,0.05)',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    color: '#333'
                }}>
                    [My Photo / visual placeholder]
                </div>
            </section>

            {/* SERVICES PREVIEW */}
            <section className="section" ref={servicesRef}>
                <div className="section-header">
                    <h2 className="section-title">Core Services</h2>
                </div>
                <div className="services-grid">
                    <div className="service-card">
                        <h3>SEO Strategy</h3>
                        <p>Rank for high-intent keywords and capture consistent organic traffic.</p>
                    </div>
                    <div className="service-card">
                        <h3>Business Website Dev</h3>
                        <p>Fast, conversion-focused websites built for real growth.</p>
                    </div>
                    <div className="service-card">
                        <h3>Landing Pages for Ads</h3>
                        <p>Designed to turn clicks into qualified leads.</p>
                    </div>
                    <div className="service-card">
                        <h3>Marketing Automation</h3>
                        <p>Lead capture, follow-ups, and workflows that run on autopilot.</p>
                    </div>
                    <div className="service-card">
                        <h3>Technical SEO</h3>
                        <p>Fix performance, indexing, and structure issues that block rankings.</p>
                    </div>
                </div>
                <div style={{ marginTop: '3rem', textAlign: 'center' }}>
                    <Link to="/services" className="btn btn-secondary">View All Services</Link>
                </div>
            </section>

            {/* PROCESS */}
            <section className="section" ref={processRef}>
                <div className="section-header">
                    <h2 className="section-title">The Process</h2>
                </div>
                <div className="process-steps">
                    <div className="process-step">
                        <h3>1. Audit & Research</h3>
                        <p>Understanding your market, competitors, and growth opportunities.</p>
                    </div>
                    <div className="process-step">
                        <h3>2. Strategy & Structure</h3>
                        <p>Building a clear SEO and funnel architecture.</p>
                    </div>
                    <div className="process-step">
                        <h3>3. Execution</h3>
                        <p>Development, optimization, and automation setup.</p>
                    </div>
                    <div className="process-step">
                        <h3>4. Performance Tracking</h3>
                        <p>Data-driven improvements and testing.</p>
                    </div>
                    <div className="process-step">
                        <h3>5. Scaling</h3>
                        <p>Turning initial traction into consistent growth.</p>
                    </div>
                </div>
            </section>

            {/* PROJECTS PREVIEW */}
            <section className="section" ref={projectsRef}>
                <div className="section-header">
                    <h2 className="section-title">Real Projects. Measurable Results.</h2>
                    <p>Growth-focused execution across industries.</p>
                </div>

                <div className="projects-grid">
                    {/* Project 1 */}
                    <div className="project-card">
                        <div className="project-image-placeholder">Project Alpha</div>
                        <div className="project-info">
                            <span className="project-meta">E-commerce</span>
                            <h3 className="project-title">Scaling Organic Sales</h3>
                            <div className="project-results">
                                <span className="result-tag">+300% Traffic</span>
                                <span className="result-tag">3x Revenue</span>
                            </div>
                        </div>
                    </div>

                    {/* Project 2 */}
                    <div className="project-card">
                        <div className="project-image-placeholder">Project Beta</div>
                        <div className="project-info">
                            <span className="project-meta">Local Business</span>
                            <h3 className="project-title">Dominating Local Search</h3>
                            <div className="project-results">
                                <span className="result-tag">#1 Rankings</span>
                                <span className="result-tag">2x Leads</span>
                            </div>
                        </div>
                    </div>
                </div>

                <div style={{ textAlign: 'center' }}>
                    <Link to="/projects" className="btn btn-primary">View Full Case Studies</Link>
                </div>
            </section>

            {/* RESULTS STRIP */}
            <div className="results-strip">
                <div className="results-grid">
                    <div className="result-item">
                        <h4>Organic Traffic Growth</h4>
                    </div>
                    <div className="result-item">
                        <h4>Keyword Ranking Wins</h4>
                    </div>
                    <div className="result-item">
                        <h4>Conversion Rate Improvements</h4>
                    </div>
                    <div className="result-item">
                        <h4>Technical SEO Fixes</h4>
                    </div>
                    <div className="result-item">
                        <h4>Funnel Optimization</h4>
                    </div>
                </div>
            </div>

            {/* CTA */}
            <section className="home-cta" ref={ctaRef}>
                <h2>Let’s build something that ranks and converts.</h2>
                <p>Currently accepting a limited number of projects.</p>
                <div className="hero-cta-group">
                    <Link to="/contact" className="btn btn-primary">Start a Project</Link>
                    <Link to="/contact" className="btn btn-secondary">Book a Call</Link>
                </div>
            </section>

        </div>
    );
};

export default Home;
