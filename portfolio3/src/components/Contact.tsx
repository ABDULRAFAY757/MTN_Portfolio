import React, { useState } from 'react';
import { profile } from '../data/profile';
import { contactConfig } from '../config/emailjs';
import './Contact.css';

const Contact: React.FC = () => {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        subject: '',
        message: ''
    });
    const [submitted, setSubmitted] = useState(false);
    const [isSubmitting, setIsSubmitting] = useState(false);
    const [error, setError] = useState('');

    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
        const { name, value } = e.target;
        setFormData(prev => ({ ...prev, [name]: value }));
    };

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        setIsSubmitting(true);
        setError('');

        try {
            const response = await fetch('https://api.web3forms.com/submit', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({
                    access_key: contactConfig.accessKey,
                    name: formData.name,
                    email: formData.email,
                    subject: formData.subject,
                    message: formData.message,
                }),
            });

            const result = await response.json();
            if (result.success) {
                setSubmitted(true);
            } else {
                setError('Failed to send message. Please try emailing directly.');
            }
        } catch (err) {
            setError('Failed to send message. Please try emailing directly.');
            console.error('Contact form error:', err);
        } finally {
            setIsSubmitting(false);
        }
    };

    return (
        <main className="contact-page">
            <section className="contact-hero">
                <div className="contact-hero__background">
                    <div className="contact-hero__gradient"></div>
                </div>
                <div className="contact-hero__container">
                    <span className="contact-hero__label">Get in Touch</span>
                    <h1 className="contact-hero__title">Let's Connect</h1>
                    <p className="contact-hero__subtitle">
                        Interested in research collaboration, academic consultation, or discussing
                        sustainable development initiatives? I'd love to hear from you.
                    </p>
                </div>
            </section>

            <section className="contact-content">
                <div className="contact-content__container">
                    <div className="contact-grid">
                        <div className="contact-info">
                            <h2 className="contact-info__title">Contact Information</h2>
                            <p className="contact-info__description">
                                Feel free to reach out through any of the following channels.
                            </p>

                            <div className="contact-info__list">
                                <div className="contact-info__item">
                                    <div className="contact-info__icon">
                                        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                                            <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"/>
                                            <polyline points="22,6 12,13 2,6"/>
                                        </svg>
                                    </div>
                                    <div className="contact-info__content">
                                        <span className="contact-info__label">Email</span>
                                        <a href={`mailto:${profile.contact.email}`} className="contact-info__value">
                                            {profile.contact.email}
                                        </a>
                                    </div>
                                </div>

                                <div className="contact-info__item">
                                    <div className="contact-info__icon">
                                        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                                            <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"/>
                                            <circle cx="12" cy="10" r="3"/>
                                        </svg>
                                    </div>
                                    <div className="contact-info__content">
                                        <span className="contact-info__label">Location</span>
                                        <span className="contact-info__value">{profile.contact.location}</span>
                                        <span className="contact-info__sublabel">Imam Mohammad Ibn Saud Islamic University</span>
                                    </div>
                                </div>
                            </div>

                            <div className="contact-profiles">
                                <h3 className="contact-profiles__title">Academic Profiles</h3>
                                <div className="contact-profiles__grid">
                                    <a href={profile.links.scholar} target="_blank" rel="noopener noreferrer" className="contact-profile-link">
                                        Google Scholar
                                    </a>
                                    <a href={profile.links.researchGate} target="_blank" rel="noopener noreferrer" className="contact-profile-link">
                                        ResearchGate
                                    </a>
                                    <a href={profile.links.scopus} target="_blank" rel="noopener noreferrer" className="contact-profile-link">
                                        Scopus
                                    </a>
                                    <a href={profile.links.orcid} target="_blank" rel="noopener noreferrer" className="contact-profile-link">
                                        ORCID
                                    </a>
                                </div>
                            </div>
                        </div>

                        <div className="contact-form-wrapper">
                            {submitted ? (
                                <div className="contact-success">
                                    <div className="contact-success__icon">
                                        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                                            <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"/>
                                            <polyline points="22 4 12 14.01 9 11.01"/>
                                        </svg>
                                    </div>
                                    <h3 className="contact-success__title">Message Sent!</h3>
                                    <p className="contact-success__text">
                                        Thank you for reaching out. I'll get back to you as soon as possible.
                                    </p>
                                    <button
                                        className="contact-success__btn"
                                        onClick={() => {
                                            setSubmitted(false);
                                            setFormData({ name: '', email: '', subject: '', message: '' });
                                        }}
                                    >
                                        Send Another Message
                                    </button>
                                </div>
                            ) : (
                                <form className="contact-form" onSubmit={handleSubmit}>
                                    <h2 className="contact-form__title">Send a Message</h2>

                                    {error && (
                                        <div className="contact-form__error">
                                            {error}
                                        </div>
                                    )}

                                    <div className="contact-form__row">
                                        <div className="contact-form__group">
                                            <label htmlFor="name" className="contact-form__label">Full Name</label>
                                            <input
                                                type="text"
                                                id="name"
                                                name="name"
                                                value={formData.name}
                                                onChange={handleChange}
                                                className="contact-form__input"
                                                placeholder="Your name"
                                                required
                                            />
                                        </div>
                                        <div className="contact-form__group">
                                            <label htmlFor="email" className="contact-form__label">Email Address</label>
                                            <input
                                                type="email"
                                                id="email"
                                                name="email"
                                                value={formData.email}
                                                onChange={handleChange}
                                                className="contact-form__input"
                                                placeholder="your@email.com"
                                                required
                                            />
                                        </div>
                                    </div>

                                    <div className="contact-form__group">
                                        <label htmlFor="subject" className="contact-form__label">Subject</label>
                                        <select
                                            id="subject"
                                            name="subject"
                                            value={formData.subject}
                                            onChange={handleChange}
                                            className="contact-form__select"
                                            required
                                        >
                                            <option value="">Select a subject</option>
                                            <option value="research">Research Collaboration</option>
                                            <option value="consultation">Academic Consultation</option>
                                            <option value="speaking">Speaking Invitation</option>
                                            <option value="general">General Inquiry</option>
                                        </select>
                                    </div>

                                    <div className="contact-form__group">
                                        <label htmlFor="message" className="contact-form__label">Message</label>
                                        <textarea
                                            id="message"
                                            name="message"
                                            value={formData.message}
                                            onChange={handleChange}
                                            className="contact-form__textarea"
                                            placeholder="Tell me about your inquiry..."
                                            rows={6}
                                            required
                                        />
                                    </div>

                                    <button type="submit" className="contact-form__submit" disabled={isSubmitting}>
                                        {isSubmitting ? (
                                            <>
                                                <span className="contact-form__spinner"></span>
                                                Sending...
                                            </>
                                        ) : (
                                            <>
                                                Send Message
                                                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" width="18" height="18">
                                                    <line x1="22" y1="2" x2="11" y2="13"/>
                                                    <polygon points="22 2 15 22 11 13 2 9 22 2"/>
                                                </svg>
                                            </>
                                        )}
                                    </button>
                                </form>
                            )}
                        </div>
                    </div>
                </div>
            </section>
        </main>
    );
};

export default Contact;
