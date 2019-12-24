import React from "react";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import { Link } from "react-router-dom";

import logo from "../images/logo_yellow_black.png";
import "../styles/Footer.css";

function Footer() {
  return (
    <Row className="App-Footer">
      <Container className="pt-3 pb-1">
        <Row className="flex-column flex-md-row justify-content-center justify-content-md-between align-items-center mt-3">
          <Link to="/">
            <img src={logo} className="App-Footer-Logo" alt="logo" />
          </Link>
          <div className="App-Footer-Link-List d-flex flex-column flex-md-row mt-4 mt-md-0">
            <a href="#" className="App-Footer-Link mt-2 mt-md-0">
              Sobre en joy!
            </a>
            <a href="#" className="App-Footer-Link mt-2 mt-md-0">
              Preguntas frecuentes
            </a>
            <a href="#" className="App-Footer-Link mt-2 mt-md-0">
              Contáctenos
            </a>
            <a href="#" className="App-Footer-Link mt-2 mt-md-0">
              Política de privacidad
            </a>
            <a href="#" className="App-Footer-Link mt-2 mt-md-0">
              Soy un salón
            </a>
          </div>
          <div className="App-Footer-Social-Links mt-3 mt-md-0">
            <a href="https://instagram.com">
              <span className="icon-instagram"></span>
            </a>
            <a href="https://facebook.com">
              <span className="icon-facebook"></span>
            </a>
          </div>
        </Row>
        <Row className="App-Footer-Bottom flex-column flex-md-row justify-content-center justify-content-md-between mt-4 pt-2">
          <p>
            Todos los derechos reservados EN JOY!-s &copy;{" "}
            {new Date().getFullYear()}
          </p>
          <p>
            Hecho con <span className="icon-corazones"></span> por #wopudev
          </p>
        </Row>
      </Container>
    </Row>
  );
}

export default Footer;
