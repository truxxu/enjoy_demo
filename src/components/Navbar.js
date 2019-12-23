import React, { useEffect } from "react";
import Button from "react-bootstrap/Button";
import Row from "react-bootstrap/Row";
import { Link } from "react-router-dom";
import { connect } from "react-redux";
import PropTypes from "prop-types";

import logo from "../images/logo.png";
import "../styles/Navbar.css";
import { validateUser, logOut } from "../actions/authentication";

function Navbar(props) {
  const { list, validateUser, logOut, token } = props;

  useEffect(() => {
    validateUser();
  }, []);

  const renderCategory = category => {
    return (
      <Link
        to={`/categories/${category.id}`}
        className="App-Navbar-Link"
        key={category.id}
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
      {        
        token===null || token === 'undefined' || token === '' ? 
        <div className="col-auto d-flex align-items-center">
          <Button className="App-Button">Acceder</Button>
        </div>
        :
        <div className="col-auto d-flex align-items-center">
          <Button className="App-Button" onClick={logOut}>Salir</Button>
        </div> 
      }
    </Row>
  );
}

const mapStateToProps = state => {
  return {
    list: state.categories.list,
    token: state.authentication.token
  };
};
const mapDispatchToProps = {
  validateUser,
  logOut
};

Navbar.prototype = {
  list: PropTypes.array.isRequired,
  validateUser: PropTypes.func.isRequired,
  logOut: PropTypes.func.isRequired,
  token: PropTypes.string.isRequired
};

export default connect(mapStateToProps, mapDispatchToProps)(Navbar);