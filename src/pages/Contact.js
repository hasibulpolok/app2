import React from "react";

import { Container, Row, Col, Card, Form, Button } from "react-bootstrap";
function Contact() {
  return (
    <Container className="py-5">
      {" "}
      <Row className="justify-content-center">
        {" "}
        <Col lg={8}>
          {" "}
          <Card className="shadow-sm border-0">
            {" "}
            <Card.Body className="p-5">
              {" "}
              <h2 className="mb-3 text-center">Contact Us</h2>{" "}
              <p className="text-muted text-center mb-4">
                {" "}
                We'd love to hear from you. Whether you have a question, need
                support, or want to discuss a project, our team is here to help.
                Fill out the form below and we'll get back to you as soon as
                possible.{" "}
              </p>{" "}
              <Form>
                {" "}
                <Row>
                  {" "}
                  <Col md={6}>
                    {" "}
                    <Form.Group className="mb-3">
                      {" "}
                      <Form.Label>Name</Form.Label>{" "}
                      <Form.Control
                        type="text"
                        placeholder="Enter your name"
                      />{" "}
                    </Form.Group>{" "}
                  </Col>{" "}
                  <Col md={6}>
                    {" "}
                    <Form.Group className="mb-3">
                      {" "}
                      <Form.Label>Email</Form.Label>{" "}
                      <Form.Control
                        type="email"
                        placeholder="Enter your email"
                      />{" "}
                    </Form.Group>{" "}
                  </Col>{" "}
                </Row>{" "}
                <Form.Group className="mb-3">
                  {" "}
                  <Form.Label>Subject</Form.Label>{" "}
                  <Form.Control type="text" placeholder="Enter subject" />{" "}
                </Form.Group>{" "}
                <Form.Group className="mb-4">
                  {" "}
                  <Form.Label>Message</Form.Label>{" "}
                  <Form.Control
                    as="textarea"
                    rows={5}
                    placeholder="Write your message here..."
                  />{" "}
                </Form.Group>{" "}
                <div className="text-center">
                  {" "}
                  <Button variant="primary" size="lg">
                    {" "}
                    Send Message{" "}
                  </Button>{" "}
                </div>{" "}
              </Form>{" "}
            </Card.Body>{" "}
          </Card>{" "}
        </Col>{" "}
      </Row>{" "}
    </Container>
  );
}

export default Contact;
