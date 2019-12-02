import React from "react";
import Button from "react-bootstrap/Button";
import Row from "react-bootstrap/Row";
import { Link } from "react-router-dom";

import logo from "../images/logo.png";
import "../styles/Navbar.css";

function Navbar() {
  return (
    <Row className="App-Navbar justify-content-between justify-content-md-center py-4">
      <div className="col-auto">
        <img src={logo} className="App-logo" alt="logo" />
      </div>
      <div className="col-auto d-none d-md-flex align-items-center">
        <div className="App-Navbar-Link-List">
          <Link to="/services" className="App-Navbar-Link">
            Mujer
          </Link>
          <Link to="/services" className="App-Navbar-Link">
            Hombre
          </Link>
          <Link to="/services" className="App-Navbar-Link">
            Niños
          </Link>
          <Link to="/services" className="App-Navbar-Link">
            Mascotas
          </Link>
        </div>
      </div>
      <div className="col-auto d-none d-md-flex align-items-center">
        <div className="App-Social-Links">
          <a href="https://instagram.com">
            <span className="icon-instagram"></span>
          </a>
          <a href="https://facebook.com">
            <span className="icon-facebook"></span>
          </a>
        </div>
      </div>
      <div className="col-auto d-flex align-items-center">
        <Button className="App-Button">Acceder</Button>
      </div>
    </Row>
  );
}

export default Navbar;
