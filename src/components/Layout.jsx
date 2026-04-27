"use client";

import PillNav from './PillNav';
import Footer from './Footer';
import { motion, AnimatePresence } from 'motion/react';
import { usePathname } from 'next/navigation';

// Use Next.js Image or raw path for the logo instead of Vite import
const logoUrl = '/logo.svg';

const navItems = [
    { label: 'Home', href: '/' },
    { label: 'About', href: '/about' },
    { label: 'Services', href: '/services' },
    { label: 'Projects', href: '/projects' },
    { label: 'Contact', href: '/contact' },
];

export default function ClientLayout({ children }) {
    const pathname = usePathname();

    return (
        <div className="app-layout">
            <PillNav
                logo={logoUrl}
                logoAlt="MJ Logo"
                items={navItems}
                cta={{ label: 'Book a Strategy Call', href: '/contact' }}
                baseColor="#f7ede8"
                pillColor="rgba(255, 122, 0, 0.15)"
                pillTextColor="#f7ede8"
                hoveredPillTextColor="#060300"
            />

            <main className="main-content">
                <AnimatePresence mode="wait">
                    <motion.div
                        key={pathname}
                        initial={{ opacity: 0, y: 15 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: -15 }}
                        transition={{ duration: 0.4, ease: "easeOut" }}
                    >
                        {children}
                    </motion.div>
                </AnimatePresence>
            </main>

            <Footer />
        </div>
    );
}
