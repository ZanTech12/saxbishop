import React from 'react';
import { Container, Row, Col, Card, Badge } from 'react-bootstrap';

function Blogs() {
    const blogs = [
        {
            title: 'The Evolution of Music Production in the Digital Age',
            date: 'Nov 15, 2024',
            excerpt: 'Exploring how technology has transformed music production and what it means for traditional techniques...',
            readTime: '8 min read',
            image: 'https://picsum.photos/seed/blog1/400/250.jpg'
        },
        {
            title: 'Teaching Music: Beyond the Notes',
            date: 'Nov 10, 2024',
            excerpt: 'My approach to music education that focuses on creativity, expression, and practical application...',
            readTime: '6 min read',
            image: 'https://picsum.photos/seed/blog2/400/250.jpg'
        },
        {
            title: 'The Healing Power of Music for Special Challenges',
            date: 'Nov 5, 2024',
            excerpt: 'How music can be a therapeutic tool for individuals with autism and other special needs...',
            readTime: '7 min read',
            image: 'https://picsum.photos/seed/blog3/400/250.jpg'
        }
    ];

    return (
        <section id="blogs" className="py-5 bg-light">
            <Container>
                <div className="text-center mb-5">
                    <h2 className="display-4 fw-bold mb-3">Musical Insights</h2>
                    <div className="divider bg-primary mx-auto"></div>
                </div>

                <Row className="g-4">
                    {blogs.map((blog, index) => (
                        <Col lg={4} md={6} key={index}>
                            <Card className="h-100 border-0 shadow-sm blog-card">
                                <div className="overflow-hidden">
                                    <Card.Img
                                        variant="top"
                                        src={blog.image}
                                        alt={blog.title}
                                        className="blog-image"
                                    />
                                </div>
                                <Card.Body>
                                    <div className="d-flex justify-content-between align-items-center mb-2">
                                        <small className="text-muted">{blog.date}</small>
                                        <Badge bg="secondary">{blog.readTime}</Badge>
                                    </div>
                                    <Card.Title className="h5">{blog.title}</Card.Title>
                                    <Card.Text className="text-muted">{blog.excerpt}</Card.Text>
                                    <a href="#" className="btn btn-link p-0 text-primary text-decoration-none">
                                        Read More <i className="bi bi-arrow-right"></i>
                                    </a>
                                </Card.Body>
                            </Card>
                        </Col>
                    ))}
                </Row>
            </Container>
        </section>
    );
}

export default Blogs;