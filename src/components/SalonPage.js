import React, { useEffect } from "react";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Swiper from "react-id-swiper";
import { connect } from "react-redux";
import PropTypes from "prop-types";

import Navbar from "./Navbar";
import AlliesSlider from "./AlliesSlider";
import Footer from "./Footer";
import ServiceItemSmall from "./ServiceItemSmall";
import "../styles/SalonPage.css";
import { getSalon } from "../actions/salon";

function SalonPage(props) {
  const { getSalon, activeItem, match } = props;
  let id = match.params.id;

  useEffect(() => {
    getSalon(id);
  }, []);

  const swiperParams = {
    loop: true,
    rebuildOnUpdate: true,
    shouldSwiperUpdate: true,
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

  const renderSalonService = salonService => {
    return <ServiceItemSmall key={salonService.id} data={salonService} />;
  };
  const renderImages = activeItem => {
    let images = [];
    if (activeItem.image) {
      images.push(
        <img
          className="SalonPage-Img"
          key="1"
          src={activeItem.image}
          alt="salon Image"
        />
      );
    }
    if (activeItem.image2) {
      images.push(
        <img
          className="SalonPage-Img"
          key="2"
          src={activeItem.image2}
          alt="salon Image"
        />
      );
    }
    if (activeItem.image3) {
      images.push(
        <img
          className="SalonPage-Img"
          key="3"
          src={activeItem.image3}
          alt="salon Image"
        />
      );
    }
    if (activeItem.image4) {
      images.push(
        <img
          className="SalonPage-Img"
          key="4"
          src={activeItem.image4}
          alt="salon Image"
        />
      );
    }
    if (activeItem.image5) {
      images.push(
        <img
          className="SalonPage-Img"
          key="5"
          src={activeItem.image5}
          alt="salon Image"
        />
      );
    }
    return images;
  };
  return (
    <Container fluid className="Salon-Page">
      <Navbar />
      <Container className="SalonPage-Container px-0">
        <Row className="SalonPage-Header-Row ">
          <Swiper {...swiperParams}>{renderImages(activeItem)}</Swiper>
          <div className="SalonPage-Header pl-4 pl-md-5 d-flex flex-column justify-content-center">
            {activeItem.is_open ? (
              <p className="Open px-1 align-self-baseline">¡ABIERTO AHORA!</p>
            ) : (
              <p className="Close px-1 align-self-baseline">¡CERRADO AHORA!</p>
            )}
            <h1 className="SalonPage-Title">{activeItem.name}</h1>
            {activeItem.is_at_home ? (
              <div className="Salon-Icon d-flex mb-1">
                <span className="icon-furgoneta mr-3"></span>
                <p className="Icon d-flex mb-0 align-self-center">
                  servicio a domicilio
                </p>
              </div>
            ) : null}
            {activeItem.is_at_salon ? (
              <div className="Salon-Icon d-flex ">
                <span className="icon-tienda mr-3"></span>
                <p className="Icon d-flex mb-1 align-self-center">
                  servicio en el salon
                </p>
              </div>
            ) : null}
            <h5 className="Zona mb-0">{activeItem.area_name}</h5>
            <p>
              {activeItem.address}, {activeItem.city_name}
            </p>
          </div>
        </Row>
        {activeItem &&
          activeItem.services &&
          activeItem.services.map(salonService =>
            renderSalonService(salonService)
          )}
      </Container>
      <AlliesSlider />
      <Footer />
    </Container>
  );
}

const mapStateToProps = state => {
  return {
    activeItem: state.salons.activeItem
  };
};

const mapDispatchToProps = {
  getSalon
};

SalonPage.prototype = {
  activeItem: PropTypes.array.isRequired,
  getSalon: PropTypes.func.isRequired
};

export default connect(mapStateToProps, mapDispatchToProps)(SalonPage);
