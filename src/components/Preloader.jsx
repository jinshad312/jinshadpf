"use client";

import { useEffect, useRef, useState } from 'react';
import { gsap } from 'gsap';

export default function Preloader() {
    const loaderRef = useRef(null);
    const logoRef = useRef(null);
    const [isDone, setIsDone] = useState(false);

    useEffect(() => {
        const tl = gsap.timeline({
            onComplete: () => setIsDone(true)
        });

        tl.fromTo(logoRef.current, 
            { opacity: 0, scale: 0.8 }, 
            { opacity: 1, scale: 1, duration: 0.7, ease: "power3.out" }
        )
        .to(logoRef.current, { opacity: 0, scale: 1.05, duration: 0.4, ease: "power2.in" }, "+=0.2")
        .to(loaderRef.current, { yPercent: -100, duration: 0.6, ease: "power4.inOut" });

        return () => tl.kill();
    }, []);

    if (isDone) return null;

    return (
        <div 
            ref={loaderRef}
            style={{
                position: 'fixed',
                top: 0,
                left: 0,
                width: '100vw',
                height: '100vh',
                backgroundColor: '#050505',
                zIndex: 9999,
                display: 'flex',
                justifyContent: 'center',
                alignItems: 'center',
            }}
        >
            <div 
                ref={logoRef}
                style={{
                    fontSize: '2.5rem',
                    fontWeight: '800',
                    color: '#fff',
                    letterSpacing: '2px',
                    fontFamily: 'var(--font-poppins), sans-serif',
                }}
            >
                MJ
                <span style={{ color: '#ff5500' }}>.</span>
            </div>
        </div>
    );
}
