import React, { useState, useEffect, useCallback, useRef } from 'react';
import './Navbar.css'; // Import the CSS file

function Navbar({ activeSection, scrollToSection, isDarkMode, setIsDarkMode }) {
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const navMenuRef = useRef(null); // Ref for the navigation menu

    const navItems = [
        { id: 'home', label: 'Home', icon: '🏠' },
        { id: 'about', label: 'About', icon: '👤' },
        { id: 'projects', label: 'Projects', icon: '🎵' },
        { id: 'resume', label: 'Journey', icon: '🎷' },
        { id: 'blogs', label: 'Insights', icon: '✍️' },
        { id: 'contacts', label: 'Contact', icon: '📧' }
    ];

    // Toggle menu open/close
    const toggleMenu = useCallback(() => {
        setIsMenuOpen(prev => !prev);
    }, []);

    // Handle navigation link click
    const handleNavClick = useCallback((sectionId) => {
        scrollToSection(sectionId);
        setIsMenuOpen(false); // Close menu on mobile after click
    }, [scrollToSection]);

    // Close menu when clicking outside
    useEffect(() => {
        const handleClickOutside = (event) => {
            if (navMenuRef.current && !navMenuRef.current.contains(event.target) && isMenuOpen) {
                setIsMenuOpen(false);
            }
        };

        document.addEventListener('mousedown', handleClickOutside);
        return () => {
            document.removeEventListener('mousedown', handleClickOutside);
        };
    }, [isMenuOpen]);

    // Close menu with 'Escape' key
    useEffect(() => {
        const handleKeyDown = (event) => {
            if (event.key === 'Escape' && isMenuOpen) {
                setIsMenuOpen(false);
            }
        };

        document.addEventListener('keydown', handleKeyDown);
        return () => {
            document.removeEventListener('keydown', handleKeyDown);
        };
    }, [isMenuOpen]);

    // Prevent body scroll when menu is open
    useEffect(() => {
        if (isMenuOpen) {
            document.body.style.overflow = 'hidden';
        } else {
            document.body.style.overflow = 'unset';
        }

        // Cleanup function to reset overflow on unmount
        return () => {
            document.body.style.overflow = 'unset';
        };
    }, [isMenuOpen]);

    return (
        <nav className="navbar">
            <div className="nav-container">
                <div className="nav-logo">
                    <span className="logo-text">Saxbishop</span>
                </div>

                {/* Hamburger Menu Toggle for Mobile */}
                <button
                    className="nav-menu-toggle"
                    onClick={toggleMenu}
                    aria-label={isMenuOpen ? 'Close navigation menu' : 'Open navigation menu'}
                    aria-expanded={isMenuOpen}
                >
                    <span className={`hamburger ${isMenuOpen ? 'active' : ''}`}></span>
                </button>

                {/* Navigation Menu */}
                <ul
                    ref={navMenuRef}
                    className={`nav-menu ${isMenuOpen ? 'active' : ''}`}
                    role="navigation"
                >
                    {navItems.map(item => (
                        <li key={item.id}>
                            <a
                                href={`#${item.id}`}
                                className={`nav-link ${activeSection === item.id ? 'active' : ''}`}
                                onClick={(e) => {
                                    e.preventDefault();
                                    handleNavClick(item.id);
                                }}
                                aria-label={`Navigate to ${item.label} section`}
                            >
                                <span className="nav-icon" aria-hidden="true">{item.icon}</span>
                                <span className="nav-label">{item.label}</span>
                            </a>
                        </li>
                    ))}
                    <li>
                        <button
                            className="theme-toggle"
                            onClick={() => setIsDarkMode(!isDarkMode)}
                            aria-label={`Switch to ${isDarkMode ? 'light' : 'dark'} mode`}
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