import React from 'react';
import { Container } from 'react-bootstrap';

function Footer() {
    const whatsappNumber = "+2348069434439"; // Michael's phone number
    const whatsappMessage = "Hi! I'm interested in your music services."; // Pre-filled message

    const handleWhatsAppClick = () => {
        const whatsappUrl = `https://wa.me/${whatsappNumber.replace(/[^\d]/g, '')}?text=${encodeURIComponent(whatsappMessage)}`;
        window.open(whatsappUrl, '_blank');
    };

    return (
        <>
            {/* Floating WhatsApp Button */}
            <div className="whatsapp-float" onClick={handleWhatsAppClick}>
                <svg
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="currentColor"
                    className="whatsapp-icon"
                >
                    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.074-.297-.149-1.255-.462-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.297-.347.446-.521.151-.172.2-.296.3-.495.099-.198.05-.372-.025-.521-.075-.148-.669-1.611-.916-2.206-.242-.579-.487-.501-.669-.51l-.57-.01c-.198 0-.52.074-.792.372s-1.04 1.016-1.04 2.479 1.065 2.876 1.213 3.074c.149.198 2.095 3.2 5.076 4.487.709.306 1.263.489 1.694.626.712.226 1.36.194 1.872.118.571-.085 1.758-.719 2.006-1.413.248-.695.248-1.29.173-1.414-.074-.123-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z" />
                </svg>
            </div>

            {/* Footer */}
            <footer className="modern-footer">
                <Container>
                    <div className="footer-content">
                        <div className="footer-main">
                            <div className="footer-brand">
                                <div className="brand-content">
                                    <span className="brand-icon">🎷</span>
                                    <span className="brand-text">Saxbishop</span>
                                </div>
                                <p className="footer-description">
                                    Creating beautiful music and inspiring the next generation of artists through
                                    ANCHOR ROCK MUSIC INTERNATIONAL.
                                </p>
                            </div>

                            <div className="footer-links">
                                <div className="link-group">
                                    <h4>Quick Links</h4>
                                    <ul>
                                        <li><a href="#home">Home</a></li>
                                        <li><a href="#about">About</a></li>
                                        <li><a href="#projects">Projects</a></li>
                                        <li><a href="#contacts">Contact</a></li>
                                    </ul>
                                </div>

                                <div className="link-group">
                                    <h4>Services</h4>
                                    <ul>
                                        <li>Music Production</li>
                                        <li>Performance</li>
                                        <li>Music Education</li>
                                        <li>Consultation</li>
                                    </ul>
                                </div>

                                <div className="link-group">
                                    <h4>Connect</h4>
                                    <div className="contact-info">
                                        <p>📱 +2348069434439</p>
                                        <p>📧 info@saxbishop.com</p>
                                        <p>📍 Lagos, Nigeria</p>
                                    </div>
                                    <div className="social-links-footer">
                                        <a href="#" className="social-link-footer" aria-label="Instagram">
                                            <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
                                                <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zM5.838 12a6.162 6.162 0 1 1 12.324 0 6.162 6.162 0 0 1-12.324 0zM12 16a4 4 0 1 1 0-8 4 4 0 0 1 0 8zm4.965-10.405a1.44 1.44 0 1 1 2.881.001 1.44 1.44 0 0 1-2.881-.001z" />
                                            </svg>
                                        </a>
                                        <a href="#" className="social-link-footer" aria-label="YouTube">
                                            <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
                                                <path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z" />
                                            </svg>
                                        </a>
                                        <a href="#" className="social-link-footer" aria-label="Spotify">
                                            <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
                                                <path d="M12 0C5.4 0 0 5.4 0 12s5.4 12 12 12 12-5.4 12-12S18.66 0 12 0zm5.521 17.34c-.24.359-.66.48-1.021.24-2.82-1.74-6.36-2.101-10.561-1.141-.418.122-.779-.179-.899-.539-.12-.421.18-.78.54-.9 4.56-1.021 8.52-.6 11.64 1.32.42.18.479.659.301 1.02zm1.44-3.3c-.301.42-.841.6-1.262.3-3.239-1.98-8.159-2.58-11.939-1.38-.479.12-1.02-.12-1.14-.6-.12-.48.12-1.021.6-1.141C9.6 9.9 15 10.561 18.72 12.84c.361.181.54.78.241 1.2zm.12-3.36C15.24 8.4 8.82 8.16 5.16 9.301c-.6.179-1.2-.181-1.38-.721-.18-.601.18-1.2.72-1.381 4.26-1.26 11.28-1.02 15.721 1.621.539.3.719 1.02.419 1.56-.299.421-1.02.599-1.559.3z" />
                                            </svg>
                                        </a>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div className="footer-bottom">
                            <div className="footer-divider"></div>
                            <div className="bottom-content">
                                <p className="copyright">
                                    &copy; 2024 Michael Olasunkanmi (Saxbishop). All rights reserved.
                                </p>
                                <p className="company">
                                    ANCHOR ROCK MUSIC INTERNATIONAL
                                </p>
                            </div>
                        </div>
                    </div>
                </Container>
            </footer>
        </>
    );
}

export default Footer;