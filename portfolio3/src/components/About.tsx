import React from 'react';
import { profile } from '../data/profile';
import './About.css'; // Ensure we have styles

const About: React.FC = () => {
    return (
        <section id="about" className="about-section">
            <div className="container">
                <h2 className="section-title">About Me</h2>

                <div className="bio-section">
                    {profile.bio.map((paragraph, index) => (
                        <p key={index} className="bio-text">{paragraph}</p>
                    ))}
                </div>

                {/* Stats Section */}
                <div className="stats-grid">
                    <div className="stat-item">
                        <span className="stat-value">{profile.stats.papers}</span>
                        <span className="stat-label">Publications</span>
                    </div>
                    <div className="stat-item">
                        <span className="stat-value">{profile.stats.years}</span>
                        <span className="stat-label">Years Experience</span>
                    </div>
                    <div className="stat-item">
                        <span className="stat-value">{profile.stats.awards}</span>
                        <span className="stat-label">Awards</span>
                    </div>
                </div>

                {/* Experience Section */}
                <div className="resume-section">
                    <h3>Experience</h3>
                    <div className="timeline">
                        {profile.experience.map((exp, index) => (
                            <div key={index} className="timeline-item">
                                <h4 className="role">{exp.role}</h4>
                                <h5 className="institution">{exp.institution}</h5>
                                <span className="period">{exp.period} | {exp.location}</span>
                                {exp.desc && <p className="description">{exp.desc}</p>}
                            </div>
                        ))}
                    </div>
                </div>

                {/* Education Section */}
                <div className="resume-section">
                    <h3>Education</h3>
                    <div className="list-grid">
                        {profile.education.map((edu, index) => (
                            <div key={index} className="list-item">
                                <h4>{edu.degree}</h4>
                                <p>{edu.institution}</p>
                            </div>
                        ))}
                    </div>
                </div>

                {/* Certifications Section */}
                <div className="resume-section">
                    <h3>Certifications & Expertise</h3>
                    <ul className="cert-list">
                        {profile.certifications.map((cert, index) => (
                            <li key={index}>{cert}</li>
                        ))}
                    </ul>
                </div>
            </div>
        </section>
    );
};

export default About;