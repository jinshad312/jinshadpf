"use client";

import { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { FaCheck } from 'react-icons/fa';
import '../../src/_pages/Services.css';

gsap.registerPlugin(ScrollTrigger);

const servicesData = [
    {
        title: 'SEO Services Calicut',
        description: 'For businesses in Kerala and India that want long-term organic growth. As an SEO expert, I build comprehensive strategies targeting high-intent local and national keywords coupled with technical excellence.',
        includes: ['SEO Audit & Competitor Analysis', 'Local SEO Calicut', 'On-Page Optimization', 'Content Marketing Setup'],
        result: 'Consistent, high-intent website traffic.',
        visual: 'SEO Growth Graph'
    },
    {
        title: 'Web Design Services',
        description: 'Your website is your best 24/7 salesperson. As a web designer in Calicut, I build incredibly fast, modern, and SEO-ready websites designed specifically to convert visitors into clients.',
        includes: ['Custom UI/UX Design', 'Responsive Web Development', 'SEO-Friendly Structure', 'Speed & Performance Optimization'],
        result: 'Strong online brand presence and higher lead conversions.',
        visual: 'Web Design Mockup'
    },
    {
        title: 'Google Ads & Performance Marketing',
        description: 'Stop wasting ad spend. I am a Google Ads expert managing highly targeted PPC campaigns across India, engineered specifically to turn clicks into immediate, qualified leads.',
        includes: ['Google Ads Management', 'Meta Ads Management', 'Conversion Copywriting', 'Landing Page Optimization'],
        result: 'Lower cost per acquisition and maximized ROI.',
        visual: 'PPC Campaign Dashboard'
    },
    {
        title: 'Marketing Automation',
        description: 'Capture leads and nurture them automatically. I set up systems that save you time and ensure no lead falls through the cracks.',
        includes: ['Lead Capture Forms', 'Email Sequences', 'CRM Integration', 'Workflow Logic'],
        result: 'Time saved and higher conversion rates.',
        visual: 'Automation Flow'
    },
    {
        title: 'Technical SEO',
        description: 'The foundation of visibility. I fix crawlability, indexing, and speed issues that are preventing your site from ranking where it belongs.',
        includes: ['Core Web Vitals', 'Schema Markup', 'Crawl Budget', 'Indexing Fixes'],
        result: 'Higher rankings and better performance.',
        visual: 'Technical Audit'
    }
];

const Services = () => {
    const containerRef = useRef(null);
    const rowsRef = useRef([]);

    useEffect(() => {
        const ctx = gsap.context(() => {
            // Hero
            gsap.from('.services-hero > *', {
                y: 30,
                opacity: 0,
                duration: 1,
                stagger: 0.1,
                ease: 'power3.out'
            });

            // Rows
            rowsRef.current.forEach((row, index) => {
                if (!row) return;
                gsap.from(row.children, {
                    scrollTrigger: {
                        trigger: row,
                        start: 'top 80%'
                    },
                    y: 50,
                    opacity: 0,
                    duration: 0.8,
                    stagger: 0.2,
                    ease: 'power3.out'
                });
            });

        }, containerRef);

        return () => ctx.revert();
    }, []);

    return (
        <div className="page-container services-container" ref={containerRef}>

            <header className="services-hero">
                <h1>Transform Your Online Presence</h1>
                <p>Comprehensive digital solutions designed for growth.</p>
            </header>

            <div className="section services-list">
                {servicesData.map((service, index) => (
                    <article
                        key={index}
                        className={`service-row ${index % 2 !== 0 ? 'reversed' : ''}`}
                        ref={el => rowsRef.current[index] = el}
                    >

                        <div className="service-info">
                            <h2>{service.title}</h2>
                            <p className="service-desc">{service.description}</p>

                            <div className="service-details">
                                {service.includes.map((item, i) => (
                                    <div key={i} className="service-detail-item">
                                        <div style={{ minWidth: '20px' }}><FaCheck color="var(--accent-color)" /></div> <span>{item}</span>
                                    </div>
                                ))}
                            </div>

                            <div className="service-result">
                                <h3>Key Result</h3>
                                <p>{service.result}</p>
                            </div>
                        </div>

                        <div className="service-visual" aria-hidden="true">
                            {service.visual}
                        </div>

                    </article>
                ))}
            </div>

        </div>
    );
};

export default Services;
