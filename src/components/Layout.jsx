import { Outlet } from 'react-router-dom';
import PillNav from './PillNav';
import Antigravity from './Antigravity';
import Footer from './Footer';

const navItems = [
    { label: 'Home', href: '/' },
    { label: 'About', href: '/about' },
    { label: 'Services', href: '/services' },
    { label: 'Projects', href: '/projects' },
    { label: 'Contact', href: '/contact' },
];

const Layout = () => {
    return (
        <div className="app-layout">
            <Antigravity
                count={200}
                mouseEffect={true}
                color="#00ff41" /* Neon Green */
            />
            <PillNav
                logo={null /* Use text fallback for now */}
                items={navItems}
                baseColor="#ffffff"
                pillColor="rgba(255,255,255,0.1)"
                pillTextColor="#ffffff"
                hoveredPillTextColor="#000000"
            />

            <main className="main-content">
                <Outlet />
            </main>

            <Footer />
        </div>
    );
};

export default Layout;
