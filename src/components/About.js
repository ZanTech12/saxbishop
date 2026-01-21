import React, { useState, useEffect, useCallback } from 'react';
import { Container, Row, Col, Button, Alert } from 'react-bootstrap';

function About({ isDarkMode }) {
    const [downloadError, setDownloadError] = useState(false);
    const [isDownloading, setIsDownloading] = useState(false);
    const [fileExists, setFileExists] = useState(false);

    const skills = {
        'Technical Skills': [
            { name: 'DAWs (Pro Tools, Ableton, Logic Pro)', level: 95 },
            { name: 'Audio Editing & Mastering', level: 90 },
            { name: 'Sound Design & Synthesis', level: 88 },
            { name: 'Microphone Techniques', level: 92 },
            { name: 'Music Theory & Composition', level: 90 }
        ],
        'Creative Skills': [
            { name: 'Songwriting & Lyric Composition', level: 92 },
            { name: 'Music Production & Arrangement', level: 95 },
            { name: 'Collaboration & Teamwork', level: 90 },
            { name: 'Trend Analysis & Adaptation', level: 85 }
        ],
        'Musician Skills': [
            { name: 'Saxophone', level: 95 },
            { name: 'Piano', level: 85 },
            { name: 'Vocal Performance', level: 90 },
            { name: 'Drums', level: 80 }
        ]
    };

    const education = [
        {
            institution: 'Purple Blue Institute',
            degree: 'Master in Musical Business and Strategy',
            period: 'October 2023 - September 2025',
            icon: '🎓'
        },
        {
            institution: 'Music Camp Africa',
            degree: 'Creative Music Composer',
            period: '17 September 2018 - 04 August 2019',
            icon: '🎼'
        },
        {
            institution: 'Ten String Music Institution',
            degree: 'Music Production',
            period: '04 August 2014 - 21 June 2016',
            icon: '🎹'
        },
        {
            institution: 'Ogun State',
            degree: 'Mastery in Business and Entrepreneurs',
            period: '22 August 2012',
            icon: '💼'
        },
        {
            institution: 'University of Ilorin',
            degree: 'Bachelor\'s Degree',
            period: '17 September 2011',
            icon: '📚'
        }
    ];

    const contactInfo = {
        phone: '+2348069434439',
        email: 'saxbishop01@gmail.com',
        address: '19, Sanni Balogun Street, Abule Egba, Lagos Nigeria',
        socialMedia: '@saxbishop01'
    };

    // Direct download URL - this will work once the file is placed correctly
    const RESUME_URL = process.env.PUBLIC_URL + '/resume.pdf';
    const RESUME_FILENAME = 'Michael_Ola_Sunkanmi_Resume.pdf';

    // Check if file exists - memoized with useCallback to fix ESLint warning
    const checkFileExists = useCallback(async () => {
        try {
            const response = await fetch(RESUME_URL, { method: 'HEAD' });
            setFileExists(response.ok);
            if (!response.ok) {
                console.log('Resume file not found at:', RESUME_URL);
            }
        } catch (error) {
            setFileExists(false);
            console.log('Error checking file existence:', error);
        }
    }, [RESUME_URL]);

    // Check if file exists on component mount
    useEffect(() => {
        checkFileExists();
    }, [checkFileExists]);

    // Method 1: Direct download using anchor tag
    const handleDirectDownload = (e) => {
        e.preventDefault();
        setIsDownloading(true);
        setDownloadError(false);

        // Create a temporary link element
        const link = document.createElement('a');
        link.href = RESUME_URL;
        link.download = RESUME_FILENAME;
        link.style.display = 'none';

        document.body.appendChild(link);
        link.click();
        document.body.removeChild(link);

        // Reset state after a delay
        setTimeout(() => {
            setIsDownloading(false);
        }, 2000);
    };

    // Method 2: Open in new tab
    const handleOpenInNewTab = (e) => {
        e.preventDefault();
        window.open(RESUME_URL, '_blank');
    };

    // Method 3: Force download using fetch
    const handleForceDownload = async (e) => {
        e.preventDefault();
        setIsDownloading(true);
        setDownloadError(false);

        try {
            const response = await fetch(RESUME_URL);
            if (!response.ok) throw new Error('File not found');

            const blob = await response.blob();
            const url = window.URL.createObjectURL(blob);

            const link = document.createElement('a');
            link.href = url;
            link.download = RESUME_FILENAME;
            document.body.appendChild(link);
            link.click();
            document.body.removeChild(link);

            window.URL.revokeObjectURL(url);
            setIsDownloading(false);
        } catch (error) {
            console.error('Force download failed:', error);
            setDownloadError(true);
            setIsDownloading(false);
        }
    };

    return (
        <section id="about" className="about-section">
            <Container>
                <div className="section-header">
                    <h2 className="section-title">About Me</h2>
                    <p className="section-subtitle">
                        Discover my journey through the world of music, from performance to production
                    </p>
                </div>

                <Row className="g-4 align-items-center">
                    <Col lg={8}>
                        <div className="about-content">
                            <div className="about-intro mb-5">
                                <p className="lead mb-3">
                                    Michael Ola Sunkanmi, professionally known as <strong>Saxbishop</strong>, is a dedicated and skilled
                                    Beat Mix Engineer, Music Producer, and Creative Songwriter with years of experience in crafting
                                    captivating audio experiences.
                                </p>
                                <p className="lead">
                                    Proficient in various DAWs and a wide range of music genres, he is passionate about collaborating
                                    with artists to bring their creative visions to life through innovative sound design, meticulous
                                    mixing, and impactful songwriting.
                                </p>
                            </div>

                            <div className="contact-section mb-5">
                                <h3 className="contact-title mb-4">Contact Information</h3>
                                <div className="modern-card">
                                    <div className="contact-info">
                                        <p><strong>Phone:</strong> {contactInfo.phone}</p>
                                        <p><strong>Email:</strong> {contactInfo.email}</p>
                                        <p><strong>Address:</strong> {contactInfo.address}</p>
                                        <p><strong>Social Media:</strong> {contactInfo.socialMedia}</p>
                                    </div>

                                    {!fileExists && (
                                        <Alert variant="danger" className="mt-3">
                                            <Alert.Heading>Resume File Not Found</Alert.Heading>
                                            <p>To enable resume download, please:</p>
                                            <ol>
                                                <li>Rename your PDF file to <code>resume.pdf</code></li>
                                                <li>Place it in your project's <code>public</code> folder</li>
                                                <li>Restart your development server</li>
                                            </ol>
                                            <hr />
                                            <p className="mb-0">
                                                <strong>File path should be:</strong><br />
                                                <code>your-project/public/resume.pdf</code>
                                            </p>
                                        </Alert>
                                    )}

                                    {downloadError && (
                                        <Alert variant="warning" className="mt-3">
                                            <Alert.Heading>Download Failed</Alert.Heading>
                                            <p>Please try one of the alternative download methods below.</p>
                                        </Alert>
                                    )}

                                    <div className="resume-download mt-4">
                                        {/* Primary Download Button */}
                                        <div className="text-center mb-4">
                                            <h5 className="mb-3">Download Full Resume</h5>
                                            <Button
                                                variant={fileExists ? "primary" : "secondary"}
                                                size="lg"
                                                onClick={handleDirectDownload}
                                                className="download-resume-btn px-5"
                                                disabled={isDownloading || !fileExists}
                                            >
                                                {isDownloading ? (
                                                    <>
                                                        <span className="spinner-border spinner-border-sm me-2" role="status" aria-hidden="true"></span>
                                                        Downloading...
                                                    </>
                                                ) : fileExists ? (
                                                    <>
                                                        <i className="bi bi-download me-2"></i>
                                                        Download Resume PDF
                                                    </>
                                                ) : (
                                                    <>
                                                        <i className="bi bi-exclamation-triangle me-2"></i>
                                                        File Not Available
                                                    </>
                                                )}
                                            </Button>
                                        </div>

                                        {/* Alternative Download Options */}
                                        {fileExists && (
                                            <div className="text-center">
                                                <p className="text-muted mb-3">Alternative download options:</p>
                                                <div className="d-flex justify-content-center gap-2 flex-wrap">
                                                    <Button
                                                        variant="outline-primary"
                                                        size="sm"
                                                        onClick={handleOpenInNewTab}
                                                    >
                                                        <i className="bi bi-box-arrow-up-right me-1"></i>
                                                        Open in New Tab
                                                    </Button>
                                                    <Button
                                                        variant="outline-success"
                                                        size="sm"
                                                        onClick={handleForceDownload}
                                                    >
                                                        <i className="bi bi-file-earmark-arrow-down me-1"></i>
                                                        Force Download
                                                    </Button>
                                                </div>
                                            </div>
                                        )}

                                        {/* Direct Link for Copy/Paste */}
                                        <div className="mt-4 p-3 bg-light rounded">
                                            <small className="text-muted">
                                                <strong>Direct Link:</strong><br />
                                                <code>{window.location.origin}{RESUME_URL}</code>
                                            </small>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            <div className="skills-section">
                                <h3 className="skills-title mb-4">Skills & Expertise</h3>
                                <Row className="g-4">
                                    {Object.entries(skills).map(([category, items]) => (
                                        <Col md={4} key={category}>
                                            <div className="modern-card skill-category h-100">
                                                <h4 className="skill-category-title mb-4">
                                                    <span className="category-icon">
                                                        {category === 'Technical Skills' && '🔧'}
                                                        {category === 'Creative Skills' && '🎨'}
                                                        {category === 'Musician Skills' && '🎭'}
                                                    </span>
                                                    {category}
                                                </h4>
                                                <div className="skills-list">
                                                    {items.map((skill, idx) => (
                                                        <div key={idx} className="skill-item mb-3">
                                                            <div className="d-flex justify-content-between mb-2">
                                                                <span className="skill-name">{skill.name}</span>
                                                                <span className="skill-level">{skill.level}%</span>
                                                            </div>
                                                            <div className="skill-progress">
                                                                <div
                                                                    className="skill-progress-bar"
                                                                    style={{ width: `${skill.level}%` }}
                                                                ></div>
                                                            </div>
                                                        </div>
                                                    ))}
                                                </div>
                                            </div>
                                        </Col>
                                    ))}
                                </Row>
                            </div>
                        </div>
                    </Col>

                    <Col lg={4}>
                        <div className="education-section">
                            <h3 className="education-title mb-4">Education</h3>
                            <div className="education-timeline">
                                {education.map((edu, idx) => (
                                    <div className="modern-card education-item mb-3" key={idx}>
                                        <div className="education-icon mb-2">{edu.icon}</div>
                                        <h4 className="education-institution">{edu.institution}</h4>
                                        <p className="education-degree">{edu.degree}</p>
                                        <p className="education-period">{edu.period}</p>
                                    </div>
                                ))}
                            </div>

                            <div className="modern-card mt-4 quick-actions">
                                <h4 className="mb-3">Quick Actions</h4>
                                <div className="d-grid gap-2">
                                    <Button
                                        variant={fileExists ? "outline-primary" : "outline-secondary"}
                                        onClick={handleDirectDownload}
                                        className="quick-action-btn"
                                        disabled={isDownloading || !fileExists}
                                    >
                                        {isDownloading ? (
                                            <>
                                                <span className="spinner-border spinner-border-sm me-2" role="status" aria-hidden="true"></span>
                                                Downloading...
                                            </>
                                        ) : fileExists ? (
                                            <>
                                                <i className="bi bi-file-earmark-pdf me-2"></i>
                                                Get Full Resume
                                            </>
                                        ) : (
                                            <>
                                                <i className="bi bi-exclamation-triangle me-2"></i>
                                                Resume Unavailable
                                            </>
                                        )}
                                    </Button>
                                    <Button
                                        variant="outline-success"
                                        href={`mailto:${contactInfo.email}`}
                                        className="quick-action-btn"
                                    >
                                        <i className="bi bi-envelope me-2"></i>
                                        Send Email
                                    </Button>
                                    <Button
                                        variant="outline-info"
                                        href={`tel:${contactInfo.phone}`}
                                        className="quick-action-btn"
                                    >
                                        <i className="bi bi-telephone me-2"></i>
                                        Call Now
                                    </Button>
                                </div>
                            </div>
                        </div>
                    </Col>
                </Row>
            </Container>
        </section>
    );
}

export default About;