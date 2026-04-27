"use client";

import { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import '../../src/_pages/Projects.css';

gsap.registerPlugin(ScrollTrigger);

const projectsData = [
    {
        client: 'High-Converting Web Design',
        industry: 'Various Industries',
        title: 'Designing Landing Pages That Sell',
        challenge: 'Many businesses drive traffic to their websites but struggle to get visitors to take action or convert into leads.',
        strategy: 'As a web designer in Calicut, I build simple, fast, and attractive landing pages that guide visitors exactly where they need to go without any confusing distractions.',
        execution: 'Created custom pages matching the brand style, optimized for mobile UI/UX, and convinced people to buy using targeted conversion copywriting.',
        tools: ['React', 'Next.js', 'Framer Motion', 'Figma'],
        impact: 'These focused pages have helped businesses double their sales overnight, significantly lowering their cost-per-acquisition (CPA).',
        visual: 'Landing Page Visual'
    },
    {
        client: 'E-commerce SEO Growth',
        industry: 'Retail & Fashion',
        title: 'Scaling Organic Traffic',
        challenge: 'Online stores were confusing to navigate, slow to load, and completely invisible on Google when Indian customers searched for products.',
        strategy: 'I implemented a deep SEO strategy to reorganize the entire store, optimize site speed, and write product descriptions that target high-volume search queries.',
        execution: 'Improved the website Core Web Vitals, fixed indexing issues, and deployed a robust SEO strategy to consistently bring in high-intent visitors.',
        tools: ['Shopify', 'SEO Strategy', 'Google Search Console', 'Web Analytics'],
        impact: 'This completely transformed their business. They now get 3 times as much organic traffic from Google every month, driving consistent daily sales.',
        visual: 'E-commerce Dashboard'
    },
    {
        client: 'Meta Ads & Google Ads Management',
        industry: 'Service Businesses',
        title: 'PPC Ads That Bring Real Customers',
        challenge: 'Businesses were spending heavily on Facebook and Instagram ads but getting no real customers or useful leads in return.',
        strategy: 'I focus on performance marketing in India. Instead of just chasing "likes", the goal is rigorous hyper-targeting of audiences who actively need the service.',
        execution: 'Designed eye-catching ad creatives, wrote compelling A/B tested ad copy, and carefully targeted people based on local search intent and demographics.',
        tools: ['Meta Ads Manager', 'Google Ads', 'Ad Copywriting', 'Conversion Tracking'],
        impact: 'By fixing their advertising strategy, the cost to acquire a new customer dropped by 50%. They now enjoy a predictable, profitable flow of new leads.',
        visual: 'Ad Performance Chart'
    }
];

const Projects = () => {
    const containerRef = useRef(null);
    const studiesRef = useRef([]);

    useEffect(() => {
        const ctx = gsap.context(() => {
            // Hero
            gsap.from('.projects-hero > *', {
                y: 30,
                opacity: 0,
                duration: 1,
                stagger: 0.1,
                ease: 'power3.out'
            });

            // Case Studies
            studiesRef.current.forEach((study, index) => {
                if (!study) return;

                const visual = study.querySelector('.project-visual-large');
                const info = study.querySelector('.case-study-info');

                gsap.from(visual, {
                    scrollTrigger: {
                        trigger: study,
                        start: 'top 80%'
                    },
                    scale: 0.95,
                    opacity: 0,
                    duration: 1,
                    ease: 'power3.out'
                });

                // Parallax Visual
                gsap.to(visual, {
                    yPercent: -15,
                    ease: 'none',
                    scrollTrigger: {
                        trigger: study,
                        start: 'top bottom',
                        end: 'bottom top',
                        scrub: true
                    }
                });

                gsap.from(info, {
                    scrollTrigger: {
                        trigger: study,
                        start: 'top 70%'
                    },
                    y: 50,
                    opacity: 0,
                    duration: 0.8,
                    delay: 0.2,
                    ease: 'power3.out'
                });
            });

        }, containerRef);

        return () => ctx.revert();
    }, []);

    return (
        <div className="page-container projects-container" ref={containerRef}>

            <header className="projects-hero">
                <h1>Selected Work</h1>
                <p>Real challenges. Strategic execution. Measurable growth.</p>
            </header>

            <div className="section case-studies-list">
                {projectsData.map((project, index) => (
                    <article key={index} className="case-study" ref={el => studiesRef.current[index] = el}>

                        <div className="project-visual-large">
                            {project.visual}
                        </div>

                        <div className="case-study-info">
                            <span className="client-meta">{project.client} • {project.industry}</span>
                            <h2>{project.title}</h2>

                            <div className="case-study-grid">
                                <div className="study-details">
                                    <div className="challenge-box">
                                        <h3>The Challenge</h3>
                                        <p>{project.challenge}</p>
                                    </div>
                                    <div className="strategy-box">
                                        <h3>The Strategy</h3>
                                        <p>{project.strategy}</p>
                                    </div>
                                    <div className="execution-box">
                                        <h3>Execution</h3>
                                        <p>{project.execution}</p>
                                    </div>

                                    <div className="tools-used">
                                        {project.tools.map((tool, i) => (
                                            <span key={i} className="tool-badge">{tool}</span>
                                        ))}
                                    </div>
                                </div>

                                <div className="impact-box">
                                    <h3>The Outcome</h3>
                                    <div className="impact-text">
                                        <p>{project.impact}</p>
                                    </div>
                                </div>
                            </div>
                        </div>

                    </article>
                ))}
            </div>

        </div>
    );
};

export default Projects;
