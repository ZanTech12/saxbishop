import React, { useState } from 'react';
import { Container, Row, Col, Card, Form, Button, Alert } from 'react-bootstrap';

function Contacts() {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        subject: '',
        message: ''
    });
    const [status, setStatus] = useState('');
    const [isLoading, setIsLoading] = useState(false);

    const handleChange = (e) => {
        setFormData({
            ...formData,
            [e.target.name]: e.target.value
        });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        setIsLoading(true);
        setStatus('');

        try {
            const response = await fetch('http://localhost:5000/api/send-email', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(formData),
            });

            const data = await response.json();

            if (response.ok) {
                setStatus('Message sent successfully!');
                setFormData({ name: '', email: '', subject: '', message: '' });
            } else {
                setStatus(data.message || 'Failed to send message. Please try again.');
            }
        } catch (error) {
            setStatus('Failed to send message. Please try again.');
        } finally {
            setIsLoading(false);
        }
    };

    const contactInfo = [
        { icon: '📧', label: 'Email', value: 'info@saxbishop.com' },
        { icon: '📱', label: 'Phone', value: '+2348069434439' },
        { icon: '📍', label: 'Location', value: 'Lagos, Nigeria' },
        { icon: '🎵', label: 'ANCHOR ROCK MUSIC', value: 'Music Institute & Production' }
    ];

    return (
        <section id="contacts" className="py-5">
            <Container>
                <div className="text-center mb-5">
                    <h2 className="display-4 fw-bold mb-3">Get In Touch</h2>
                    <div className="divider bg-primary mx-auto"></div>
                </div>

                <Row className="g-4">
                    <Col lg={5}>
                        <Card className="border-0 shadow-sm h-100">
                            <Card.Body className="p-4">
                                <h3 className="h4 mb-4 text-primary">Let's Connect!</h3>
                                <p className="text-muted mb-4">
                                    I'm always interested in collaborating on musical projects, teaching opportunities, and performances.
                                </p>

                                {contactInfo.map((item, idx) => (
                                    <div key={idx} className="d-flex align-items-center mb-3 p-3 rounded-3 contact-item">
                                        <span className="display-6 me-3">{item.icon}</span>
                                        <div>
                                            <h6 className="mb-1">{item.label}</h6>
                                            <p className="mb-0 text-muted">{item.value}</p>
                                        </div>
                                    </div>
                                ))}
                            </Card.Body>
                        </Card>
                    </Col>

                    <Col lg={7}>
                        <Card className="border-0 shadow-sm">
                            <Card.Body className="p-4">
                                <Form onSubmit={handleSubmit}>
                                    <Row className="g-3">
                                        <Col md={6}>
                                            <Form.Group>
                                                <Form.Control
                                                    type="text"
                                                    name="name"
                                                    placeholder="Your Name"
                                                    value={formData.name}
                                                    onChange={handleChange}
                                                    required
                                                />
                                            </Form.Group>
                                        </Col>
                                        <Col md={6}>
                                            <Form.Group>
                                                <Form.Control
                                                    type="email"
                                                    name="email"
                                                    placeholder="Your Email"
                                                    value={formData.email}
                                                    onChange={handleChange}
                                                    required
                                                />
                                            </Form.Group>
                                        </Col>
                                        <Col xs={12}>
                                            <Form.Group>
                                                <Form.Control
                                                    type="text"
                                                    name="subject"
                                                    placeholder="Subject"
                                                    value={formData.subject}
                                                    onChange={handleChange}
                                                    required
                                                />
                                            </Form.Group>
                                        </Col>
                                        <Col xs={12}>
                                            <Form.Group>
                                                <Form.Control
                                                    as="textarea"
                                                    name="message"
                                                    placeholder="Your Message"
                                                    rows={5}
                                                    value={formData.message}
                                                    onChange={handleChange}
                                                    required
                                                />
                                            </Form.Group>
                                        </Col>
                                        <Col xs={12}>
                                            <Button
                                                variant="primary"
                                                type="submit"
                                                size="lg"
                                                disabled={isLoading}
                                                className="px-4"
                                            >
                                                {isLoading ? (
                                                    <>
                                                        <span className="spinner-border spinner-border-sm me-2" />
                                                        Sending...
                                                    </>
                                                ) : (
                                                    <>
                                                        <i className="bi bi-send me-2"></i>
                                                        Send Message
                                                    </>
                                                )}
                                            </Button>
                                        </Col>
                                    </Row>
                                </Form>

                                {status && (
                                    <Alert
                                        variant={status.includes('successfully') ? 'success' : 'danger'}
                                        className="mt-3"
                                    >
                                        {status}
                                    </Alert>
                                )}
                            </Card.Body>
                        </Card>
                    </Col>
                </Row>
            </Container>
        </section>
    );
}

export default Contacts;