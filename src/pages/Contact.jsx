import { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import './Contact.css';

const Contact = () => {
    const containerRef = useRef(null);

    useEffect(() => {
        const ctx = gsap.context(() => {
            gsap.from('.contact-left > *', {
                x: -50,
                opacity: 0,
                duration: 1,
                stagger: 0.2,
                ease: 'power3.out'
            });

            gsap.from('.contact-right', {
                x: 50,
                opacity: 0,
                duration: 1,
                delay: 0.3,
                ease: 'power3.out'
            });

        }, containerRef);
        return () => ctx.revert();
    }, []);

    const handleSubmit = (e) => {
        e.preventDefault();
        // Handle form submission logic here
        alert('Thank you for your message! I will be in touch shortly.');
    };

    return (
        <div className="page-container contact-wrapper" ref={containerRef}>
            <div className="contact-content">

                <div className="contact-left">
                    <h1>Let’s build your growth system.</h1>

                    <div className="contact-details">
                        <div className="contact-item">
                            <h3>Email</h3>
                            <p>jinshad@example.com</p>
                        </div>
                        <div className="contact-item">
                            <h3>Phone</h3>
                            <p>+91 98765 43210</p>
                        </div>
                        <div className="contact-item">
                            <h3>Location</h3>
                            <p>Kerala, India</p>
                        </div>
                    </div>
                </div>

                <div className="contact-right">
                    <p className="form-header">Currently accepting a limited number of projects.</p>

                    <form className="contact-form" onSubmit={handleSubmit}>
                        <div className="form-group">
                            <label htmlFor="name">Name</label>
                            <input type="text" id="name" name="name" required placeholder="John Doe" />
                        </div>

                        <div className="form-group">
                            <label htmlFor="email">Email</label>
                            <input type="email" id="email" name="email" required placeholder="john@company.com" />
                        </div>

                        <div className="form-group">
                            <label htmlFor="project-type">Project Type</label>
                            <select id="project-type" name="projectType">
                                <option value="seo">SEO Strategy</option>
                                <option value="website">Website Development</option>
                                <option value="landing-page">Landing Page</option>
                                <option value="automation">Marketing Automation</option>
                                <option value="growth">Full Growth Strategy</option>
                            </select>
                        </div>

                        <div className="form-group">
                            <label htmlFor="budget">Budget</label>
                            <select id="budget" name="budget">
                                <option value="25k-50k">₹25k – ₹50k</option>
                                <option value="50k-1L">₹50k – ₹1L</option>
                                <option value="1L+">₹1L+</option>
                            </select>
                        </div>

                        <div className="form-group">
                            <label htmlFor="message">Message</label>
                            <textarea id="message" name="message" required placeholder="Tell me about your project goals..." />
                        </div>

                        <button type="submit" className="submit-btn">Send Message</button>
                    </form>
                </div>

            </div>
        </div>
    );
};

export default Contact;
