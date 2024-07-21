import React from "react";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Image from 'react-bootstrap/Image';
import Unis22 from "./images/unis22.jpg";
import "./About.css"
import ProgressBar from 'react-bootstrap/ProgressBar';

function About() {
    const html = 60;
    const responsive = 95;
    const photoshop = 75;
  return (
    <section id="about" className="about-block">
      <Container className="py-4">
        <div className="title-holder">
           <h2>About Us</h2>
           <p className="subtitle">This is the stuffs that matter</p>
        </div>

        <Row>
          <Col md = {6}>
            <Image src={Unis22}fluid />
          </Col>

            <Col md = {6}>
             <p className="text-left about-word">
                Create React App doesn’t handle backend logic or databases; it just creates a 
                frontend build pipeline, so you can use it with any backend you want.
             </p>

             <p className="text-left about-word">
                Create React App doesn’t handle backend logic or databases; it just creates a 
                frontend build pipeline, so you can use it with any backend you want.
             </p>

             <div className="progress-content">
             <div className="progress-block mb-3">
                <h4 className="about-word">HTML</h4>
                <ProgressBar now={html} label={`${html}%`} />
             </div>

             <div className="progress-block mb-3">
                <h4 className="about-word">responsive</h4>
                <ProgressBar now={responsive} label={`${responsive}%`} />
             </div>

             <div className="progress-block">
                <h4 className="about-word">photoshop</h4>
                <ProgressBar now={photoshop} label={`${photoshop}%`} />
             </div>
             </div>
            </Col>
        </Row>
      </Container>
    </section>
  );
}

export default About;
