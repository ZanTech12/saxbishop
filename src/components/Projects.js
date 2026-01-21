import React from 'react';
import { Container, Row, Col, Card, Button, Badge } from 'react-bootstrap';

function Projects() {
    const projects = [
        {
            title: 'ANCHOR ROCK MUSIC INTERNATIONAL',
            description: 'Founded an innovative music institute that merges new music curriculum teaching techniques for various musical endeavors.',
            image: 'https://picsum.photos/seed/anchorrock/400/300.jpg',
            tech: ['Music Education', 'Curriculum Development', 'Performance Training'],
            link: '#'
        },
        {
            title: 'Global Gospel Concert',
            description: 'Coordinator of the renowned Global Concert gospel event, bringing together artists and audiences.',
            image: 'https://picsum.photos/seed/gospelconcert/400/300.jpg',
            tech: ['Event Coordination', 'Musical Direction', 'Production'],
            link: '#'
        },
        {
            title: 'Music for Special Challenges',
            description: 'Composed and produced music specifically designed for individuals with autism.',
            image: 'https://picsum.photos/seed/specialmusic/400/300.jpg',
            tech: ['Composition', 'Therapeutic Music', 'Special Needs Education'],
            link: '#'
        },
        {
            title: 'Chart-Topping Productions',
            description: 'Produced numerous chart-topping hits, working with both emerging talents and established stars.',
            image: 'https://picsum.photos/seed/production/400/300.jpg',
            tech: ['Music Production', 'Sound Engineering', 'Artist Development'],
            link: '#'
        }
    ];

    return (
        <section id="projects" className="py-5 bg-light">
            <Container>
                <div className="text-center mb-5">
                    <h2 className="display-4 fw-bold mb-3">My Musical Endeavors</h2>
                    <div className="divider bg-primary mx-auto"></div>
                </div>

                <Row className="g-4">
                    {projects.map((project, index) => (
                        <Col lg={6} key={index}>
                            <Card className="h-100 border-0 shadow-sm project-card">
                                <div className="overflow-hidden">
                                    <Card.Img
                                        variant="top"
                                        src={project.image}
                                        alt={project.title}
                                        className="project-image"
                                    />
                                </div>
                                <Card.Body>
                                    <Card.Title className="h4">{project.title}</Card.Title>
                                    <Card.Text className="text-muted">{project.description}</Card.Text>
                                    <div className="mb-3">
                                        {project.tech.map((tech, i) => (
                                            <Badge key={i} bg="secondary" className="me-2 mb-2">
                                                {tech}
                                            </Badge>
                                        ))}
                                    </div>
                                    <Button variant="primary" href={project.link}>
                                        Learn More <i className="bi bi-arrow-right"></i>
                                    </Button>
                                </Card.Body>
                            </Card>
                        </Col>
                    ))}
                </Row>
            </Container>
        </section>
    );
}

export default Projects;