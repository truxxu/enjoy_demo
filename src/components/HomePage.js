import React, { useEffect } from "react";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import { Link } from "react-router-dom";
import { connect } from "react-redux";
import PropTypes from "prop-types";

import "../styles/HomePage.css";
import descripcion from "../images/descripcion.png";
import Footer from "./Footer";
import Navbar from "./Navbar";
import Header from "./Header";
import AlliesSlider from "./AlliesSlider";
import SearchInput from "./SearchInput";
import { getCategories } from "../actions/categories";

function HomePage(props) {
  const { getCategories, list } = props;

  useEffect(() => {
    getCategories();
  }, []);

  const renderCategory = category => {
    return (
      <div className="col-auto App-Category-List-Item" key={category.id}>
        <Link to={`/categories/${category.id}`}>
          <div className="App-Category-List-Item-Container d-flex flex-column justify-content-center">
            <img
              src={category.image}
              className="App-Category-List-Item-Image"
              alt={category.name}
            />
          </div>
        </Link>
        <Link to={`/categories/${category.id}`}>
          <p className="mt-3">{category.name}</p>
        </Link>
      </div>
    );
  };
  return (
    <div className="App">
      <Container fluid>
        <Navbar />
        <Header />
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
        <AlliesSlider />
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
};

HomePage.prototype = {
  list: PropTypes.array.isRequired,
  getCategories: PropTypes.func.isRequired,
};

export default connect(mapStateToProps, mapDispatchToProps)(HomePage);
