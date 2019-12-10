import React from "react";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";

import Navbar from "./Navbar";
import AlliesSlider from "./AlliesSlider";
import Footer from "./Footer";
import banner from "../images/banner_servicios_ninos.jpg";

function SalonPage() {
  return (
    <Container fluid className="Salon-Page">
      <Navbar />
      <Container>
        <Row className="Header-Row flex flex-column">
          <img className="Header-Img img-fluid" src={banner} alt="logo" />
          <div className="Header-Search align-self-center">
            <h1 className="Header-Title">Nombre salon</h1>
            <p>servicio a domicilio</p>
            <p>servicio en el salon</p>
            <h5>Zona</h5>
            <p>Direccion, Ciudad</p>
          </div>
        </Row>
      </Container>
      <AlliesSlider />
      <Footer />
    </Container>
  );
}

export default SalonPage;
