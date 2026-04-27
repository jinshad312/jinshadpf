import ServicesClient from './ServicesClient';

export const metadata = {
    title: 'Digital Marketing & SEO Services Calicut',
    description: 'Professional digital marketing services in Calicut. Specializing in SEO, Google Ads management, social media marketing, & high-converting web design.',
    alternates: {
        canonical: 'https://jinshadk.com/services/',
    },
    other: {
        'script:ld+json': JSON.stringify({
            "@context": "https://schema.org",
            "@type": "ItemList",
            "name": "Digital Marketing Services in Calicut by Muhammed Jinshad K",
            "description": "Professional digital marketing services including SEO, Google Ads, social media marketing, and web design.",
            "url": "https://jinshadk.com/services/",
            "numberOfItems": 5,
            "itemListElement": [
                {
                    "@type": "Service",
                    "position": 1,
                    "name": "SEO Services Calicut",
                    "description": "Comprehensive SEO strategy targeting high-intent keywords and technical excellence for long-term organic growth.",
                    "provider": { "@type": "Person", "name": "Muhammed Jinshad K" }
                },
                {
                    "@type": "Service",
                    "position": 2,
                    "name": "Web Design Services",
                    "description": "Fast, modern, and SEO-ready websites designed to convert local and national audiences.",
                    "provider": { "@type": "Person", "name": "Muhammed Jinshad K" }
                },
                {
                    "@type": "Service",
                    "position": 3,
                    "name": "Landing Pages for Ads",
                    "description": "Focused landing pages specifically engineered to turn clicks into leads.",
                    "provider": { "@type": "Person", "name": "Muhammed Jinshad K" }
                },
                {
                    "@type": "Service",
                    "position": 4,
                    "name": "Marketing Automation",
                    "description": "Automated lead capture and nurturing systems that save time and increase conversions.",
                    "provider": { "@type": "Person", "name": "Muhammed Jinshad K" }
                },
                {
                    "@type": "Service",
                    "position": 5,
                    "name": "Technical SEO",
                    "description": "Fix crawlability, indexing, and speed issues preventing your site from ranking.",
                    "provider": { "@type": "Person", "name": "Muhammed Jinshad K" }
                }
            ]
        })
    }
};

export default function Services() {
    return <ServicesClient />;
}
