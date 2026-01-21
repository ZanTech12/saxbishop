import React from 'react';
import { Container, Row, Col, Card, Button, ListGroup } from 'react-bootstrap';

function Resume() {
    const experiences = [
        {
            title: 'Founder & Creative Director',
            company: 'ANCHOR ROCK MUSIC INTERNATIONAL',
            period: 'Present',
            points: [
                'Developed innovative music curriculum',
                'Trained students in voice, instruments, and music technology',
                'Directed musical performances and productions'
            ]
        },
        {
            title: 'Senior Lecturer & Instructor',
            company: 'TENSTRINGS, STARFIELD',
            period: '2010 - Present',
            points: [
                'Taught music theory and production',
                'Conducted workshops worldwide',
                'Mentored emerging musicians'
            ]
        }
    ];

    const education = [
        {
            title: 'Advance Diploma in Music & Production',
            company: 'Tenstrings Music Institute',
            period: 'Graduated with Honors',
            points: ['Best overall graduating student', 'Specialized in music production']
        }
    ];

    return (
        <section id="resume" className="py-5">
            <Container>
                <div className="text-center mb-5">
                    <h2 className="display-4 fw-bold mb-3">Professional Journey</h2>
                    <div className="divider bg-primary mx-auto"></div>
                </div>

                <Row className="g-4">
                    <Col lg={6}>
                        <h3 className="h4 mb-4 text-primary">Experience</h3>
                        {experiences.map((exp, idx) => (
                            <Card className="mb-4 border-0 shadow-sm" key={idx}>
                                <Card.Body>
                                    <Card.Title className="h5">{exp.title}</Card.Title>
                                    <h6 className="text-primary mb-2">{exp.company}</h6>
                                    <p className="text-muted small mb-3">{exp.period}</p>
                                    <ListGroup variant="flush">
                                        {exp.points.map((point, i) => (
                                            <ListGroup.Item key={i} className="border-0 ps-0">
                                                <i className="bi bi-check-circle-fill text-primary me-2"></i>
                                                {point}
                                            </ListGroup.Item>
                                        ))}
                                    </ListGroup>
                                </Card.Body>
                            </Card>
                        ))}
                    </Col>

                    <Col lg={6}>
                        <h3 className="h4 mb-4 text-primary">Education</h3>
                        {education.map((edu, idx) => (
                            <Card className="mb-4 border-0 shadow-sm" key={idx}>
                                <Card.Body>
                                    <Card.Title className="h5">{edu.title}</Card.Title>
                                    <h6 className="text-primary mb-2">{edu.company}</h6>
                                    <p className="text-muted small mb-3">{edu.period}</p>
                                    <ListGroup variant="flush">
                                        {edu.points.map((point, i) => (
                                            <ListGroup.Item key={i} className="border-0 ps-0">
                                                <i className="bi bi-award-fill text-warning me-2"></i>
                                                {point}
                                            </ListGroup.Item>
                                        ))}
                                    </ListGroup>
                                </Card.Body>
                            </Card>
                        ))}

                        <h3 className="h4 mb-4 text-primary mt-4">Certifications</h3>
                        <Card className="border-0 shadow-sm">
                            <Card.Body>
                                <ListGroup variant="flush">
                                    <ListGroup.Item className="border-0">
                                        <i className="bi bi-patch-check-fill text-success me-2"></i>
                                        Music Production Specialist
                                    </ListGroup.Item>
                                    <ListGroup.Item className="border-0">
                                        <i className="bi bi-patch-check-fill text-success me-2"></i>
                                        Advanced Music Theory
                                    </ListGroup.Item>
                                </ListGroup>
                            </Card.Body>
                        </Card>
                    </Col>
                </Row>

                <div className="text-center mt-5">
                    <Button variant="primary" size="lg" className="px-5">
                        <i className="bi bi-download me-2"></i>
                        Download Full Resume
                    </Button>
                </div>
            </Container>
        </section>
    );
}

export default Resume;