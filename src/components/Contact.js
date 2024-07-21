import React from "react";
import Container from "react-bootstrap/Container";
import Col from "react-bootstrap/Col";
import Form from "react-bootstrap/Form";
import Row from "react-bootstrap/Row";
import Button from "react-bootstrap/Button";
import "./Contact.css";

function Contact() {
  return (
    <section id="contact" className="block contact-block">
      <Container>
        <div className="title-holder">
          <h2>Contact Us</h2>
          <p className="subtitle">Get connected with us</p>
        </div>

        <Form>
          <Row>
            <Col md={4}>
              <Form.Control
                placeholder="Enter your full name"
                type="text"
                required
              />
            </Col>

            <Col md={4}>
              <Form.Control
                placeholder="Enter your email address"
                type="email"
                required
              />
            </Col>

            <Col md={4}>
              <Form.Control
                placeholder="Enter your contact number"
                type="tel"
                required
              />
            </Col>
          </Row>

          <Row className="mt-3">
            <Col md={12}>
              <Form.Control
                as="textarea"
                placeholder="Leave a comment here"
                required
              />
            </Col>
          </Row>

          <div className="btn-holder">
            <Button type="submit">Submit</Button>
          </div>
        </Form>
      </Container>

      <div className="google-map pt-5">
        <iframe
          title="map"
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d317716.61984687316!2d-0.431926050898641!3d51.528605093688455!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x47d8a00baf21de75%3A0x52963a5addd52a99!2sLondon%2C%20UK!5e0!3m2!1sen!2sng!4v1721594055209!5m2!1sen!2sng"
          width= "100%"
          height="600"
          allowFullScreen=""
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
        ></iframe>
      </div>

      <Container fluid>
        <div className="contact-info">
          <ul className="d-flex icons-list">
            <li>
              <i className="fas fa-envelope contact-icon"></i>parcels@gmail.com
            </li>
            <li>
              <i className="fas fa-phone contact-icon"></i>000-000-0000
            </li>
            <li>
              <i className="fas fa-map-marker-alt contact-icon"></i>London, United Kingdom
            </li>
          </ul>
        </div>
      </Container>
    </section>
  );
}

export default Contact;
