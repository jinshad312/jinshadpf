import { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import './Projects.css';

gsap.registerPlugin(ScrollTrigger);

const projectsData = [
    {
        client: 'EcoStyle Apparel',
        industry: 'E-commerce / Fashion',
        title: 'Scaling Organic Revenue by 300%',
        challenge: 'Stagnant organic traffic and high reliance on paid ads. The site had technical debt and poor collection page structure.',
        strategy: 'Implemented a silo structure for improved crawl depth. Optimized 50+ collection pages with high-intent keywords. Fixed Core Web Vitals.',
        execution: 'Migrated to Shopify 2.0. Built a custom blog layout for content marketing.',
        tools: ['Shopify', 'Ahrefs', 'GSC', 'Liquid'],
        results: [
            { metric: 'Organic Traffic', value: '+300%' },
            { metric: 'Revenue from SEO', value: '3x' },
            { metric: 'Keyword Rankings', value: 'Top 3 for 50+ terms' }
        ],
        visual: 'EcoStyle Dashboard'
    },
    {
        client: 'Urban Realty Group',
        industry: 'Real Estate',
        title: 'Dominating Local Search in Competitive Market',
        challenge: 'Zero local visibility. Website was not mobile-friendly and lacked location-specific landing pages.',
        strategy: 'Local SEO campaign focusing on GMB optimization and creating 20+ neighborhood guides. implemented schema markup for listings.',
        execution: 'Redesigned site on Next.js for speed. Automated lead notification via Zapier.',
        tools: ['Next.js', 'Sanity CMS', 'Zapier', 'BrightLocal'],
        results: [
            { metric: 'Local Pack Rankings', value: '#1 for 15 areas' },
            { metric: 'Inbound Leads', value: '+200%' },
            { metric: 'Page Speed', value: '98/100' }
        ],
        visual: 'Realty Map Visual'
    },
    {
        client: 'SaaS Flow',
        industry: 'B2B Software',
        title: 'From 0 to 10k Monthly Visitors',
        challenge: 'New brand with no authority. Needed to educate the market and capture bottom-funnel demand.',
        strategy: 'Content-led SEO strategy. Published 40+ high-quality technical articles. Built free tools as lead magnets.',
        execution: 'Developed calculator tools in React. Set up HubSpot automation for lead nurturing.',
        tools: ['React', 'HubSpot', 'SEMrush', 'Figma'],
        results: [
            { metric: 'Monthly Traffic', value: '0 -> 10k' },
            { metric: 'Domain Authority', value: 'DA 0 -> DA 35' },
            { metric: 'Signups', value: '500+ / mo' }
        ],
        visual: 'Growth Chart'
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

            <div className="projects-hero">
                <h1>Selected Work</h1>
                <p>Real challenges. Strategic execution. Measurable growth.</p>
            </div>

            <div className="section case-studies-list">
                {projectsData.map((project, index) => (
                    <div key={index} className="case-study" ref={el => studiesRef.current[index] = el}>

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

                                <div className="results-box">
                                    <h3>Key Results</h3>
                                    <div className="results-list">
                                        {project.results.map((res, i) => (
                                            <div key={i} className="result-metric">
                                                <span>{res.metric}</span>
                                                <span>{res.value}</span>
                                            </div>
                                        ))}
                                    </div>
                                </div>
                            </div>
                        </div>

                    </div>
                ))}
            </div>

        </div>
    );
};

export default Projects;
