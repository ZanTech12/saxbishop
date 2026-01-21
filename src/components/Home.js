import React, { useState, useEffect } from 'react';
import { Container, Row, Col, Carousel } from 'react-bootstrap';
// Import local images from assets folder
import saxPerform from '../assets/sax-perform.jpeg';
import saxStage from '../assets/sax-stage.jpeg';
import saxTeach from '../assets/sax-teach.jpeg';
import saxStudio from '../assets/sax-studio.jpeg';

function Home({ scrollToSection, isDarkMode }) {
    const [index, setIndex] = useState(0);
    const [isLoaded, setIsLoaded] = useState(false);

    useEffect(() => {
        setIsLoaded(true);
    }, []);

    const handleSelect = (selectedIndex) => {
        setIndex(selectedIndex);
    };

    const slides = [
        {
            url: saxPerform,
            alt: 'Michael Olasunkanmi performing with saxophone'
        },
        {
            url: saxStage,
            alt: 'Saxbishop on stage'
        },
        {
            url: saxTeach,
            alt: 'Teaching at music institute'
        },
        {
            url: saxStudio,
            alt: 'Music production session'
        }
    ];

    const socialLinks = [
        { icon: '📷', label: 'Instagram', href: '#' },
        { icon: '🎥', label: 'YouTube', href: '#' },
        { icon: '🎵', label: 'Spotify', href: '#' },
        { icon: '🐦', label: 'Twitter', href: '#' }
    ];

    return (
        <section id="home" className="hero-section d-flex align-items-center min-vh-100">
            <Container>
                <Row className="align-items-center">
                    <Col lg={6} className={`hero-content ${isLoaded ? 'animate-slideInLeft' : ''}`}>
                        <div className="hero-text">
                            <div className="hero-greeting mb-3">
                                <span className="modern-badge">👋 Welcome to my world</span>
                            </div>
                            <h1 className="hero-title mb-4">
                                Hi, I'm <span className="text-gradient">Saxbishop</span>
                            </h1>
                            <h2 className="hero-subtitle mb-4">
                                Music Producer, Composer & Performing Artist
                            </h2>
                            <p className="hero-description mb-5">
                                An acclaimed music producer, composer, and performing artist with over 2 decades of experience
                                in the heart of the music industry. Founder of ANCHOR ROCK MUSIC INTERNATIONAL and lecturer at
                                prestigious music institutions.
                            </p>

                            <div className="hero-buttons mb-5">
                                <button
                                    className="modern-btn modern-btn-primary me-3"
                                    onClick={() => scrollToSection('projects')}
                                >
                                    View My Work
                                    <span>→</span>
                                </button>
                                <button
                                    className="modern-btn modern-btn-outline"
                                    onClick={() => scrollToSection('contacts')}
                                >
                                    Get In Touch
                                    <span>✉</span>
                                </button>
                            </div>

                            <div className="hero-social">
                                <p className="text-muted mb-3">Connect with me</p>
                                <div className="social-links d-flex gap-3">
                                    {socialLinks.map((social, idx) => (
                                        <a
                                            key={idx}
                                            href={social.href}
                                            className="social-link"
                                            aria-label={social.label}
                                        >
                                            <span className="social-icon">{social.icon}</span>
                                        </a>
                                    ))}
                                </div>
                            </div>
                        </div>
                    </Col>

                    <Col lg={6} className={`hero-image ${isLoaded ? 'animate-slideInRight' : ''}`}>
                        <div className="modern-card profile-card">
                            <div className="profile-carousel">
                                <Carousel
                                    activeIndex={index}
                                    onSelect={handleSelect}
                                    interval={4000}
                                    indicators={false}
                                    controls={false}
                                    className="modern-carousel"
                                >
                                    {slides.map((slide, idx) => (
                                        <Carousel.Item key={idx}>
                                            <div className="carousel-image-container">
                                                <img
                                                    className="d-block w-100"
                                                    src={slide.url}
                                                    alt={slide.alt}
                                                />
                                                <div className="image-overlay"></div>
                                            </div>
                                        </Carousel.Item>
                                    ))}
                                </Carousel>

                                <div className="carousel-controls">
                                    <button
                                        className="carousel-control-prev"
                                        onClick={() => setIndex(index === 0 ? slides.length - 1 : index - 1)}
                                    >
                                        ←
                                    </button>
                                    <button
                                        className="carousel-control-next"
                                        onClick={() => setIndex(index === slides.length - 1 ? 0 : index + 1)}
                                    >
                                        →
                                    </button>
                                </div>

                                <div className="carousel-indicators-modern">
                                    {slides.map((_, idx) => (
                                        <button
                                            key={idx}
                                            className={`indicator-dot ${index === idx ? 'active' : ''}`}
                                            onClick={() => setIndex(idx)}
                                        />
                                    ))}
                                </div>
                            </div>

                            <div className="profile-info text-center mt-4">
                                <h3 className="profile-name mb-1">Michael Olasunkanmi</h3>
                                <p className="profile-title text-muted mb-0">Saxbishop</p>
                                <div className="profile-badges mt-3 d-flex justify-content-center gap-2">
                                    <span className="modern-badge">🎷 Saxophonist</span>
                                    <span className="modern-badge">🎼 Producer</span>
                                    <span className="modern-badge">🎓 Educator</span>
                                </div>
                            </div>
                        </div>
                    </Col>
                </Row>
            </Container>

            <div className="scroll-indicator">
                <div className="scroll-arrow"></div>
                <span>Scroll</span>
            </div>
        </section>
    );
}

export default Home;