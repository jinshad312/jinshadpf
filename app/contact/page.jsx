import ContactClient from './ContactClient';

export const metadata = {
    title: 'Contact Digital Marketer & SEO Expert',
    description: 'Looking for a freelance digital marketer in Calicut, Kerala? Contact me to discuss SEO strategy, Google Ads management, or web design services.',
    alternates: {
        canonical: 'https://jinshadk.com/contact/',
    },
    other: {
        'script:ld+json': JSON.stringify({
            "@context": "https://schema.org",
            "@type": "ContactPage",
            "name": "Contact Freelance Digital Marketer in Calicut",
            "description": "Get in touch to discuss SEO strategy, Google Ads management, or web design services.",
            "url": "https://jinshadk.com/contact/",
            "mainEntity": {
                "@type": "Person",
                "name": "Muhammed Jinshad K",
                "email": "jinshad312@gmail.com",
                "telephone": "+91812963",
                "address": {
                    "@type": "PostalAddress",
                    "addressLocality": "Calicut",
                    "addressRegion": "Kerala",
                    "addressCountry": "IN"
                }
            }
        })
    }
};

export default function Contact() {
    return <ContactClient />;
}
