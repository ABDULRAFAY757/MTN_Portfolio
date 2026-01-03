import React from 'react';
import { profile } from '../data/profile';
import { Link } from 'react-router-dom';
import './Services.css';

const Services: React.FC = () => {
    const services = [
        {
            icon: (
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                    <path d="M2 3h6a4 4 0 0 1 4 4v14a3 3 0 0 0-3-3H2z"/>
                    <path d="M22 3h-6a4 4 0 0 0-4 4v14a3 3 0 0 1 3-3h7z"/>
                </svg>
            ),
            title: 'Research Consultation',
            description: 'Expert guidance on research methodology, literature review, and academic writing in sustainability, green HRM, and environmental management.',
            features: ['Research Design', 'Data Analysis', 'Publication Strategy', 'Peer Review Support']
        },
        {
            icon: (
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                    <path d="M22 10v6M2 10l10-5 10 5-10 5z"/>
                    <path d="M6 12v5c3 3 9 3 12 0v-5"/>
                </svg>
            ),
            title: 'Academic Supervision',
            description: 'PhD and Masters thesis supervision in management, sustainability, and environmental policy with proven track record of successful graduates.',
            features: ['Thesis Development', 'Research Mentorship', 'Career Guidance', 'Publication Support']
        },
        {
            icon: (
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                    <rect x="2" y="3" width="20" height="14" rx="2" ry="2"/>
                    <line x1="8" y1="21" x2="16" y2="21"/>
                    <line x1="12" y1="17" x2="12" y2="21"/>
                </svg>
            ),
            title: 'Corporate Training',
            description: 'Professional development programs on sustainable business practices, green HR implementation, and environmental management systems.',
            features: ['Workshop Design', 'Executive Training', 'Team Development', 'Change Management']
        },
        {
            icon: (
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                    <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"/>
                </svg>
            ),
            title: 'Accreditation Consulting',
            description: 'AACSB and NCAAA accreditation expertise to help institutions achieve and maintain international quality standards.',
            features: ['Gap Analysis', 'Documentation Support', 'Quality Assurance', 'Continuous Improvement']
        },
        {
            icon: (
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                    <circle cx="12" cy="12" r="10"/>
                    <line x1="2" y1="12" x2="22" y2="12"/>
                    <path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z"/>
                </svg>
            ),
            title: 'Keynote Speaking',
            description: 'Engaging presentations on sustainable development, green business practices, and the future of environmental management.',
            features: ['Conference Keynotes', 'Panel Discussions', 'Webinars', 'Guest Lectures']
        },
        {
            icon: (
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                    <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"/>
                    <circle cx="9" cy="7" r="4"/>
                    <path d="M23 21v-2a4 4 0 0 0-3-3.87"/>
                    <path d="M16 3.13a4 4 0 0 1 0 7.75"/>
                </svg>
            ),
            title: 'Collaborative Research',
            description: 'Joint research projects and co-authorship opportunities in sustainability, management, and environmental studies.',
            features: ['Joint Publications', 'Grant Applications', 'Research Networks', 'International Collaborations']
        }
    ];

    return (
        <main className="services-page">
            {/* Hero Section */}
            <section className="services-hero">
                <div className="services-hero__background">
                    <div className="services-hero__gradient"></div>
                    <div className="services-hero__pattern"></div>
                </div>
                <div className="services-hero__container">
                    <span className="services-hero__label">Professional Services</span>
                    <h1 className="services-hero__title">Expert Services & Consultation</h1>
                    <p className="services-hero__subtitle">
                        Leveraging {profile.stats.years} years of academic excellence and research expertise
                        to provide high-impact consulting, training, and collaboration opportunities.
                    </p>
                    <div className="services-hero__stats">
                        <div className="services-hero__stat">
                            <span className="services-hero__stat-value">{profile.stats.papers}</span>
                            <span className="services-hero__stat-label">Publications</span>
                        </div>
                        <div className="services-hero__stat-divider"></div>
                        <div className="services-hero__stat">
                            <span className="services-hero__stat-value">Top 2%</span>
                            <span className="services-hero__stat-label">Stanford Ranking</span>
                        </div>
                        <div className="services-hero__stat-divider"></div>
                        <div className="services-hero__stat">
                            <span className="services-hero__stat-value">{profile.stats.awards}</span>
                            <span className="services-hero__stat-label">Awards</span>
                        </div>
                    </div>
                </div>
            </section>

            {/* Services Grid */}
            <section className="services-grid-section">
                <div className="services-grid-section__container">
                    <div className="services-grid">
                        {services.map((service, index) => (
                            <div key={index} className="service-card">
                                <div className="service-card__icon">
                                    {service.icon}
                                </div>
                                <h3 className="service-card__title">{service.title}</h3>
                                <p className="service-card__description">{service.description}</p>
                                <ul className="service-card__features">
                                    {service.features.map((feature, idx) => (
                                        <li key={idx} className="service-card__feature">
                                            <svg viewBox="0 0 24 24" fill="currentColor" width="16" height="16">
                                                <path d="M9 16.17L4.83 12l-1.42 1.41L9 19 21 7l-1.41-1.41z"/>
                                            </svg>
                                            {feature}
                                        </li>
                                    ))}
                                </ul>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Why Choose Section */}
            <section className="why-choose">
                <div className="why-choose__container">
                    <div className="why-choose__header">
                        <span className="why-choose__label">Why Choose Me</span>
                        <h2 className="why-choose__title">Excellence in Research & Practice</h2>
                    </div>
                    <div className="why-choose__grid">
                        <div className="why-choose__item">
                            <div className="why-choose__icon">
                                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                                    <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"/>
                                </svg>
                            </div>
                            <h4 className="why-choose__item-title">Stanford Top 2%</h4>
                            <p className="why-choose__item-text">Recognized among the world's most-cited scientists</p>
                        </div>
                        <div className="why-choose__item">
                            <div className="why-choose__icon">
                                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                                    <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"/>
                                    <polyline points="14 2 14 8 20 8"/>
                                </svg>
                            </div>
                            <h4 className="why-choose__item-title">{profile.stats.papers} Publications</h4>
                            <p className="why-choose__item-text">Extensive portfolio in top-tier journals</p>
                        </div>
                        <div className="why-choose__item">
                            <div className="why-choose__icon">
                                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                                    <rect x="3" y="4" width="18" height="18" rx="2" ry="2"/>
                                    <line x1="16" y1="2" x2="16" y2="6"/>
                                    <line x1="8" y1="2" x2="8" y2="6"/>
                                    <line x1="3" y1="10" x2="21" y2="10"/>
                                </svg>
                            </div>
                            <h4 className="why-choose__item-title">AACSB & NCAAA Expert</h4>
                            <p className="why-choose__item-text">Proven accreditation expertise</p>
                        </div>
                        <div className="why-choose__item">
                            <div className="why-choose__icon">
                                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                                    <circle cx="12" cy="12" r="10"/>
                                    <polyline points="12 6 12 12 16 14"/>
                                </svg>
                            </div>
                            <h4 className="why-choose__item-title">{profile.stats.years} Experience</h4>
                            <p className="why-choose__item-text">Decades of academic and industry experience</p>
                        </div>
                    </div>
                </div>
            </section>

            {/* CTA Section */}
            <section className="services-cta">
                <div className="services-cta__container">
                    <div className="services-cta__content">
                        <h2 className="services-cta__title">Ready to Collaborate?</h2>
                        <p className="services-cta__text">
                            Let's discuss how my expertise can help advance your research,
                            institution, or organization's sustainability goals.
                        </p>
                        <div className="services-cta__actions">
                            <Link to="/contact" className="services-cta__btn services-cta__btn--primary">
                                Get in Touch
                            </Link>
                            <a
                                href={profile.links.scholar}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="services-cta__btn services-cta__btn--outline"
                            >
                                View Publications
                            </a>
                        </div>
                    </div>
                </div>
            </section>
        </main>
    );
};

export default Services;
