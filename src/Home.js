import { Container, Row, Col, Button } from "react-bootstrap";

function Home() {
  return (
    <>
      {/* Hero Section */}
      <section className="bg-light py-5">
        <Container>
          <Row className="align-items-center min-vh-50">
            <Col lg={6}>
              <h1 className="display-4 fw-bold mb-3">
                Welcome to Our Website
              </h1>
              <p className="lead text-muted mb-4">
                We provide innovative solutions designed to help businesses
                grow, succeed, and stay ahead in a rapidly changing world.
              </p>
              <Button variant="primary" size="lg" className="me-3">
                Get Started
              </Button>
              <Button variant="outline-primary" size="lg">
                Learn More
              </Button>
            </Col>

            <Col lg={6} className="text-center">
              <img
                src="/hero-image.png"
                alt="Hero"
                className="img-fluid"
              />
            </Col>
          </Row>
        </Container>
      </section>

      {/* About Preview */}
      <section className="py-5">
        <Container>
          <Row className="text-center">
            <Col>
              <h2>Who We Are</h2>
              <p className="text-muted">
                We are a passionate team committed to delivering quality,
                innovation, and outstanding customer experiences.
              </p>
            </Col>
          </Row>
        </Container>
      </section>

      {/* Features */}
      <section className="bg-light py-5">
        <Container>
          <Row className="text-center mb-4">
            <Col>
              <h2>Why Choose Us</h2>
            </Col>
          </Row>

          <Row>
            <Col md={4} className="mb-4">
              <div className="p-4 bg-white shadow-sm rounded">
                <h4>Quality Service</h4>
                <p>
                  We prioritize excellence and ensure the highest standards in
                  everything we do.
                </p>
              </div>
            </Col>

            <Col md={4} className="mb-4">
              <div className="p-4 bg-white shadow-sm rounded">
                <h4>Expert Team</h4>
                <p>
                  Our experienced professionals bring knowledge, creativity,
                  and dedication to every project.
                </p>
              </div>
            </Col>

            <Col md={4} className="mb-4">
              <div className="p-4 bg-white shadow-sm rounded">
                <h4>Customer Focused</h4>
                <p>
                  Your success is our priority, and we work closely with you to
                  achieve your goals.
                </p>
              </div>
            </Col>
          </Row>
        </Container>
      </section>

      {/* Call to Action */}
      <section className="py-5 text-center">
        <Container>
          <h2>Ready to Get Started?</h2>
          <p className="text-muted mb-4">
            Contact us today and discover how we can help bring your ideas to
            life.
          </p>
          <Button variant="primary" size="lg">
            Contact Us
          </Button>
        </Container>
      </section>
    </>
  );
}

export default Home;

