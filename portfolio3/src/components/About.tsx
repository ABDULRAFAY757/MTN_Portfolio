import React from 'react';
import { profile } from '../data/profile';
import { Link } from 'react-router-dom';
import './About.css';

const About: React.FC = () => {
    return (
        <main className="about">
            {/* Hero Section */}
            <section className="hero">
                <div className="hero__background">
                    <div className="hero__gradient"></div>
                    <div className="hero__pattern"></div>
                </div>
                <div className="hero__container">
                    <div className="hero__left">
                        <div className="hero__content">
                            <div className="hero__badges">
                                {profile.badges.map((badge, index) => (
                                    <span key={index} className="hero__badge">
                                        <span className="hero__badge-icon">
                                            <svg viewBox="0 0 24 24" fill="currentColor" width="14" height="14">
                                                <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"/>
                                            </svg>
                                        </span>
                                        {badge}
                                    </span>
                                ))}
                            </div>
                            <h1 className="hero__title">
                                {profile.name}
                            </h1>
                            <div className="hero__roles">
                                {profile.titles.map((title, index) => (
                                    <span key={index} className="hero__role">{title}</span>
                                ))}
                            </div>
                            <p className="hero__intro">
                                {profile.bio[0]}
                            </p>
                            <div className="hero__actions">
                                <a href={profile.links.scholar} target="_blank" rel="noopener noreferrer" className="hero__btn hero__btn--primary">
                                    <svg viewBox="0 0 24 24" fill="currentColor" width="18" height="18">
                                        <path d="M5.242 13.769L0 9.5 12 0l12 9.5-5.242 4.269C17.548 11.249 14.978 9.5 12 9.5c-2.977 0-5.548 1.748-6.758 4.269zM12 10a7 7 0 1 0 0 14 7 7 0 0 0 0-14z"/>
                                    </svg>
                                    Google Scholar
                                </a>
                                <Link to="/contact" className="hero__btn hero__btn--outline">
                                    Get in Touch
                                </Link>
                            </div>
                        </div>

                        {/* Stats Cards */}
                        <div className="hero__stats">
                        <div className="stat-card stat-card--featured">
                            <div className="stat-card__icon">
                                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                                    <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"/>
                                    <polyline points="14 2 14 8 20 8"/>
                                    <line x1="16" y1="13" x2="8" y2="13"/>
                                    <line x1="16" y1="17" x2="8" y2="17"/>
                                    <polyline points="10 9 9 9 8 9"/>
                                </svg>
                            </div>
                            <span className="stat-card__value">{profile.stats.papers}</span>
                            <span className="stat-card__label">Publications</span>
                        </div>
                        <div className="stat-card">
                            <div className="stat-card__icon">
                                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                                    <circle cx="12" cy="12" r="10"/>
                                    <polyline points="12 6 12 12 16 14"/>
                                </svg>
                            </div>
                            <span className="stat-card__value">{profile.stats.years}</span>
                            <span className="stat-card__label">Years Experience</span>
                        </div>
                        <div className="stat-card">
                            <div className="stat-card__icon">
                                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                                    <circle cx="12" cy="8" r="7"/>
                                    <polyline points="8.21 13.89 7 23 12 20 17 23 15.79 13.88"/>
                                </svg>
                            </div>
                            <span className="stat-card__value">{profile.stats.awards}</span>
                            <span className="stat-card__label">Awards</span>
                        </div>
                        </div>
                    </div>

                    {/* Profile Picture */}
                    <div className="hero__profile-image">
                        <img src={process.env.PUBLIC_URL + '/profile.jpg'} alt="Dr. Muhammad Tanveer" />
                    </div>
                </div>
            </section>

            {/* About Content Section */}
            <section className="about-content">
                <div className="about-content__container">
                    <div className="about-content__header">
                        <span className="about-content__label">About Me</span>
                        <h2 className="about-content__title">Advancing Sustainable Development Through Research</h2>
                    </div>
                    <div className="about-content__grid">
                        <div className="about-content__text">
                            {profile.bio.slice(1).map((paragraph, index) => (
                                <p key={index} className="about-content__paragraph">{paragraph}</p>
                            ))}
                        </div>
                        <div className="about-content__highlights">
                            <div className="highlight-card">
                                <h4 className="highlight-card__title">Research Focus</h4>
                                <ul className="highlight-card__list">
                                    <li>Management Sciences</li>
                                    <li>Human Resource Management</li>
                                    <li>Sustainability</li>
                                    <li>Environment Management</li>
                                    <li>Circular Economy</li>
                                    <li>Artificial Intelligence</li>
                                </ul>
                            </div>
                            <div className="highlight-card highlight-card--accent">
                                <h4 className="highlight-card__title">Academic Impact</h4>
                                <p className="highlight-card__text">
                                    Cited across Google Scholar, Scopus, and Web of Science with contributions
                                    to top-tier journals in sustainability and management.
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Experience Section */}
            <section className="experience">
                <div className="experience__container">
                    <div className="experience__header">
                        <span className="experience__label">Career Journey</span>
                        <h2 className="experience__title">Professional Experience</h2>
                    </div>
                    <div className="experience__timeline">
                        {profile.experience.map((exp, index) => (
                            <div key={index} className={`timeline-card ${index === 0 ? 'timeline-card--current' : ''}`}>
                                <div className="timeline-card__marker">
                                    <div className="timeline-card__dot"></div>
                                    <div className="timeline-card__line"></div>
                                </div>
                                <div className="timeline-card__content">
                                    <div className="timeline-card__header">
                                        <h3 className="timeline-card__role">{exp.role}</h3>
                                        <span className="timeline-card__period">{exp.period}</span>
                                    </div>
                                    <h4 className="timeline-card__institution">{exp.institution}</h4>
                                    <span className="timeline-card__location">
                                        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" width="14" height="14">
                                            <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"/>
                                            <circle cx="12" cy="10" r="3"/>
                                        </svg>
                                        {exp.location}
                                    </span>
                                    {exp.desc && <p className="timeline-card__description">{exp.desc}</p>}
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Publication Metrics Section */}
            <section className="pub-metrics">
                <div className="pub-metrics__container">
                    <div className="pub-metrics__header">
                        <span className="pub-metrics__label">Research Output</span>
                        <h2 className="pub-metrics__title">Publication Metrics</h2>
                    </div>
                    <div className="pub-metrics__grid">
                        <div className="pub-metric-card pub-metric-card--scopus">
                            <div className="pub-metric-card__icon">
                                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                                    <circle cx="12" cy="12" r="10"/>
                                    <path d="M12 6v6l4 2"/>
                                </svg>
                            </div>
                            <span className="pub-metric-card__value">87</span>
                            <span className="pub-metric-card__label">Scopus Indexed</span>
                            <span className="pub-metric-card__badge">Verified</span>
                        </div>
                        <div className="pub-metric-card pub-metric-card--wos">
                            <div className="pub-metric-card__icon">
                                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                                    <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"/>
                                </svg>
                            </div>
                            <span className="pub-metric-card__value">58</span>
                            <span className="pub-metric-card__label">Web of Science</span>
                            <span className="pub-metric-card__badge">Indexed</span>
                        </div>
                        <div className="pub-metric-card pub-metric-card--total">
                            <div className="pub-metric-card__icon">
                                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                                    <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"/>
                                    <polyline points="14 2 14 8 20 8"/>
                                </svg>
                            </div>
                            <span className="pub-metric-card__value">100+</span>
                            <span className="pub-metric-card__label">Total Publications</span>
                            <span className="pub-metric-card__badge">Growing</span>
                        </div>
                        <div className="pub-metric-card pub-metric-card--books">
                            <div className="pub-metric-card__icon">
                                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                                    <path d="M2 3h6a4 4 0 0 1 4 4v14a3 3 0 0 0-3-3H2z"/>
                                    <path d="M22 3h-6a4 4 0 0 0-4 4v14a3 3 0 0 1 3-3h7z"/>
                                </svg>
                            </div>
                            <span className="pub-metric-card__value">4</span>
                            <span className="pub-metric-card__label">Edited Books</span>
                            <span className="pub-metric-card__badge">Elsevier & IGI</span>
                        </div>
                    </div>
                </div>
            </section>

            {/* Publishers Section */}
            <section className="publishers">
                <div className="publishers__container">
                    <h3 className="publishers__title">Published With Leading International Publishers</h3>
                    <div className="publishers__grid">
                        <div className="publisher-badge">Elsevier</div>
                        <div className="publisher-badge">Springer</div>
                        <div className="publisher-badge">Taylor & Francis</div>
                        <div className="publisher-badge">Wiley</div>
                        <div className="publisher-badge">Emerald</div>
                        <div className="publisher-badge">MDPI</div>
                        <div className="publisher-badge">IEEE</div>
                        <div className="publisher-badge">Inderscience</div>
                    </div>
                </div>
            </section>

            {/* Education & Certifications */}
            <section className="credentials">
                <div className="credentials__container">
                    <div className="credentials__grid">
                        {/* Education */}
                        <div className="credentials__section">
                            <div className="credentials__header">
                                <span className="credentials__icon">
                                    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                                        <path d="M22 10v6M2 10l10-5 10 5-10 5z"/>
                                        <path d="M6 12v5c3 3 9 3 12 0v-5"/>
                                    </svg>
                                </span>
                                <h3 className="credentials__title">Education</h3>
                            </div>
                            <div className="credentials__list">
                                {profile.education.map((edu, index) => (
                                    <div key={index} className="credential-card">
                                        <h4 className="credential-card__degree">{edu.degree}</h4>
                                        <p className="credential-card__institution">{edu.institution}</p>
                                    </div>
                                ))}
                            </div>
                        </div>

                        {/* Certifications */}
                        <div className="credentials__section">
                            <div className="credentials__header">
                                <span className="credentials__icon">
                                    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                                        <rect x="3" y="4" width="18" height="18" rx="2" ry="2"/>
                                        <line x1="16" y1="2" x2="16" y2="6"/>
                                        <line x1="8" y1="2" x2="8" y2="6"/>
                                        <line x1="3" y1="10" x2="21" y2="10"/>
                                        <path d="M8 14h.01M12 14h.01M16 14h.01M8 18h.01M12 18h.01M16 18h.01"/>
                                    </svg>
                                </span>
                                <h3 className="credentials__title">Certifications & Expertise</h3>
                            </div>
                            <div className="certifications__grid">
                                {profile.certifications.map((cert, index) => (
                                    <div key={index} className="certification-badge">
                                        <span className="certification-badge__icon">
                                            <svg viewBox="0 0 24 24" fill="currentColor" width="16" height="16">
                                                <path d="M9 16.17L4.83 12l-1.42 1.41L9 19 21 7l-1.41-1.41z"/>
                                            </svg>
                                        </span>
                                        {cert}
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* CTA Section */}
            <section className="cta-section">
                <div className="cta-section__container">
                    <div className="cta-section__content">
                        <h2 className="cta-section__title">Interested in Collaboration?</h2>
                        <p className="cta-section__text">
                            Whether you're interested in research collaboration, academic consultation,
                            or discussing sustainable development initiatives, I'd love to hear from you.
                        </p>
                        <div className="cta-section__actions">
                            <Link to="/contact" className="cta-section__btn cta-section__btn--primary">
                                Contact Me
                            </Link>
                            <Link to="/projects" className="cta-section__btn cta-section__btn--outline">
                                View Publications
                            </Link>
                        </div>
                    </div>
                </div>
            </section>
        </main>
    );
};

export default About;
