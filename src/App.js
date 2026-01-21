import React, { useState, useEffect } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';
import Container from 'react-bootstrap/Container';
import Home from './components/Home';
import About from './components/About';
import Projects from './components/Projects';
import Resume from './components/Resume';
import Blogs from './components/Blogs';
import Contacts from './components/Contacts';
import Footer from './components/Footer';
import './App.css';

function App() {
  const [activeSection, setActiveSection] = useState('home');
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isDarkMode, setIsDarkMode] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const sections = ['home', 'about', 'projects', 'resume', 'blogs', 'contacts'];
      const scrollPosition = window.scrollY + 100;
      const isScrolled = window.scrollY > 50;

      setScrolled(isScrolled);

      for (const section of sections) {
        const element = document.getElementById(section);
        if (element) {
          const { offsetTop, offsetHeight } = element;
          if (scrollPosition >= offsetTop && scrollPosition < offsetTop + offsetHeight) {
            setActiveSection(section);
            break;
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
    setIsMenuOpen(false);
  };

  const navItems = [
    { id: 'home', label: 'Home', icon: '🏠' },
    { id: 'about', label: 'About', icon: '👤' },
    { id: 'projects', label: 'Projects', icon: '🎵' },
    { id: 'resume', label: 'Journey', icon: '🎷' },
    { id: 'blogs', label: 'Insights', icon: '✍️' },
    { id: 'contacts', label: 'Contact', icon: '📧' }
  ];

  return (
    <div className={`modern-app ${isDarkMode ? 'dark-theme' : ''} ${scrolled ? 'scrolled' : ''}`}>
      {/* Modern Navigation */}
      <Navbar
        expand="lg"
        fixed="top"
        className={`modern-navbar ${scrolled ? 'navbar-scrolled' : ''} ${isDarkMode ? 'dark' : 'light'}`}
      >
        <Container>
          <Navbar.Brand
            href="#home"
            className="modern-brand"
            onClick={(e) => {
              e.preventDefault();
              scrollToSection('home');
            }}
          >
            <div className="brand-content">
              <span className="brand-icon">🎷</span>
              <span className="brand-text">Saxbishop</span>
            </div>
          </Navbar.Brand>

          <Navbar.Toggle
            aria-controls="basic-navbar-nav"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="modern-toggler"
          >
            <span className={`hamburger ${isMenuOpen ? 'active' : ''}`}></span>
          </Navbar.Toggle>

          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="ms-auto">
              {navItems.map(item => (
                <Nav.Link
                  key={item.id}
                  href={`#${item.id}`}
                  className={`modern-nav-link ${activeSection === item.id ? 'active' : ''}`}
                  onClick={(e) => {
                    e.preventDefault();
                    scrollToSection(item.id);
                  }}
                >
                  <span className="nav-icon">{item.icon}</span>
                  <span className="nav-text">{item.label}</span>
                </Nav.Link>
              ))}
              <Nav.Link
                className="modern-theme-toggle"
                onClick={() => setIsDarkMode(!isDarkMode)}
              >
                <div className="theme-toggle-container">
                  <div className={`theme-toggle-slider ${isDarkMode ? 'dark' : 'light'}`}>
                    {isDarkMode ? '🌙' : '☀️'}
                  </div>
                </div>
              </Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>

      <main>
        <Home scrollToSection={scrollToSection} isDarkMode={isDarkMode} />
        <About isDarkMode={isDarkMode} />
        <Projects isDarkMode={isDarkMode} />
        <Resume isDarkMode={isDarkMode} />
        <Blogs isDarkMode={isDarkMode} />
        <Contacts isDarkMode={isDarkMode} />
      </main>

      <Footer isDarkMode={isDarkMode} />
    </div>
  );
}

export default App;