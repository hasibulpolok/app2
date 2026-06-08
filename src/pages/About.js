import React from 'react'
import { Container, Row, Col, Card } from "react-bootstrap";

export const About = () => {
  return (
    <Container className="py-5">
      <Row className="justify-content-center">
        <Col lg={10}>
          <Card className="shadow-sm border-0">
            <Card.Body className="p-5">
              <h1 className="text-center mb-4">About Us</h1>

              <p className="lead text-center text-muted mb-5">
                We are dedicated to delivering innovative solutions and
                exceptional experiences that help businesses and individuals
                achieve their goals.
              </p>

              <Row>
                <Col md={6}>
                  <h3>Our Mission</h3>
                  <p>
                    Our mission is to provide high-quality services and
                    technology-driven solutions that create value, foster
                    growth, and build lasting relationships with our clients.
                  </p>
                </Col>

                <Col md={6}>
                  <h3>Our Vision</h3>
                  <p>
                    We aspire to be a trusted leader in our industry by
                    continuously innovating, embracing new challenges, and
                    exceeding customer expectations.
                  </p>
                </Col>
              </Row>

              <hr className="my-4" />

              <h3>Who We Are</h3>
              <p>
                Founded with a passion for excellence, our team combines
                expertise, creativity, and dedication to deliver solutions
                tailored to our clients' unique needs. We believe in
                transparency, collaboration, and continuous improvement in
                everything we do.
              </p>

              <h3>Why Choose Us</h3>
              <ul>
                <li>Professional and experienced team</li>
                <li>Customer-focused approach</li>
                <li>Reliable and innovative solutions</li>
                <li>Commitment to quality and excellence</li>
                <li>Long-term support and partnership</li>
              </ul>
            </Card.Body>
          </Card>
        </Col>
      </Row>
    </Container>
  )
}


