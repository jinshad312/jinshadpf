"use client";

import { useEffect, useRef, useState } from 'react';
import { usePathname } from 'next/navigation';
import Link from 'next/link';
import { gsap } from 'gsap';
import './PillNav.css';

const PillNav = ({
    logo,
    logoAlt = 'Logo',
    items,
    cta, // Added cta prop
    className = '',
    ease = 'power3.easeOut',
    initialLoadAnimation = true
}) => {
    const pathname = usePathname();
    const activeHref = pathname;

    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
    const [isScrolled, setIsScrolled] = useState(false);
    const circleRefs = useRef([]);
    const tlRefs = useRef([]);
    const activeTweenRefs = useRef([]);
    const logoImgRef = useRef(null);
    const logoTweenRef = useRef(null);
    const hamburgerRef = useRef(null);
    const mobileMenuRef = useRef(null);
    const navItemsRef = useRef(null);
    const logoRef = useRef(null);

    useEffect(() => {
        const layout = () => {
            circleRefs.current.forEach(circle => {
                if (!circle || !circle.parentElement) return;

                const pill = circle.parentElement;

                // Use offsetWidth/Height to avoid transformed dimensions from scaleY
                const w = pill.offsetWidth;
                const h = pill.offsetHeight;

                if (!w || !h) return; // Prevent NaN for hidden elements

                const R = ((w * w) / 4 + h * h) / (2 * h);
                const D = Math.ceil(2 * R) + 2;
                const delta = Math.ceil(R - Math.sqrt(Math.max(0, R * R - (w * w) / 4))) + 1;
                const originY = D - delta;

                circle.style.width = `${D}px`;
                circle.style.height = `${D}px`;
                circle.style.bottom = `-${delta}px`;

                gsap.set(circle, {
                    xPercent: -50,
                    scale: 0,
                    transformOrigin: `50% ${originY}px`
                });

                const label = pill.querySelector('.pill-label');
                const white = pill.querySelector('.pill-label-hover');

                if (label) gsap.set(label, { y: 0 });
                if (white) gsap.set(white, { y: h + 12, opacity: 0 });

                const index = circleRefs.current.indexOf(circle);
                if (index === -1) return;

                tlRefs.current[index]?.kill();
                const tl = gsap.timeline({ paused: true });

                tl.to(circle, { scale: 1.2, xPercent: -50, duration: 0.6, ease, overwrite: 'auto' }, 0); // speed up

                if (label) {
                    tl.to(label, { y: -(h + 8), duration: 0.6, ease, overwrite: 'auto' }, 0);
                }

                if (white) {
                    gsap.set(white, { y: Math.ceil(h + 20), opacity: 0 });
                    tl.to(white, { y: 0, opacity: 1, duration: 0.6, ease, overwrite: 'auto' }, 0);
                }

                tlRefs.current[index] = tl;
            });
        };

        layout();
        const onResize = () => layout();
        window.addEventListener('resize', onResize);
        if (document.fonts?.ready) document.fonts.ready.then(layout).catch(() => { });

        // Initial animations
        const menu = mobileMenuRef.current;
        if (menu) gsap.set(menu, { visibility: 'hidden', opacity: 0, scaleY: 0.9 });

        if (initialLoadAnimation) {
            if (logoRef.current) {
                gsap.fromTo(logoRef.current, { scale: 0, opacity: 0 }, { scale: 1, opacity: 1, duration: 1, ease: 'elastic.out(1, 0.5)' });
            }
            if (navItemsRef.current) {
                gsap.fromTo(navItemsRef.current, { y: -20, opacity: 0 }, { y: 0, opacity: 1, duration: 0.8, delay: 0.2, ease });
            }
        }

        // Scroll Listener for Scrolled State
        const handleScroll = () => {
            if (window.scrollY > 50) {
                setIsScrolled(true);
            } else {
                setIsScrolled(false);
            }
        };
        window.addEventListener('scroll', handleScroll);
        
        return () => {
             window.removeEventListener('resize', onResize);
             window.removeEventListener('scroll', handleScroll);
        };
    }, [items, ease, initialLoadAnimation]);

    const handleEnter = i => {
        const tl = tlRefs.current[i];
        if (!tl) return;
        activeTweenRefs.current[i]?.kill();
        activeTweenRefs.current[i] = tl.tweenTo(tl.duration(), {
            duration: 0.3,
            ease,
            overwrite: 'auto'
        });
    };

    const handleLeave = i => {
        const tl = tlRefs.current[i];
        if (!tl) return;
        activeTweenRefs.current[i]?.kill();
        activeTweenRefs.current[i] = tl.tweenTo(0, {
            duration: 0.2,
            ease,
            overwrite: 'auto'
        });
    };

    const handleLogoEnter = () => {
        const img = logoImgRef.current;
        if (!img) return;
        logoTweenRef.current?.kill();
        gsap.set(img, { rotate: 0 });
        logoTweenRef.current = gsap.to(img, {
            rotate: 360,
            duration: 0.6,
            ease: 'back.out(1.7)',
            overwrite: 'auto'
        });
    };

    const toggleMobileMenu = () => {
        const newState = !isMobileMenuOpen;
        setIsMobileMenuOpen(newState);

        const hamburger = hamburgerRef.current;
        const menu = mobileMenuRef.current;

        if (hamburger) {
            const lines = hamburger.querySelectorAll('.hamburger-line');
            if (newState) {
                gsap.to(lines[0], { rotation: 45, y: 3, duration: 0.3, ease });
                gsap.to(lines[1], { rotation: -45, y: -3, duration: 0.3, ease });
            } else {
                gsap.to(lines[0], { rotation: 0, y: 0, duration: 0.3, ease });
                gsap.to(lines[1], { rotation: 0, y: 0, duration: 0.3, ease });
            }
        }

        if (menu) {
            if (newState) {
                gsap.set(menu, { visibility: 'visible' });
                gsap.fromTo(
                    menu,
                    { opacity: 0, y: 10, scaleY: 0.9 },
                    {
                        opacity: 1,
                        y: 0,
                        scaleY: 1,
                        duration: 0.4,
                        ease,
                        transformOrigin: 'top center'
                    }
                );
            } else {
                gsap.to(menu, {
                    opacity: 0,
                    y: 10,
                    scaleY: 0.9,
                    duration: 0.3,
                    ease,
                    transformOrigin: 'top center',
                    onComplete: () => {
                        gsap.set(menu, { visibility: 'hidden' });
                    }
                });
            }
        }
    };

    return (
        <div className="pill-nav-container">
            <nav className={`pill-nav ${className} ${isScrolled ? 'is-scrolled' : ''}`} aria-label="Primary">
                <Link
                    className="pill-logo"
                    href="/"
                    aria-label="Home"
                    onMouseEnter={handleLogoEnter}
                    ref={logoRef}
                >
                    {logo ? <img src={logo} alt={logoAlt} ref={logoImgRef} /> : <div ref={logoImgRef} style={{ fontWeight: 'bold', color: 'black' }}>MJ</div>}
                </Link>

                <div className="pill-nav-items desktop-only" ref={navItemsRef}>
                    <ul className="pill-list" role="menubar">
                        {items.map((item, i) => (
                            <li key={item.href || `item-${i}`} role="none">
                                <Link
                                    role="menuitem"
                                    href={item.href}
                                    className={`pill${activeHref === item.href ? ' is-active' : ''}`}
                                    onMouseEnter={() => handleEnter(i)}
                                    onMouseLeave={() => handleLeave(i)}
                                >
                                    <span
                                        className="hover-circle"
                                        aria-hidden="true"
                                        ref={el => { circleRefs.current[i] = el; }}
                                    />
                                    <span className="label-stack">
                                        <span className="pill-label">{item.label}</span>
                                        <span className="pill-label-hover" aria-hidden="true">
                                            {item.label}
                                        </span>
                                    </span>
                                </Link>
                            </li>
                        ))}
                    </ul>
                </div>

                <div className="pill-nav-right" style={{ display: 'flex', alignItems: 'center', gap: '1rem' }}>
                    {cta && (
                        <Link href={cta.href} className="btn btn-primary nav-cta desktop-only" style={{ padding: '0.6rem 1.2rem', fontSize: '0.9rem', whiteSpace: 'nowrap' }}>
                            {cta.label}
                        </Link>
                    )}
                    <button
                        className="mobile-menu-button mobile-only"
                        onClick={toggleMobileMenu}
                        aria-label="Toggle menu"
                        ref={hamburgerRef}
                    >
                        <span className="hamburger-line" />
                        <span className="hamburger-line" />
                    </button>
                </div>
            </nav>

            <div className="mobile-menu-popover mobile-only" ref={mobileMenuRef}>
                <ul className="mobile-menu-list">
                    {items.map((item, i) => {
                        const mIndex = i + items.length;
                        return (
                            <li key={item.href || `mobile-item-${i}`}>
                                <Link
                                    href={item.href}
                                    className={`pill mobile-pill${activeHref === item.href ? ' is-active' : ''}`}
                                    onMouseEnter={() => handleEnter(mIndex)}
                                    onMouseLeave={() => handleLeave(mIndex)}
                                    onClick={() => {
                                        setIsMobileMenuOpen(false);
                                        toggleMobileMenu(); // Close visual state
                                    }}
                                >
                                    <span
                                        className="hover-circle"
                                        aria-hidden="true"
                                        ref={el => { circleRefs.current[mIndex] = el; }}
                                    />
                                    <span className="label-stack">
                                        <span className="pill-label">{item.label}</span>
                                        <span className="pill-label-hover" aria-hidden="true">
                                            {item.label}
                                        </span>
                                    </span>
                                </Link>
                            </li>
                        );
                    })}
                </ul>
            </div>
        </div>
    );
};

export default PillNav;
