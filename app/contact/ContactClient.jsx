"use client";

import { useEffect, useRef, useState } from 'react';
import { gsap } from 'gsap';
import '../../src/_pages/Contact.css';

const Contact = () => {
    const containerRef = useRef(null);
    const [isSubmitting, setIsSubmitting] = useState(false);

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
                y: 30,
                opacity: 0,
                duration: 1,
                delay: 0.3,
                ease: 'power3.out',
                clearProps: 'all'
            });

        }, containerRef);
        return () => ctx.revert();
    }, []);

    const handleSubmit = (e) => {
        e.preventDefault();

        const form = e.target;
        const formData = new FormData(form);

        // Replace this URL with your deployed Google Apps Script Web App URL
        const scriptURL = 'https://script.google.com/macros/s/AKfycbxK5CLgxwzsJi9qaPoQgdz7DZ628EqaIIWRgBDAojuzmsWNkkq62HQNNr5ApEvH9-b1jw/exec';

        if (scriptURL === 'YOUR_GOOGLE_SCRIPT_WEB_APP_URL') {
            alert('Setup Required: Please replace YOUR_GOOGLE_SCRIPT_WEB_APP_URL with your actual script URL in Contact.jsx');
            return;
        }

        setIsSubmitting(true);

        // Send POST request to Google Apps Script
        fetch(scriptURL, { method: 'POST', body: formData })
            .then(response => {
                alert('Thank you for your message! I will be in touch shortly.');
                form.reset();
                setIsSubmitting(false);
            })
            .catch(error => {
                console.error('Error!', error.message);
                alert('There was an error submitting the form. Please try again later.');
                setIsSubmitting(false);
            });
    };

    return (
        <div className="page-container contact-wrapper" ref={containerRef}>
            <div className="contact-content">

                <div className="contact-left">
                    <h1>Let's build your growth system.</h1>
                    <p style={{ color: '#ccc', marginBottom: '2rem', maxWidth: '400px' }}>
                        If you are looking for an experienced freelance digital marketer and SEO expert in Calicut to handle your website and marketing, you are in the right place.
                    </p>

                    <address className="contact-details" style={{ fontStyle: 'normal' }}>
                        <div className="contact-item">
                            <h3>Email</h3>
                            <p><a href="mailto:jinshad312@gmail.com">jinshad312@gmail.com</a></p>
                        </div>
                        <div className="contact-item">
                            <h3>Phone</h3>
                            <p><a href="tel:+918129632798">+91 8129632798</a></p>
                        </div>
                        <div className="contact-item">
                            <h3>WhatsApp</h3>
                            <p><a href="https://wa.me/918129632798?text=Hi%20Jinshad%2C%20I%20am%20interested%20in%20your%20services" target="_blank" rel="noopener noreferrer">Chat on WhatsApp</a></p>
                        </div>
                        <div className="contact-item">
                            <h3>Location</h3>
                            <p>Calicut, Kerala, India (Serving Globally)</p>
                        </div>
                    </address>
                </div>

                <div className="contact-right">
                    <p className="form-header">Currently accepting a limited number of projects.</p>

                    <form className="contact-form" onSubmit={handleSubmit}>
                        <div className="form-group">
                            <label htmlFor="name">Name</label>
                            <input type="text" id="name" name="name" required placeholder="your name" />
                        </div>

                        <div className="form-group">
                            <label htmlFor="email">Email</label>
                            <input type="email" id="email" name="email" required placeholder="your mail id" />
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
                                <option value="10k-25k">₹10k – ₹25k</option>
                                <option value="25k-50k">₹25k – ₹50k</option>
                                <option value="50k-1L">₹50k – ₹1L</option>
                                <option value="1L+">₹1L+</option>
                            </select>
                        </div>

                        <div className="form-group">
                            <label htmlFor="message">Message</label>
                            <textarea id="message" name="message" required placeholder="Tell me about your project goals..." />
                        </div>

                        <button type="submit" className="submit-btn" disabled={isSubmitting}>
                            {isSubmitting ? 'Sending...' : 'Send Message'}
                        </button>
                    </form>
                </div>

            </div>
        </div>
    );
};

export default Contact;
