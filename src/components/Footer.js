import React, { useEffect } from "react";
import "./Footer.css";
import Container from "react-bootstrap/Container";

function Footer() {
  return (
    <section id="footer">
      <Container fluid>
        <p className="copyright text-white">
          {" "}
          &copy; 2024 Parcels all rights reserved
        </p>

        <div className="socials mt-5">
          <ul className="socials-icon">
            <li>
              <a href="http://www.facebook.com">
                <i className="fa-brands fa-facebook soci-icons"></i>
              </a>
            </li>
            <li>
              <a href="http://www.twitter.com">
                <i className="fa-brands fa-twitter soci-icons"></i>
              </a>
            </li>
            <li>
              <a href="http://www.linkedin.com">
                <i className="fa-brands fa-linkedin soci-icons"></i>
              </a>
            </li>
          </ul>
        </div>
      </Container>
    </section>
  );
}

export default Footer;
