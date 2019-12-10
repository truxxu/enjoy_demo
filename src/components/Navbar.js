import React from "react";
import Button from "react-bootstrap/Button";
import Row from "react-bootstrap/Row";
import { Link } from "react-router-dom";
import { connect } from "react-redux";
import PropTypes from "prop-types";

import logo from "../images/logo.png";
import "../styles/Navbar.css";
import { setCategory } from "../actions/categories";

function Navbar(props) {
  const { list, setCategory } = props;

  const setActiveItem = item => {
    setCategory(item);
  };

  const renderCategory = category => {
    return (
      <Link
        to="/services"
        className="App-Navbar-Link"
        key={category.id}
        onClick={() => setActiveItem(category)}
      >
        {category.name}
      </Link>
    );
  };

  return (
    <Row className="App-Navbar justify-content-between justify-content-md-center py-4">
      <div className="col-auto">
        <Link to="/">
          <img src={logo} className="App-logo" alt="logo" />
        </Link>
      </div>
      <div className="col-auto d-none d-md-flex align-items-center">
        <div className="App-Navbar-Link-List">
          {list.map(category => renderCategory(category))}
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

const mapStateToProps = state => {
  return {
    list: state.categories.list
  };
};
const mapDispatchToProps = {
  setCategory
};

Navbar.prototype = {
  list: PropTypes.array.isRequired,
  setCategory: PropTypes.func.isRequired
};

export default connect(mapStateToProps, mapDispatchToProps)(Navbar);
