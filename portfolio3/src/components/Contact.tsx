import React, { useState } from 'react';
import { profile } from '../data/profile';
import './Contact.css';

const Contact: React.FC = () => {
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [message, setMessage] = useState('');
    const [submitted, setSubmitted] = useState(false);

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        // Here you would typically handle form submission, e.g., sending data to an API
        setSubmitted(true);
    };

    return (
        <div className="contact-container">
            <h2 className="section-title">Get In Touch</h2>

            <div className="contact-info">
                <div className="info-item">
                    <strong>Email:</strong> <a href={`mailto:${profile.contact.email}`}>{profile.contact.email}</a>
                </div>
                <div className="info-item">
                    <strong>Alt Email:</strong> <a href={`mailto:${profile.contact.altEmail}`}>{profile.contact.altEmail}</a>
                </div>
                <div className="info-item">
                    <strong>Phone:</strong> {profile.contact.phone}
                </div>
                <div className="info-item">
                    <strong>Location:</strong> {profile.contact.location}
                </div>
            </div>

            <h3>Send me a message</h3>
            {submitted ? (
                <p>Thank you for your message! I will get back to you soon.</p>
            ) : (
                <form onSubmit={handleSubmit}>
                    <div>
                        <label htmlFor="name">Name:</label>
                        <input
                            type="text"
                            id="name"
                            value={name}
                            onChange={(e) => setName(e.target.value)}
                            required
                        />
                    </div>
                    <div>
                        <label htmlFor="email">Email:</label>
                        <input
                            type="email"
                            id="email"
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                            required
                        />
                    </div>
                    <div>
                        <label htmlFor="message">Message:</label>
                        <textarea
                            id="message"
                            value={message}
                            onChange={(e) => setMessage(e.target.value)}
                            required
                        />
                    </div>
                    <button type="submit">Send Message</button>
                </form>
            )}
        </div>
    );
};

export default Contact;