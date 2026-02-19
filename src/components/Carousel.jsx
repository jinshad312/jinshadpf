import { useEffect, useMemo, useRef, useState } from 'react';
import { motion, useMotionValue, useTransform } from 'motion/react';
import './Carousel.css';

// Default items if none provided
const DEFAULT_ITEMS = [
    { title: 'Item 1', description: 'Description 1', id: 1 },
    { title: 'Item 2', description: 'Description 2', id: 2 },
    { title: 'Item 3', description: 'Description 3', id: 3 },
];

const DRAG_BUFFER = 10;
const VELOCITY_THRESHOLD = 500;
const GAP = 16;
const SPRING_OPTIONS = { type: 'spring', stiffness: 300, damping: 30 };

function CarouselItem({ item, index, itemWidth, trackItemOffset, x, transition }) {
    const range = [-(index + 1) * trackItemOffset, -index * trackItemOffset, -(index - 1) * trackItemOffset];
    const outputRange = [20, 0, -20]; // Rotate slightly
    const rotateY = useTransform(x, range, outputRange, { clamp: false });
    const opacityRange = [0.5, 1, 0.5];
    const opacity = useTransform(x, range, opacityRange);

    return (
        <motion.div
            key={`${item?.id ?? index}-${index}`}
            className={`carousel-item`}
            style={{
                width: itemWidth,
                height: '100%',
                rotateY: rotateY,
                opacity: opacity,
            }}
            transition={transition}
        >
            <div className={`carousel-item-header`}>
                <span className="carousel-icon-container">{item.icon || <span>•</span>}</span>
            </div>
            <div className="carousel-item-content">
                <div className="carousel-item-title">{item.title}</div>
                <p className="carousel-item-description">{item.description}</p>
            </div>
        </motion.div>
    );
}

export default function Carousel({
    items = DEFAULT_ITEMS,
    baseWidth = 350,
    autoplay = false,
    autoplayDelay = 3000,
    pauseOnHover = false,
    loop = false
}) {
    const containerPadding = 16;
    const itemWidth = baseWidth - containerPadding * 2;
    const trackItemOffset = itemWidth + GAP;
    const itemsForRender = useMemo(() => {
        if (!loop) return items;
        if (items.length === 0) return [];
        // Clone for infinite loop
        return [items[items.length - 1], ...items, items[0]];
    }, [items, loop]);

    const [position, setPosition] = useState(loop ? 1 : 0);
    const x = useMotionValue(0);
    const [isHovered, setIsHovered] = useState(false);
    const [isJumping, setIsJumping] = useState(false);
    const [isAnimating, setIsAnimating] = useState(false);

    const containerRef = useRef(null);

    // Pause on hover
    useEffect(() => {
        if (pauseOnHover && containerRef.current) {
            const container = containerRef.current;
            const handleMouseEnter = () => setIsHovered(true);
            const handleMouseLeave = () => setIsHovered(false);
            container.addEventListener('mouseenter', handleMouseEnter);
            container.addEventListener('mouseleave', handleMouseLeave);
            return () => {
                container.removeEventListener('mouseenter', handleMouseEnter);
                container.removeEventListener('mouseleave', handleMouseLeave);
            };
        }
    }, [pauseOnHover]);

    // Autoplay functionality
    useEffect(() => {
        if (!autoplay || itemsForRender.length <= 1) return undefined;
        if (pauseOnHover && isHovered) return undefined;

        const timer = setInterval(() => {
            setPosition(prev => {
                if (!loop && prev >= itemsForRender.length - 1) return 0;
                return prev + 1;
            });
        }, autoplayDelay);

        return () => clearInterval(timer);
    }, [autoplay, autoplayDelay, isHovered, pauseOnHover, itemsForRender.length, loop]);

    // Sync x with position
    useEffect(() => {
        const startingPosition = loop ? 1 : 0;
        // Only set initial if needed, usually we animate
        if (!isAnimating && position !== undefined) {
            x.set(-position * trackItemOffset);
        }
    }, [items.length, loop, trackItemOffset, x, position]); // This effect might conflict with animation controls if not careful

    // Handle Loop Jump
    const handleAnimationComplete = () => {
        setIsAnimating(false);
        if (!loop) return;

        if (position === itemsForRender.length - 1) {
            setIsJumping(true);
            const target = 1;
            setPosition(target);
            x.set(-target * trackItemOffset);
            requestAnimationFrame(() => setIsJumping(false));
        } else if (position === 0) {
            setIsJumping(true);
            const target = itemsForRender.length - 2;
            setPosition(target);
            x.set(-target * trackItemOffset);
            requestAnimationFrame(() => setIsJumping(false));
        }
    };

    const effectiveTransition = isJumping ? { duration: 0 } : SPRING_OPTIONS;

    return (
        <div
            ref={containerRef}
            className={`carousel-container`}
            style={{
                width: `${baseWidth}px`,
                maxWidth: '100%'
            }}
        >
            <motion.div
                className="carousel-track"
                drag="x"
                dragConstraints={{
                    left: -trackItemOffset * (itemsForRender.length - 1),
                    right: 0
                }}
                style={{
                    width: itemWidth,
                    gap: `${GAP}px`,
                    x
                }}
                onDragEnd={(e, { offset, velocity }) => {
                    const swipe = Math.abs(offset.x) > DRAG_BUFFER && Math.abs(velocity.x) > VELOCITY_THRESHOLD;
                    if (swipe) {
                        const direction = velocity.x < 0 ? 1 : -1;
                        setPosition(p => Math.max(0, Math.min(itemsForRender.length - 1, p + direction)));
                    }
                }}
                animate={{ x: -(position * trackItemOffset) }}
                transition={effectiveTransition}
                onAnimationStart={() => setIsAnimating(true)}
                onAnimationComplete={handleAnimationComplete}
            >
                {itemsForRender.map((item, index) => (
                    <CarouselItem
                        key={`${item?.id ?? index}-${index}`}
                        item={item}
                        index={index}
                        itemWidth={itemWidth}
                        trackItemOffset={trackItemOffset}
                        x={x}
                        transition={effectiveTransition}
                    />
                ))}
            </motion.div>
            <div className={`carousel-indicators-container`}>
                <div className="carousel-indicators">
                    {items.map((_, index) => {
                        // Calculate active index for indicator (handling loop clones)
                        let active = position;
                        if (loop) {
                            active = position - 1;
                            if (active < 0) active = items.length - 1;
                            if (active >= items.length) active = 0;
                        }
                        const isActive = active === index;

                        return (
                            <motion.div
                                key={index}
                                className={`carousel-indicator ${isActive ? 'active' : 'inactive'}`}
                                animate={{
                                    scale: isActive ? 1.2 : 1
                                }}
                                onClick={() => setPosition(loop ? index + 1 : index)}
                                transition={{ duration: 0.15 }}
                            />
                        )
                    })}
                </div>
            </div>
        </div>
    );
}
