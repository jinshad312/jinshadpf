import { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { FaCheck } from 'react-icons/fa';
import './Services.css';

gsap.registerPlugin(ScrollTrigger);

const servicesData = [
    {
        title: 'SEO Strategy & Execution',
        description: 'For businesses that want long-term organic growth. I build a comprehensive strategy that targets high-intent keywords and technical excellence.',
        includes: ['Audit & Competitor Analysis', 'Keyword Research', 'On-Page Optimization', 'Content Strategy'],
        result: 'Consistent high-intent traffic.',
        visual: 'SEO Graph'
    },
    {
        title: 'Business Website Development',
        description: 'Your website is your best salesperson. I build fast, modern, and SEO-ready websites that reflect your brand and drive conversions.',
        includes: ['Custom Design', 'Responsive Development', 'CMS Integration', 'Speed Optimization'],
        result: 'Strong brand presence and higher conversions.',
        visual: 'Website Mockup'
    },
    {
        title: 'Landing Pages for Ads',
        description: 'Stop wasting ad spend on generic pages. I design and build focused landing pages specifically engineered to turn clicks into leads.',
        includes: ['Conversion Copywriting', 'A/B Testing Ready', 'Fast Loading', 'Mobile First'],
        result: 'Lower cost per lead and better ROI.',
        visual: 'Landing Page'
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

            <div className="services-hero">
                <h1>Transform Your Online Presence</h1>
                <p>Comprehensive digital solutions designed for growth.</p>
            </div>

            <div className="section services-list">
                {servicesData.map((service, index) => (
                    <div
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
                                <h4>Key Result</h4>
                                <p>{service.result}</p>
                            </div>
                        </div>

                        <div className="service-visual">
                            {service.visual}
                        </div>

                    </div>
                ))}
            </div>

        </div>
    );
};

export default Services;
