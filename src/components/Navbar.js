import React, { useState } from 'react';
import './Navbar.css'; // Import the CSS file

function Navbar({ activeSection, scrollToSection, isDarkMode, setIsDarkMode }) {
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    const navItems = [
        { id: 'home', label: 'Home', icon: '🏠' },
        { id: 'about', label: 'About', icon: '👤' },
        { id: 'projects', label: 'Projects', icon: '🎵' },
        { id: 'resume', label: 'Journey', icon: '🎷' },
        { id: 'blogs', label: 'Insights', icon: '✍️' },
        { id: 'contacts', label: 'Contact', icon: '📧' }
    ];

    const handleNavClick = (sectionId) => {
        scrollToSection(sectionId);
        setIsMenuOpen(false); // Close menu on mobile after click
    };

    return (
        <nav className="navbar">
            <div className="nav-container">
                <div className="nav-logo">
                    <span className="logo-text">Saxbishop</span>
                </div>

                {/* Hamburger Menu Toggle for Mobile */}
                <div
                    className="nav-menu-toggle"
                    onClick={() => setIsMenuOpen(!isMenuOpen)}
                    aria-label="Toggle navigation menu"
                >
                    <span className={`hamburger ${isMenuOpen ? 'active' : ''}`}></span>
                </div>

                {/* Navigation Menu */}
                <ul className={`nav-menu ${isMenuOpen ? 'active' : ''}`}>
                    {navItems.map(item => (
                        <li key={item.id}>
                            <a
                                href={`#${item.id}`}
                                className={`nav-link ${activeSection === item.id ? 'active' : ''}`}
                                onClick={(e) => {
                                    e.preventDefault();
                                    handleNavClick(item.id);
                                }}
                            >
                                <span className="nav-icon">{item.icon}</span>
                                <span className="nav-label">{item.label}</span>
                            </a>
                        </li>
                    ))}
                    <li>
                        <button
                            className="theme-toggle"
                            onClick={() => setIsDarkMode(!isDarkMode)}
                            aria-label="Toggle dark mode"
                        >
                            {isDarkMode ? '☀️' : '🌙'}
                        </button>
                    </li>
                </ul>
            </div>
        </nav>
    );
}

export default Navbar;