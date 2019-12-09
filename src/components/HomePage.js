import React, { useEffect } from "react";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Swiper from "react-id-swiper";
import { Link } from "react-router-dom";
import { connect } from "react-redux";
import PropTypes from "prop-types";

import "../styles/HomePage.css";
import logo from "../images/logo.png";
import descripcion from "../images/descripcion.png";
import avon from "../images/avon.png";
import maybelline from "../images/maybelline.png";
import loreal from "../images/loreal.png";
import anamaria from "../images/anamaria.png";
import Footer from "./Footer";
import Navbar from "./Navbar";
import SearchInput from "./SearchInput";
import { getCategories, setCategory } from "../actions/categories";

function HomePage(props) {
  const { getCategories, list, setCategory } = props;

  useEffect(() => {
    getCategories();
  }, []);

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

  const setActiveItem = item => {
    setCategory(item);
  };

  const renderCategory = category => {
    return (
      <div className="col-auto App-Category-List-Item" key={category.id}>
        <Link to="/services" onClick={() => setActiveItem(category)}>
          <div className="App-Category-List-Item-Container d-flex flex-column justify-content-center">
            <img
              src={category.image}
              className="App-Category-List-Item-Image"
              alt="{category.name}"
            />
          </div>
        </Link>
        <Link to="/services" onClick={() => setActiveItem(category)}>
          <p className="mt-3">{category.name}</p>
        </Link>
      </div>
    );
  };
  return (
    <div className="App">
      <Container fluid>
        <Navbar />
        <Row className="App-Header d-flex flex-column py-2">
          <div className="col-auto d-none d-md-flex align-self-center mt-5">
            <img className="App-Header-Image" src={logo} alt="logo" />
          </div>
          <h1 className="App-Header-Title p-4">
            Por que la belleza
            <br />
            <span className="App-Header-Subtitle">es para todos</span>
          </h1>
          <SearchInput />
        </Row>
        <Row className="App-Category-List-Text justify-content-center py-4 px-5 mt-md-3">
          <div className="col-auto">
            <p>
              Haz <Link to="/">click</Link> y agenda tu cita a domicilio o en el
              salón
            </p>
          </div>
        </Row>
        <Row className="App-Category-List justify-content-around mb-4 mx-4">
          {list.map(category => renderCategory(category))}
        </Row>
        <Row className="App-Description align-items-center justify-content-center py-5">
          <div className="col-auto d-none d-md-flex align-items-end">
            <img
              src={descripcion}
              className="App-Description-Image"
              alt="mujer"
            />
          </div>
          <div className="col col-md-5 justify-content-center">
            <h1 className="mb-5">Porque la belleza es para todos.</h1>
            <div className="App-Description-Text px-3 px-md-0">
              <p>
                Lorem iquis nostrud exerci tation ullamcorper suscipit lobortis
                nisl ut aliquip ex ea commodo consequat.
              </p>
              <p>
                Duis autem vel eum iriure dolor in hendrerit in vulputate velit
                esse molestie consequat, vel illum dolore eu feugiat nulla
                facilisis at vero eros et accumsan et iusto odio dignissim qui
                blandit praesent luptatum zzril delenit augue duis dolore te
                feugait nulla facilisi.
              </p>
              <p>
                Tation ullamcorper suscipit lobortis nisl ut aliquip ex ea
                commodo consequat.
              </p>
            </div>
          </div>
        </Row>
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
                <img
                  src={anamaria}
                  className="App-Allies-Image"
                  alt="anamaria"
                />
              </div>
            </Swiper>
          </div>
        </Row>
        <Footer />
      </Container>
    </div>
  );
}

const mapStateToProps = state => {
  return {
    list: state.categories.list
  };
};

const mapDispatchToProps = {
  getCategories,
  setCategory
};

HomePage.prototype = {
  list: PropTypes.array.isRequired,
  getCategories: PropTypes.func.isRequired,
  setCategory: PropTypes.func.isRequired
};

export default connect(mapStateToProps, mapDispatchToProps)(HomePage);
