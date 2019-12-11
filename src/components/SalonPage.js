import React from "react";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";

import Navbar from "./Navbar";
import AlliesSlider from "./AlliesSlider";
import Footer from "./Footer";
import banner from "../images/header1.jpg";
import "../styles/SalonPage.css";

function SalonPage() {
  return (
    <Container fluid className="Salon-Page">
      <Navbar />
      <Container className="SalonPage-Container">
        <Row className="SalonPage-Header-Row ">
          <img className="SalonPage-Img img-fluid" src={banner} alt="logo" />
          <div className="SalonPage-Header pl-4 pl-md-5 d-flex flex-column justify-content-center">
            <p className="Open-Close px-1 align-self-baseline">
              ¡ABIERTO AHORA!
            </p>
            <h1 className="Header-Title">Nombre del salon</h1>
            <div className="Salon-Icon d-flex mb-1">
              <span className="icon-furgoneta mr-3"></span>
              <p className="Icon d-flex mb-0 align-self-center">
                servicio a domicilio
              </p>
            </div>
            <div className="Salon-Icon d-flex ">
              <span className="icon-tienda mr-3"></span>
              <p className="Icon d-flex mb-1 align-self-center">
                servicio en el salon
              </p>
            </div>
            <h5 className="Zona mb-0">Zona</h5>
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
