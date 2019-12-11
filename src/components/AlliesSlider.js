import React from "react";
import Row from "react-bootstrap/Row";
import Swiper from "react-id-swiper";

import avon from "../images/avon.png";
import maybelline from "../images/maybelline.png";
import loreal from "../images/loreal.png";
import anamaria from "../images/anamaria.png";
import "../styles/AlliesSlider.css";

function AlliesSlider() {
  const swiperParams = {
    loop: true,
    autoplay: {
      delay: 2500,
      disableOnInteraction: false
    },
    slidesPerView: 1,
    spaceBetween: 30,
    breakpoints: {
      768: {
        slidesPerView: 4,
        spaceBetween: 30
      }
    }
  };
  return (
    <Row className="App-Allies justify-content-center py-5">
      <div className="col-auto col-md-8">
        <h1 className="mb-5">Nuestros aliados</h1>
        <Swiper {...swiperParams}>
          <div>
            <img src={loreal} className="App-Allies-Image" alt="loreal" />
          </div>
          <div>
            <img
              src={maybelline}
              className="App-Allies-Image"
              alt="maybelline"
            />
          </div>
          <div>
            <img src={avon} className="App-Allies-Image" alt="avon" />
          </div>
          <div>
            <img src={anamaria} className="App-Allies-Image" alt="anamaria" />
          </div>
        </Swiper>
      </div>
    </Row>
  );
}

export default AlliesSlider;
