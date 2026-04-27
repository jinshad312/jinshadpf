import { Inter, Poppins } from 'next/font/google';
import '../src/styles/global.css';
import ClientLayout from '../src/components/Layout';
import SmoothScroll from '../src/components/SmoothScroll';
import Preloader from '../src/components/Preloader';

export const metadata = {
    metadataBase: new URL('https://jinshadk.com'),
    title: {
        default: 'SEO Expert & Digital Marketer Calicut | Jinshad K',
        template: '%s | Jinshad K',
    },
    description: 'Freelance digital marketer & SEO expert in Calicut. Grow your business with Google Ads, social media marketing & high-converting web design services.',
    keywords: [
        'freelance digital marketer calicut',
        'digital marketer in calicut',
        'seo expert calicut',
        'digital marketing services calicut',
        'web designer in calicut',
        'freelance digital marketer kerala',
        'best digital marketer in kerala',
        'digital marketing expert india',
        'seo expert india',
        'google ads expert india',
        'web design services'
    ],
    robots: {
        index: true,
        follow: true,
        googleBot: {
            index: true,
            follow: true,
            'max-video-preview': -1,
            'max-image-preview': 'large',
            'max-snippet': -1,
        },
    },
    openGraph: {
        title: 'SEO Expert & Digital Marketer Calicut | Jinshad K',
        description: 'Freelance digital marketer & SEO expert in Calicut. Grow your business with Google Ads, social media marketing & high-converting web design services.',
        url: 'https://jinshadk.com',
        siteName: 'Muhammed Jinshad K Portfolio',
        locale: 'en_IN',
        type: 'website',
    },
    twitter: {
        title: 'SEO Expert & Digital Marketer Calicut | Jinshad K',
        card: 'summary_large_image',
    },
    alternates: {
        canonical: 'https://jinshadk.com/',
    },
    // verification: {
    //     google: 'YOUR_GOOGLE_VERIFICATION_CODE',
    // },
    manifest: '/manifest.json',
    icons: {
        icon: '/logo.svg',
    },
};

const inter = Inter({ subsets: ['latin'], variable: '--font-inter', display: 'swap' });
const poppins = Poppins({ subsets: ['latin'], weight: ['400', '700'], variable: '--font-poppins', display: 'swap' });

export default function RootLayout({ children }) {
    return (
        <html lang="en" suppressHydrationWarning className={`${inter.variable} ${poppins.variable}`}>
            <head>
                <script async src="https://www.googletagmanager.com/gtag/js?id=G-F7HTTMHDSN"></script>
                <script
                    dangerouslySetInnerHTML={{
                        __html: `
                            window.dataLayer = window.dataLayer || [];
                            function gtag(){dataLayer.push(arguments);}
                            gtag('js', new Date());
                            gtag('config', 'G-F7HTTMHDSN');
                        `,
                    }}
                />
                <meta name="googlebot" content="index, follow" />
                <meta httpEquiv="X-Robots-Tag" content="index, follow" />
                <link rel="publisher" href="https://jinshadk.com/" />
                <script
                    type="application/ld+json"
                    dangerouslySetInnerHTML={{
                        __html: JSON.stringify({
                            "@context": "https://schema.org",
                                "@type": "Person",
                            "name": "Muhammed Jinshad K",
                            "url": "https://jinshadk.com/",
                            "jobTitle": "Freelance Digital Marketer & SEO Expert",
                            "description": "Muhammed Jinshad K is a freelance digital marketer and web designer in Calicut, Kerala. Specializing in SEO services, Google Ads management, social media marketing, and modern website design.",
                            "email": "jinshad312@gmail.com",
                            "telephone": "+918129632798",
                            "address": {
                                "@type": "PostalAddress",
                                "addressLocality": "Calicut",
                                "addressRegion": "Kerala",
                                "addressCountry": "IN"
                            },
                            "knowsAbout": [
                                "Search Engine Optimization",
                                "SEO Services Calicut",
                                "Performance Marketing",
                                "Google Ads Management",
                                "Social Media Marketing",
                                "Web Design Services",
                                "Digital Marketing Strategy"
                            ],
                            "sameAs": [
                                "https://www.linkedin.com/in/jinshadk/"
                            ]
                        })
                    }}
                />
            </head>
            <body suppressHydrationWarning>
                <Preloader />
                <SmoothScroll>
                    <ClientLayout>
                        {children}
                    </ClientLayout>
                </SmoothScroll>
            </body>
        </html>
    );
}
