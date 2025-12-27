import { profile } from '../data/profile';
import { Link } from 'react-router-dom';
import './Footer.css'; // Assuming you have a separate CSS file for footer styles

const Footer: React.FC = () => {
    return (
        <footer className="footer">
            <div className="footer-content">
                <p>&copy; {new Date().getFullYear()} {profile.name}. All rights reserved.</p>
                <div className="footer-links">
                    <a href={profile.links.scholar} target="_blank" rel="noopener noreferrer">Google Scholar</a>
                    <a href={profile.links.researchGate} target="_blank" rel="noopener noreferrer">ResearchGate</a>
                    <a href={profile.links.scopus} target="_blank" rel="noopener noreferrer">Scopus</a>
                    <a href={profile.links.awards} target="_blank" rel="noopener noreferrer">Awards</a>
                    <Link to="/contact">Contact</Link>
                </div>
            </div>
        </footer>
    );
};

export default Footer;