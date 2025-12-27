import React from 'react';
import { profile } from '../data/profile';
import './Projects.css';

const Projects: React.FC = () => {
    return (
        <div className="projects">
            <h2 className="section-title">Key Publications</h2>
            <div className="projects-list">
                {profile.keyPublications.map((pub, index) => (
                    <div key={index} className="project-card publication-card">
                        <h3>{pub.title}</h3>
                        <p><strong>Journal:</strong> {pub.journal}</p>
                        <p><strong>Year:</strong> {pub.year}</p>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default Projects;