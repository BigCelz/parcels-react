import React from "react";
import Carousel from "react-bootstrap/Carousel";
import Img1 from "./images/img1.jpg"
import Img2 from "./images/img2.jpg"
import Img4 from "./images/img4.jpg"
import "./Hero.css"


function Hero() {
  return (
    <section id="home" className="hero-block">
      <Carousel data-bs-theme="dark">
        <Carousel.Item>
          <img style={{height: '80vh'}}
            className="d-block w-100"
            src={Img1}
            alt="Img 1"
          />
          <Carousel.Caption>
            <h5>First slide label</h5>
            <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
          </Carousel.Caption>
        </Carousel.Item>

        <Carousel.Item>
          <img style={{height: '80vh'}}
            className="d-block w-100"
            src={Img2}
            alt="Img 2"
          />
          <Carousel.Caption>
            <h5>Second slide label</h5>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
          </Carousel.Caption>
        </Carousel.Item>

        <Carousel.Item>
          <img style={{height: '80vh'}}
            className="d-block w-100"
            src={Img4}
            alt="Img 3"
          />
          <Carousel.Caption>
            <h5>Third slide label</h5>
            <p>
              Praesent commodo cursus magna, vel scelerisque nisl consectetur.
            </p>
          </Carousel.Caption>
        </Carousel.Item>
      </Carousel>
    </section>
  );
}

export default Hero;
