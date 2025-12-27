import { profile } from '../data/profile';
import { Link } from 'react-router-dom';
import './Header.css'; // Assuming you have a separate CSS file for header styles

const Header: React.FC = () => {
    return (
        <header className="header">
            <h1 className="header-title">{profile.name}</h1>
            <nav className="header-nav">
                <ul>
                    <li><Link to="/">Home</Link></li>
                    <li><Link to="/about">About</Link></li>
                    <li><Link to="/projects">Projects</Link></li>
                    <li><Link to="/contact">Contact</Link></li>
                    <li><Link to="/data-insights">Data Insights</Link></li>
                </ul>
            </nav>
        </header>
    );
};

export default Header;