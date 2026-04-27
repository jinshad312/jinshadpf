"use client";

import { useEffect, useRef } from 'react';
import Link from 'next/link';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { FaArrowRight } from 'react-icons/fa';
import '../src/_pages/Home.css';

gsap.registerPlugin(ScrollTrigger);

const toolsList = [
    'Google Analytics',
    'Google Tag Manager',
    'Google Search Console',
    'Google Ads',
    'Meta Ads Manager',
    'LinkedIn Ads',
    'YouTube Ads',
    'Ahrefs',
    'SEMrush',
    'Ubersuggest',
    'Google Keyword Planner',
    'Webflow',
    'Shopify',
    'Figma',
    'Canva',
    'Mailchimp',
    'Meta Business Suite'
];

const half = Math.ceil(toolsList.length / 2);
const toolsList1 = toolsList.slice(0, half);
const toolsList2 = toolsList.slice(half);

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
            // Hero Animation (Preloader feel)
            const heroTl = gsap.timeline({ defaults: { ease: 'power4.out' } });
            heroTl.fromTo('.hero-title', 
                { y: 80, opacity: 0, filter: 'blur(10px)' }, 
                { y: 0, opacity: 1, filter: 'blur(0px)', duration: 0.9, delay: 0.1 }
            )
            .fromTo('.hero-value', 
                { y: 40, opacity: 0 }, 
                { y: 0, opacity: 1, duration: 0.8 }, 
                "-=0.7"
            )
            .fromTo('.hero-cta-group .btn', 
                { y: 20, opacity: 0 }, 
                { y: 0, opacity: 1, duration: 0.8, stagger: 0.2 }, 
                "-=0.8"
            );

            // Generic Text/Element Reveals
            gsap.utils.toArray('.section-header, .about-content > p, .about-content > .btn, .results-strip h2, .results-strip p').forEach(el => {
                gsap.fromTo(el, 
                    { y: 50, opacity: 0 },
                    {
                        y: 0, 
                        opacity: 1,
                        duration: 0.9,
                        ease: 'power3.out',
                        scrollTrigger: {
                            trigger: el,
                            start: 'top 90%',
                        }
                    }
                );
            });

            // Counters Animation
            gsap.utils.toArray('.metric-number').forEach(el => {
                const target = parseInt(el.getAttribute('data-target') || '0', 10);
                const suffix = el.getAttribute('data-suffix') || '';

                gsap.to({ val: 0 }, {
                    val: target,
                    duration: 2.5,
                    ease: "power3.out",
                    scrollTrigger: {
                        trigger: '.trust-metrics-grid',
                        start: 'top 85%',
                    },
                    onUpdate: function () {
                        el.innerText = Math.floor(this.targets()[0].val) + suffix;
                    }
                });
            });

            // Parallax Effects
            gsap.to('.hero-content', {
                yPercent: 30,
                opacity: 0,
                ease: 'none',
                scrollTrigger: {
                    trigger: heroRef.current,
                    start: 'top top',
                    end: 'bottom top',
                    scrub: true
                }
            });

            gsap.fromTo('.about-visual', 
                { yPercent: 10, scale: 0.95 },
                {
                    yPercent: -10,
                    scale: 1,
                    ease: 'none',
                    scrollTrigger: {
                        trigger: aboutRef.current,
                        start: 'top bottom',
                        end: 'bottom top',
                        scrub: true
                    }
                }
            );

            // Services Stagger Reveal
            gsap.fromTo('.service-card', 
                { y: 60, opacity: 0 },
                {
                    scrollTrigger: {
                        trigger: servicesRef.current,
                        start: 'top 80%',
                    },
                    y: 0,
                    opacity: 1,
                    duration: 0.6,
                    stagger: 0.1,
                    ease: 'power4.out'
                }
            );

            // Process Section Animation (standard reveal)
            const processSteps = gsap.utils.toArray('.process-step');
            
            if (processRef.current && processSteps.length > 0) {
                gsap.fromTo('.process-step', 
                    { y: 60, opacity: 0 },
                    {
                        scrollTrigger: {
                            trigger: processRef.current,
                            start: 'top 80%',
                        },
                        y: 0,
                        opacity: 1,
                        duration: 0.8,
                        stagger: 0.15,
                        ease: 'power4.out'
                    }
                );
            }

            // Projects Elegant Reveal
            gsap.fromTo('.project-card', 
                { y: 80, opacity: 0, scale: 0.95 },
                {
                    scrollTrigger: {
                        trigger: projectsRef.current,
                        start: 'top 80%'
                    },
                    y: 0,
                    opacity: 1,
                    scale: 1,
                    duration: 0.8,
                    stagger: 0.15,
                    ease: 'power3.out'
                }
            );

        }, contentRef);

        return () => ctx.revert();
    }, []);

    return (
        <div className="home-container" ref={contentRef}>

            {/* HERO SECTION */}
            <section className="hero-section" ref={heroRef} aria-label="Freelance Digital Marketer in Calicut">
                <div className="hero-content">
                    <h1 className="hero-title">Freelance Digital Marketer in Calicut, Kerala</h1>
                    <p className="hero-value" style={{ marginTop: '1.5rem', marginBottom: '2rem' }}>
                        I am a digital marketing expert and web designer based in Calicut helping businesses in Kerala, India, and globally achieve real growth.<span className="hero-description-extra"> I specialize in SEO services, Google Ads management, social media marketing, and high-converting website design. Every strategy I build is focused on attracting the right audience and scaling with measurable results.</span>
                    </p>

                    <div className="hero-cta-group">
                        <Link href="/contact" className="btn btn-primary">Book a Strategy Call</Link>
                        <Link href="/projects" className="btn btn-secondary">View My Work</Link>
                    </div>
                </div>
            </section>

            {/* ABOUT PREVIEW */}
            <section className="section about-preview" ref={aboutRef} aria-label="About digital marketing consultant in Kerala">
                <div className="about-content">
                    <div className="section-header">
                        <h2 className="section-title">Your Digital Marketing Partner in Calicut</h2>
                    </div>
                    <p>
                        As a freelance digital marketer in Calicut, I partner with ambitious businesses across India to build strong online systems. My focus is on increasing online visibility, generating qualified leads, and significantly improving conversion rates.
                    </p>
                    <p style={{ marginTop: '1rem' }}>
                        My approach as an SEO expert in Kerala combines deep search engine optimization, targeted performance marketing (Google Ads / PPC), modern social media strategies, and actionable analytics. Using cutting-edge web design and AI automation, I deliver scalable digital marketing services tailored for long-term ROI.
                    </p>
                    <Link href="/about" className="btn btn-secondary" style={{ marginTop: '2rem' }}>Learn more about me <FaArrowRight style={{ marginLeft: '8px', fontSize: '0.8em' }} /></Link>
                </div>
                {/* Visual Graphic Element */}
                <div className="about-visual glass-panel" style={{
                    height: '400px',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    color: '#888'
                }} role="img" aria-label="Digital Marketing Expert and Web Designer in Calicut">
                    [Profile image]
                </div>
            </section>

            {/* SERVICES PREVIEW */}
            <section className="section" ref={servicesRef} aria-label="Digital Marketing Services in Calicut">
                <div className="section-header" style={{ textAlign: 'center', maxWidth: '800px', margin: '0 auto 3rem auto' }}>
                    <h2 className="section-title">Digital Marketing Services</h2>
                    <p style={{ marginTop: '1rem', color: '#ccc' }}>Professional digital marketing and web design services for businesses in Calicut, Kerala, and across India.</p>
                </div>
                <div className="services-grid">
                    <div className="service-card glass-panel">
                        <h3>SEO Services</h3>
                        <p>Complete search engine optimization to improve site structure and content. As a trusted SEO expert in India, I help your business rank higher on Google for local and national searches.</p>
                    </div>
                    <div className="service-card glass-panel">
                        <h3>Google Ads Management</h3>
                        <p>High-ROI performance marketing and PPC campaigns. Generating immediate, qualified leads and customer acquisition through expertly managed Google and Meta Ads.</p>
                    </div>
                    <div className="service-card glass-panel">
                        <h3>Social Media Marketing</h3>
                        <p>Results-driven social media marketing services in India. I create engaging content strategies to build brand trust, elevate engagement, and support sustainable business growth.</p>
                    </div>
                    <div className="service-card glass-panel">
                        <h3>Web Design Services</h3>
                        <p>As a seasoned web designer in Calicut, I build fast, modern, SEO-friendly websites optimized for both user experience and maximum conversion rates.</p>
                    </div>
                </div>
            </section>

            {/* MARKETING POWERED BY TECHNOLOGY */}
            <section className="section" aria-label="Digital growth system">
                <div className="section-header" style={{ textAlign: 'center', maxWidth: '800px', margin: '0 auto 3rem auto' }}>
                    <h2 className="section-title">Complete Digital Growth System</h2>
                </div>
                <div style={{ maxWidth: '800px', margin: '0 auto', textAlign: 'center' }}>
                    <p>
                        Great marketing needs the right technical foundation. I build fast high converting pages implement automation for lead handling and use AI powered workflows to improve speed accuracy and performance.
                    </p>
                    <p style={{ marginTop: '1.5rem' }}>
                        This creates a connected system where every part of your marketing works together to produce better results with less wasted effort.
                    </p>
                </div>
            </section>

            {/* PROCESS */}
            <section className="section" ref={processRef} aria-label="Digital Marketing Strategy and Process">
                <div className="section-header" style={{ textAlign: 'center', maxWidth: '800px', margin: '0 auto 3rem auto' }}>
                    <h2 className="section-title">My Proven Optimization Process</h2>
                </div>
                <div className="process-steps">
                    <div className="process-step">
                        <h3>1. Digital Strategy & SEO Research</h3>
                        <p>Understanding your Calicut or continuous Indian market, audience behaviors, and direct competitors to formulate a winning digital marketing strategy.</p>
                    </div>
                    <div className="process-step">
                        <h3>2. Campaign & Website Setup</h3>
                        <p>Building a robust technical SEO foundation, launching hyper-targeted Google Ads, and deploying modern website designs optimized for conversions.</p>
                    </div>
                    <div className="process-step">
                        <h3>3. Execution & Optimization</h3>
                        <p>Continuous A/B testing, performance marketing tracking, and SEO refinements to drastically improve conversion rates while reducing acquisition costs.</p>
                    </div>
                    <div className="process-step">
                        <h3>4. Scaling Growth</h3>
                        <p>Identifying high-performing marketing channels and aggressively scaling campaigns to consistently generate leads and secure long-term digital growth.</p>
                    </div>
                </div>
            </section>

            {/* SELECTED WORK */}
            <section className="section" ref={projectsRef} aria-label="Digital Marketing Web Design Portfolio">
                <div className="section-header" style={{ textAlign: 'center', maxWidth: '800px', margin: '0 auto 3rem auto' }}>
                    <h2 className="section-title">Digital Marketing Case Studies</h2>
                    <p style={{ marginTop: '1rem', color: '#ccc' }}>A selection of successful SEO optimization, website design, and performance marketing projects across India and globally.</p>
                </div>

                <div className="projects-grid">
                    {/* Real project cards can be mapped here later. For now, using placeholders. */}
                    <div className="project-card glass-panel" aria-label="Digital Marketing Optimization Project">
                        <div className="project-image-placeholder">[Project placeholder]</div>
                        <div className="project-info">
                            <h3 className="project-title">SEO & Strategy Optimization</h3>
                        </div>
                    </div>
                    <div className="project-card glass-panel" aria-label="Web Design Project India">
                        <div className="project-image-placeholder">[Project placeholder]</div>
                        <div className="project-info">
                            <h3 className="project-title">High-Converting Website Design</h3>
                        </div>
                    </div>
                </div>

                <div style={{ textAlign: 'center', marginTop: '3rem' }}>
                    <Link href="/projects" className="btn btn-primary">View All Case Studies</Link>
                </div>
            </section>

            {/* TOOLS AND PLATFORMS */}
            <div className="results-strip">
                <div className="section-header" style={{ textAlign: 'center', maxWidth: '800px', margin: '0 auto 2rem auto' }}>
                    <h2 className="section-title" style={{ fontSize: '2rem' }}>Tools and Platforms</h2>
                    <p style={{ marginTop: '1rem', color: '#ccc' }}>I work with reliable and modern platforms to plan launch track and optimise every campaign with accuracy and clear reporting.</p>
                </div>
                <div className="desktop-marquee">
                    <div className="marquee-wrapper">
                        <div className="marquee-content">
                            {toolsList.map((tool, index) => (
                                <div key={index} className="tool-badge">{tool}</div>
                            ))}
                        </div>
                        <div className="marquee-content" aria-hidden="true">
                            {toolsList.map((tool, index) => (
                                <div key={`dup-${index}`} className="tool-badge">{tool}</div>
                            ))}
                        </div>
                    </div>
                </div>

                <div className="mobile-marquee">
                    <div className="marquee-wrapper">
                        <div className="marquee-content">
                            {toolsList1.map((tool, index) => (
                                <div key={index} className="tool-badge">{tool}</div>
                            ))}
                        </div>
                        <div className="marquee-content" aria-hidden="true">
                            {toolsList1.map((tool, index) => (
                                <div key={`dup-${index}`} className="tool-badge">{tool}</div>
                            ))}
                        </div>
                    </div>
                    <div className="marquee-wrapper">
                        <div className="marquee-content reverse">
                            {toolsList2.map((tool, index) => (
                                <div key={index} className="tool-badge">{tool}</div>
                            ))}
                        </div>
                        <div className="marquee-content reverse" aria-hidden="true">
                            {toolsList2.map((tool, index) => (
                                <div key={`dup-${index}`} className="tool-badge">{tool}</div>
                            ))}
                        </div>
                    </div>
                </div>
            </div>

            {/* CTA */}
            <section className="home-cta" ref={ctaRef} aria-label="Contact Digital Marketer in Calicut">
                <h2>Let’s Grow Your Business with Advanced Digital Marketing</h2>
                <p style={{ maxWidth: '600px', margin: '1rem auto 2rem auto' }}>Whether you are in Calicut, Kerala, across India, or worldwide—if you are searching for a reliable freelance digital marketer and SEO expert who delivers real business growth, let’s start a conversation.</p>
                <div className="hero-cta-group">
                    <Link href="/contact" className="btn btn-primary">Contact For SEO & Marketing</Link>
                </div>
            </section>

        </div>
    );
};

export default Home;
