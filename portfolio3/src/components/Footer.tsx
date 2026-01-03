import React from 'react';
import { profile } from '../data/profile';
import { Link } from 'react-router-dom';
import './Footer.css';

const Footer: React.FC = () => {
    const currentYear = new Date().getFullYear();

    const quickLinks = [
        { path: '/', label: 'Home' },
        { path: '/projects', label: 'Publications' },
        { path: '/services', label: 'Services' },
        { path: '/insights', label: 'Insights' },
        { path: '/contact', label: 'Contact' },
    ];

    const academicLinks = [
        { url: profile.links.scholar, label: 'Google Scholar', icon: 'scholar' },
        { url: profile.links.researchGate, label: 'ResearchGate', icon: 'researchgate' },
        { url: profile.links.scopus, label: 'Scopus', icon: 'scopus' },
        { url: profile.links.orcid, label: 'ORCID', icon: 'orcid' },
    ];

    return (
        <footer className="footer">
            {/* Main Footer Content */}
            <div className="footer__main">
                <div className="footer__container">
                    {/* Brand Section */}
                    <div className="footer__brand">
                        <Link to="/" className="footer__logo">
                            <span className="footer__logo-icon">MT</span>
                            <div className="footer__logo-text">
                                <span className="footer__name">{profile.name}</span>
                                <span className="footer__title">Associate Professor</span>
                            </div>
                        </Link>
                        <p className="footer__description">
                            Top 2% Scientist (Stanford Ranking) | Environmental Policy & Management Expert |
                            Driving sustainable development through rigorous, high-impact research.
                        </p>

                        {/* Academic Profile Links */}
                        <div className="footer__academic-links">
                            {academicLinks.map((link) => (
                                <a
                                    key={link.label}
                                    href={link.url}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="footer__academic-link"
                                    title={link.label}
                                >
                                    {link.label}
                                </a>
                            ))}
                        </div>
                    </div>

                    {/* Quick Links */}
                    <div className="footer__section">
                        <h4 className="footer__section-title">Quick Links</h4>
                        <ul className="footer__links">
                            {quickLinks.map((link) => (
                                <li key={link.path}>
                                    <Link to={link.path} className="footer__link">
                                        {link.label}
                                    </Link>
                                </li>
                            ))}
                        </ul>
                    </div>

                    {/* Contact Info */}
                    <div className="footer__section">
                        <h4 className="footer__section-title">Contact</h4>
                        <ul className="footer__contact-list">
                            <li className="footer__contact-item">
                                <span className="footer__contact-icon">
                                    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                                        <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"/>
                                        <polyline points="22,6 12,13 2,6"/>
                                    </svg>
                                </span>
                                <a href={`mailto:${profile.contact.email}`}>{profile.contact.email}</a>
                            </li>
                            <li className="footer__contact-item">
                                <span className="footer__contact-icon">
                                    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                                        <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"/>
                                    </svg>
                                </span>
                                <span>{profile.contact.phone}</span>
                            </li>
                            <li className="footer__contact-item">
                                <span className="footer__contact-icon">
                                    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                                        <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"/>
                                        <circle cx="12" cy="10" r="3"/>
                                    </svg>
                                </span>
                                <span>{profile.contact.location}</span>
                            </li>
                        </ul>
                    </div>

                    {/* Awards & Recognition */}
                    <div className="footer__section">
                        <h4 className="footer__section-title">Recognition</h4>
                        <div className="footer__badges">
                            {profile.badges.slice(0, 3).map((badge, index) => (
                                <span key={index} className="footer__badge">
                                    {badge}
                                </span>
                            ))}
                        </div>
                        <a
                            href={profile.links.awards}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="footer__awards-link"
                        >
                            View All Awards
                            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" width="16" height="16">
                                <path d="M5 12h14M12 5l7 7-7 7"/>
                            </svg>
                        </a>
                    </div>
                </div>
            </div>

            {/* Bottom Bar */}
            <div className="footer__bottom">
                <div className="footer__container footer__bottom-content">
                    <p className="footer__copyright">
                        &copy; {currentYear} {profile.name}. All rights reserved.
                    </p>
                    <p className="footer__institution">
                        Imam Mohammad Ibn Saud Islamic University (IMSIU), Riyadh
                    </p>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
