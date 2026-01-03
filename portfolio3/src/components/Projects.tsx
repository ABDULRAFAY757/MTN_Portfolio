import React from 'react';
import { profile } from '../data/profile';
import './Projects.css';

const Projects: React.FC = () => {
    return (
        <main className="projects-page">
            {/* Page Header */}
            <section className="projects-hero">
                <div className="projects-hero__background">
                    <div className="projects-hero__gradient"></div>
                </div>
                <div className="projects-hero__container">
                    <span className="projects-hero__label">Research Output</span>
                    <h1 className="projects-hero__title">Key Publications</h1>
                    <p className="projects-hero__subtitle">
                        Advancing sustainable development through rigorous, high-impact research
                        in environmental policy, green HR practices, and organizational sustainability.
                    </p>
                    <div className="projects-hero__stats">
                        <div className="projects-hero__stat">
                            <span className="projects-hero__stat-value">{profile.stats.papers}</span>
                            <span className="projects-hero__stat-label">Publications</span>
                        </div>
                        <div className="projects-hero__stat-divider"></div>
                        <div className="projects-hero__stat">
                            <span className="projects-hero__stat-value">Top 2%</span>
                            <span className="projects-hero__stat-label">Stanford Ranking</span>
                        </div>
                        <div className="projects-hero__stat-divider"></div>
                        <div className="projects-hero__stat">
                            <span className="projects-hero__stat-value">2025</span>
                            <span className="projects-hero__stat-label">Latest Year</span>
                        </div>
                    </div>
                </div>
            </section>

            {/* Publications Grid */}
            <section className="publications">
                <div className="publications__container">
                    <div className="publications__header">
                        <h2 className="publications__title">Recent Publications</h2>
                        <p className="publications__subtitle">
                            Featured research contributions from leading international journals
                        </p>
                    </div>

                    <div className="publications__grid">
                        {profile.keyPublications.map((pub, index) => (
                            <article key={index} className="publication-card" style={{ animationDelay: `${index * 100}ms` }}>
                                <div className="publication-card__header">
                                    <span className="publication-card__year">{pub.year}</span>
                                    <span className="publication-card__badge">Research Article</span>
                                </div>
                                <h3 className="publication-card__title">{pub.title}</h3>
                                <div className="publication-card__meta">
                                    <div className="publication-card__journal">
                                        <span className="publication-card__journal-icon">
                                            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" width="16" height="16">
                                                <path d="M4 19.5A2.5 2.5 0 0 1 6.5 17H20"/>
                                                <path d="M6.5 2H20v20H6.5A2.5 2.5 0 0 1 4 19.5v-15A2.5 2.5 0 0 1 6.5 2z"/>
                                            </svg>
                                        </span>
                                        <span className="publication-card__journal-name">{pub.journal}</span>
                                    </div>
                                </div>
                                <div className="publication-card__footer">
                                    <a
                                        href={profile.links.scholar}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="publication-card__link"
                                    >
                                        View on Scholar
                                        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" width="14" height="14">
                                            <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"/>
                                            <polyline points="15 3 21 3 21 9"/>
                                            <line x1="10" y1="14" x2="21" y2="3"/>
                                        </svg>
                                    </a>
                                </div>
                            </article>
                        ))}
                    </div>
                </div>
            </section>

            {/* Academic Profiles Section */}
            <section className="academic-profiles">
                <div className="academic-profiles__container">
                    <div className="academic-profiles__header">
                        <h2 className="academic-profiles__title">Academic Profiles</h2>
                        <p className="academic-profiles__subtitle">
                            Explore the full research portfolio across leading academic platforms
                        </p>
                    </div>

                    <div className="academic-profiles__grid">
                        <a
                            href={profile.links.scholar}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="profile-card profile-card--scholar"
                        >
                            <div className="profile-card__icon">
                                <svg viewBox="0 0 24 24" fill="currentColor" width="32" height="32">
                                    <path d="M5.242 13.769L0 9.5 12 0l12 9.5-5.242 4.269C17.548 11.249 14.978 9.5 12 9.5c-2.977 0-5.548 1.748-6.758 4.269zM12 10a7 7 0 1 0 0 14 7 7 0 0 0 0-14z"/>
                                </svg>
                            </div>
                            <h3 className="profile-card__title">Google Scholar</h3>
                            <p className="profile-card__description">View citations, h-index, and complete publication list</p>
                            <span className="profile-card__arrow">
                                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" width="20" height="20">
                                    <path d="M5 12h14M12 5l7 7-7 7"/>
                                </svg>
                            </span>
                        </a>

                        <a
                            href={profile.links.researchGate}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="profile-card profile-card--researchgate"
                        >
                            <div className="profile-card__icon">
                                <svg viewBox="0 0 24 24" fill="currentColor" width="32" height="32">
                                    <path d="M19.586 0c-.818 0-1.508.19-2.073.565-.563.377-.97.936-1.213 1.68a3.193 3.193 0 0 0-.112.437 8.365 8.365 0 0 0-.078.53 9 9 0 0 0-.05.727c-.01.282-.013.621-.013 1.016a31.121 31.121 0 0 0 .014 1.017 9 9 0 0 0 .05.727 7.946 7.946 0 0 0 .078.53h-.005a3.334 3.334 0 0 0 .113.438c.245.743.65 1.303 1.214 1.68.565.376 1.256.564 2.075.564.8 0 1.536-.213 2.105-.603.57-.39.94-.916 1.175-1.65.076-.235.135-.558.177-.93a10.9 10.9 0 0 0 .043-1.207v-.82c0-.095-.047-.142-.14-.142h-3.064c-.094 0-.14.047-.14.141v.956c0 .094.046.14.14.14h1.666c.056 0 .084.03.084.086 0 .36 0 .62-.036.865-.038.244-.1.447-.147.606-.108.365-.31.636-.608.822-.296.186-.65.28-1.067.28-.677 0-1.196-.232-1.556-.698-.36-.466-.54-1.156-.54-2.07 0-.478.032-.884.097-1.223.065-.34.166-.625.302-.858.135-.232.312-.41.53-.53.217-.122.48-.182.784-.182.46 0 .842.132 1.147.396.305.264.472.608.5 1.032.015.086.06.13.146.13h1.334c.093 0 .14-.044.14-.127a2.974 2.974 0 0 0-.47-1.396 3.056 3.056 0 0 0-1.048-.924c-.452-.234-.972-.35-1.56-.35zM5.83 5.155c-.293 0-.534.09-.727.27-.19.18-.288.41-.288.692 0 .28.095.51.29.694.193.18.434.27.726.27.29 0 .53-.09.724-.27.193-.184.29-.414.29-.694 0-.283-.097-.513-.29-.693-.195-.18-.435-.27-.725-.27zm7.456 0c-.293 0-.535.09-.727.27-.192.18-.288.41-.288.692 0 .28.096.51.29.694.19.18.433.27.725.27.293 0 .534-.09.727-.27.192-.184.29-.414.29-.694 0-.283-.098-.513-.29-.693-.193-.18-.435-.27-.727-.27zM.17 6.35c-.113 0-.17.057-.17.17v10.693c0 .112.057.17.17.17h2.674c.112 0 .17-.058.17-.17v-3.37c0-.058.028-.087.085-.087h.774c.15 0 .27.018.358.054.09.035.165.088.227.158.062.07.116.167.164.29.047.124.1.282.157.475l.693 2.4c.03.112.1.17.21.17h1.56c.057 0 .1-.014.128-.04a.132.132 0 0 0 .024-.13l-.772-2.612a5.64 5.64 0 0 0-.193-.554 1.907 1.907 0 0 0-.238-.403.943.943 0 0 0-.312-.265 1.274 1.274 0 0 0-.396-.144c-.018 0-.028-.006-.028-.018 0-.012.01-.02.028-.025a1.64 1.64 0 0 0 .58-.26c.163-.113.3-.25.41-.406.11-.157.196-.332.254-.527.06-.194.088-.39.088-.59 0-.332-.062-.63-.185-.896a1.726 1.726 0 0 0-.534-.665 2.4 2.4 0 0 0-.872-.41 4.553 4.553 0 0 0-1.178-.142H.17zm5.66 0c-.112 0-.17.057-.17.17v10.693c0 .112.058.17.17.17h1.474c.113 0 .17-.058.17-.17V6.52c0-.113-.057-.17-.17-.17H5.83zm7.456 0c-.113 0-.17.057-.17.17v10.693c0 .112.057.17.17.17h1.474c.112 0 .17-.058.17-.17V6.52c0-.113-.058-.17-.17-.17h-1.474zm-10.1 1.394h.758c.328 0 .582.093.765.28.183.186.275.467.275.842 0 .366-.082.64-.247.823-.165.182-.427.273-.787.273h-.763V7.744zm.227.17v1.878"/>
                                </svg>
                            </div>
                            <h3 className="profile-card__title">ResearchGate</h3>
                            <p className="profile-card__description">Connect and collaborate on research projects</p>
                            <span className="profile-card__arrow">
                                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" width="20" height="20">
                                    <path d="M5 12h14M12 5l7 7-7 7"/>
                                </svg>
                            </span>
                        </a>

                        <a
                            href={profile.links.scopus}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="profile-card profile-card--scopus"
                        >
                            <div className="profile-card__icon">
                                <svg viewBox="0 0 24 24" fill="currentColor" width="32" height="32">
                                    <circle cx="12" cy="12" r="10"/>
                                </svg>
                            </div>
                            <h3 className="profile-card__title">Scopus</h3>
                            <p className="profile-card__description">Indexed publications and citation metrics</p>
                            <span className="profile-card__arrow">
                                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" width="20" height="20">
                                    <path d="M5 12h14M12 5l7 7-7 7"/>
                                </svg>
                            </span>
                        </a>

                        <a
                            href={profile.links.orcid}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="profile-card profile-card--orcid"
                        >
                            <div className="profile-card__icon">
                                <svg viewBox="0 0 24 24" fill="currentColor" width="32" height="32">
                                    <path d="M12 0C5.372 0 0 5.372 0 12s5.372 12 12 12 12-5.372 12-12S18.628 0 12 0zM7.369 4.378c.525 0 .947.431.947.947s-.422.947-.947.947a.95.95 0 0 1-.947-.947c0-.525.422-.947.947-.947zm-.722 3.038h1.444v10.041H6.647V7.416zm3.562 0h3.9c3.712 0 5.344 2.653 5.344 5.025 0 2.578-2.016 5.025-5.325 5.025h-3.919V7.416zm1.444 1.303v7.444h2.297c3.272 0 4.022-2.484 4.022-3.722 0-2.016-1.284-3.722-4.097-3.722h-2.222z"/>
                                </svg>
                            </div>
                            <h3 className="profile-card__title">ORCID</h3>
                            <p className="profile-card__description">Verified researcher ID and publication record</p>
                            <span className="profile-card__arrow">
                                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" width="20" height="20">
                                    <path d="M5 12h14M12 5l7 7-7 7"/>
                                </svg>
                            </span>
                        </a>
                    </div>
                </div>
            </section>
        </main>
    );
};

export default Projects;
