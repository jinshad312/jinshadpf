import ProjectsClient from './ProjectsClient';

export const metadata = {
    title: 'Digital Marketing & SEO Portfolio',
    description: 'Explore my digital marketing portfolio. Case studies showcasing proven SEO optimization, Google Ads management, & web design projects across India.',
    alternates: {
        canonical: 'https://jinshadk.com/projects/',
    },
    other: {
        'script:ld+json': JSON.stringify({
            "@context": "https://schema.org",
            "@type": "CollectionPage",
            "name": "Digital Marketing & SEO Portfolio by Muhammed Jinshad K",
            "description": "Case studies showcasing business growth, SEO results, Google Ads, and web design projects.",
            "url": "https://jinshadk.com/projects/",
            "mainEntity": {
                "@type": "ItemList",
                "numberOfItems": 3,
                "itemListElement": [
                    {
                        "@type": "CreativeWork",
                        "position": 1,
                        "name": "High-Converting Landing Pages",
                        "description": "Designing focused landing pages that guide visitors to take action and increase sales."
                    },
                    {
                        "@type": "CreativeWork",
                        "position": 2,
                        "name": "E-commerce Growth",
                        "description": "Reorganizing online stores, improving speed, and implementing SEO strategies for 3x organic traffic."
                    },
                    {
                        "@type": "CreativeWork",
                        "position": 3,
                        "name": "Meta Ads Campaigns",
                        "description": "Facebook and Instagram advertising strategies that halved customer acquisition costs."
                    }
                ]
            }
        })
    }
};

export default function Projects() {
    return <ProjectsClient />;
}
