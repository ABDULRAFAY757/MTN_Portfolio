import React, { useState, useEffect } from 'react';
import { profile } from '../data/profile';
import { Link, useLocation } from 'react-router-dom';
import './Header.css';

const Header: React.FC = () => {
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const [isScrolled, setIsScrolled] = useState(false);
    const location = useLocation();

    useEffect(() => {
        const handleScroll = () => {
            setIsScrolled(window.scrollY > 20);
        };

        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    // Close menu when route changes
    useEffect(() => {
        setIsMenuOpen(false);
    }, [location]);

    const navLinks = [
        { path: '/', label: 'Home' },
        { path: '/projects', label: 'Publications' },
        { path: '/services', label: 'Services' },
        { path: '/insights', label: 'Insights' },
        { path: '/contact', label: 'Contact' },
    ];

    const isActive = (path: string) => location.pathname === path;

    return (
        <header className={`header ${isScrolled ? 'header--scrolled' : ''}`}>
            <div className="header__container">
                {/* Logo / Name */}
                <Link to="/" className="header__logo">
                    <span className="header__logo-icon">MT</span>
                    <div className="header__logo-text">
                        <span className="header__name">{profile.name}</span>
                        <span className="header__title">Associate Professor</span>
                    </div>
                </Link>

                {/* Desktop Navigation */}
                <nav className="header__nav">
                    <ul className="header__nav-list">
                        {navLinks.map((link) => (
                            <li key={link.path} className="header__nav-item">
                                <Link
                                    to={link.path}
                                    className={`header__nav-link ${isActive(link.path) ? 'header__nav-link--active' : ''}`}
                                >
                                    {link.label}
                                </Link>
                            </li>
                        ))}
                    </ul>
                </nav>

                {/* CTA Button */}
                <div className="header__cta">
                    <a
                        href={profile.links.scholar}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="header__cta-btn"
                    >
                        <svg className="header__cta-icon" viewBox="0 0 24 24" fill="currentColor" width="18" height="18">
                            <path d="M5.242 13.769L0 9.5 12 0l12 9.5-5.242 4.269C17.548 11.249 14.978 9.5 12 9.5c-2.977 0-5.548 1.748-6.758 4.269zM12 10a7 7 0 1 0 0 14 7 7 0 0 0 0-14z"/>
                        </svg>
                        Google Scholar
                    </a>
                </div>

                {/* Mobile Menu Button */}
                <button
                    className={`header__menu-btn ${isMenuOpen ? 'header__menu-btn--active' : ''}`}
                    onClick={() => setIsMenuOpen(!isMenuOpen)}
                    aria-label={isMenuOpen ? 'Close menu' : 'Open menu'}
                    aria-expanded={isMenuOpen}
                >
                    <span className="header__menu-line"></span>
                    <span className="header__menu-line"></span>
                    <span className="header__menu-line"></span>
                </button>
            </div>

            {/* Mobile Navigation */}
            <div className={`header__mobile-nav ${isMenuOpen ? 'header__mobile-nav--open' : ''}`}>
                <nav className="header__mobile-nav-inner">
                    <ul className="header__mobile-nav-list">
                        {navLinks.map((link, index) => (
                            <li
                                key={link.path}
                                className="header__mobile-nav-item"
                                style={{ animationDelay: `${index * 50}ms` }}
                            >
                                <Link
                                    to={link.path}
                                    className={`header__mobile-nav-link ${isActive(link.path) ? 'header__mobile-nav-link--active' : ''}`}
                                    onClick={() => setIsMenuOpen(false)}
                                >
                                    {link.label}
                                </Link>
                            </li>
                        ))}
                    </ul>

                    {/* Mobile Social Links */}
                    <div className="header__mobile-social">
                        <a href={profile.links.scholar} target="_blank" rel="noopener noreferrer" className="header__mobile-social-link">
                            Scholar
                        </a>
                        <a href={profile.links.researchGate} target="_blank" rel="noopener noreferrer" className="header__mobile-social-link">
                            ResearchGate
                        </a>
                        <a href={profile.links.scopus} target="_blank" rel="noopener noreferrer" className="header__mobile-social-link">
                            Scopus
                        </a>
                    </div>
                </nav>
            </div>

            {/* Overlay for mobile menu */}
            {isMenuOpen && (
                <div
                    className="header__overlay"
                    onClick={() => setIsMenuOpen(false)}
                    aria-hidden="true"
                />
            )}
        </header>
    );
};

export default Header;
