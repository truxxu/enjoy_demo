import React from "react";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Swiper from "react-id-swiper";

import Navbar from "./Navbar";
import AlliesSlider from "./AlliesSlider";
import Footer from "./Footer";
import banner from "../images/banner_servicios_ninos.jpg";
import banner1 from "../images/header3.jpg";
import banner2 from "../images/header1.jpg";
import "../styles/SalonPage.css";

function SalonPage() {
  const swiperParams = {
    loop: true,
    autoplay: {
      delay: 3500,
      disableOnInteraction: false
    },
    slidesPerView: 1,
    width: 375,
    breakpoints: {
      768: {
        slidesPerView: 1,
        width: 910
      }
    }
  };
  return (
    <Container fluid className="Salon-Page">
      <Navbar />
      <Container className="SalonPage-Container px-0">
        <Row className="SalonPage-Header-Row ">
          <Swiper {...swiperParams} className="SalonPage-Swiper">
            <img className="SalonPage-Img" src={banner} alt="logo" />
            <img className="SalonPage-Img" src={banner1} alt="logo" />
            <img className="SalonPage-Img" src={banner2} alt="logo" />
          </Swiper>

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
        <Row>
          <div>
            <div>
              <h1>Nombre del Servicio</h1>
              <span className="icon-corazones"></span>
              <p>POPULAR</p>
            </div>
            <p>
              loremDuis autem vel eum iriure dolor in hendrerit in vulputate
              velit esse molestie consequat, vel illum dolore eu feugiat nulla
              facilisis at vero eros et accumsan et iusto odio dignissim qui
              blandit praesent luptatum zzril delenit augue duis dolore te
              feugait nulla facilisi.
            </p>
          </div>
          <div>
            <h1>130.000</h1>
            <p>188.000</p>
            <div class="form-check form-check-radio form-check-inline">
              <label class="form-check-label">
                <input
                  class="form-check-input"
                  type="radio"
                  name="inlineRadioOptions"
                  id="inlineRadio1"
                  value="option1"
                />{" "}
                Agregar Servicio
                <span class="circle">
                  <span class="check"></span>
                </span>
              </label>
            </div>
          </div>
        </Row>
      </Container>
      <AlliesSlider />
      <Footer />
    </Container>
  );
}

export default SalonPage;
