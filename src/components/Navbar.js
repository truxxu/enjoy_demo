import React, { useEffect, useState } from "react";
import Button from "react-bootstrap/Button";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from 'react-bootstrap/Col';
import Modal from "react-bootstrap/Modal";
import Tabs from "react-bootstrap/Tabs";
import Tab from 'react-bootstrap/Tab';
import InputGroup from "react-bootstrap/InputGroup";
import FormControl from "react-bootstrap/FormControl";
import { Link } from "react-router-dom";
import { connect } from "react-redux";
import PropTypes from "prop-types";

import logo from "../images/logo.png";
import "../styles/Navbar.css";
import { setCategory } from "../actions/categories";
import SearchInput from "./SearchInput";
import { validateUser, logOut } from "../actions/authentication";

function Navbar(props) {
  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  const { list, setCategory, loggedIn, validateUser, logOut, token } = props;

  useEffect(() => {
    validateUser();
  }, []);
  let AppNavBar = '';
  let LinkList = '';
  let NavbarContainer = '';
  let SearchInputDiv = '';
  let AppHeaderSearch = '';
  let BtnAcceder = '';
  let BtnAccederMov = '';
  let SocialLinks = '';
  let SearchInputDivMov = '';

  useEffect(() => {
    window.addEventListener('scroll', handleScroll, true);
    NavbarContainer = document.getElementById('Navbar-Container');
    AppNavBar = document.getElementsByClassName('App-Navbar')[0];
    LinkList = document.getElementById('Link-List-Id');
    SocialLinks = document.getElementById('Social-Links');
    SearchInputDiv = document.getElementById('Search-Input-Id');
    AppHeaderSearch = document.getElementsByClassName('App-Header-Search')[0];
    BtnAcceder = document.getElementById('Btn-Acceder');
    SearchInputDivMov = document.getElementById('Search-Input-Id-Mov');

    var widthBrowser = window.outerWidth;
    if(widthBrowser < 768){
      SearchInputDiv.classList.add('d-none');
      SocialLinks.classList.add('d-none');
    }else{
      SearchInputDiv.classList.add('d-none');
    }

  }, []);

  const handleScroll = () => {
    positionBar();
  };

  function positionBar() {
    var widthBrowser = window.outerWidth;

    if(widthBrowser > 768){
      if (window.pageYOffset >= 450){
        setBar();
      } else {
        setBarInit();
      }
    } else {
      if (window.pageYOffset >= 230){
        setBar();
        SearchInputDiv.classList.add('d-none');
        SearchInputDivMov.classList.remove('d-none');
      } else {
        setBarMovilInit();
      }
    }
  }

  function setBar(){
    AppNavBar.classList.add('fixed-top');
    NavbarContainer.classList.remove('container');
    NavbarContainer.classList.add('container-fluid');
    LinkList.classList.remove('d-md-flex');
    SocialLinks.classList.remove('d-md-flex');
    SocialLinks.classList.add('d-none');
    SearchInputDiv.classList.remove('d-none');
    SearchInputDiv.classList.add('d-md-flex');
    AppHeaderSearch.classList.remove('mb-4');
  }

  function setBarInit() {
    NavbarContainer.classList.add('container');
    NavbarContainer.classList.remove('container-fluid');
    AppNavBar.classList.remove('fixed-top');
    LinkList.classList.add('d-md-flex');
    SocialLinks.classList.remove('d-none');
    SocialLinks.classList.add('d-md-flex');
    SearchInputDiv.classList.add('d-none');
    SearchInputDiv.classList.remove('d-md-flex');
  }

  function setBarMovilInit() {
    AppNavBar.classList.remove('fixed-top');
    SearchInputDiv.classList.add('d-none');
    SearchInputDivMov.classList.add('d-none');
  }

  const setActiveItem = item => {
    setCategory(item);
  };

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
    <Row className="App-Navbar">
      <Container id="Navbar-Container">
        <Row className="App-Navbar justify-content-between py-4">
          <div className="col-auto">
            <Link to="/">
              <img src={logo} className="App-logo" alt="logo" />
            </Link>
          </div>
          <div id="Link-List-Id" className="col-auto d-none d-md-flex align-items-center">
            <div className="App-Navbar-Link-List">
              {list.map(category => renderCategory(category))}
            </div>
          </div>
          <div id="Search-Input-Id" className="col-auto justify-content-center">
            <SearchInput />
          </div>
          <div id="Social-Links" className="col-auto d-none d-md-flex align-items-center">
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
                <Button
                  onClick={ loggedIn ? null : handleShow }
                  className="App-Button">
                  Acceder
                </Button>
             </div>
            :
             <div className="col-auto d-flex align-items-center">
                <Button
                  className="App-Button"
                  onClick={logOut}>
                  Salir
                </Button>
             </div>
          }
        </Row>
        <Row id="Search-Input-Id-Mov" className="d-none align-items-center">
          <SearchInput />
        </Row>
      </Container>
      <Modal className="Register-Modal" show={show} onHide={handleClose} centered>
        <Tabs defaultActiveKey="register" id="uncontrolled-tab-example">
          <Tab.Container className="Modal-Tab" eventKey="register" title="REGISTRATE">
            <Row className="Modal-Row">
              <Col className="Modal-Col">
                <div className="Modal-Input-Box">
                  <label className="Modal-Input-Label" htmlFor="">Nombres*</label>
                  <InputGroup className="mb-3">
                    <FormControl
                      className="Modal-Input"
                      placeholder="Nombres*"
                      aria-label="name"
                      aria-describedby="basic-addon1"
                    />
                  </InputGroup>
                </div>
                <div className="Modal-Input-Box">
                  <label className="Modal-Input-Label" htmlFor="">Celular*</label>
                  <InputGroup className="mb-3">
                    <FormControl
                      className="Modal-Input"
                      placeholder="Celular*"
                      aria-label="cellphone"
                      aria-describedby="basic-addon1"
                    />
                  </InputGroup>
                </div>
                <div className="Modal-Input-Box">
                  <label className="Modal-Input-Label" htmlFor="">Fecha de nacimiento*</label>
                  <InputGroup className="mb-3">
                    <FormControl
                      className="Modal-Input"
                      placeholder="DD/MM/AA"
                      aria-label="birthdate"
                      aria-describedby="basic-addon1"
                    />
                  </InputGroup>
                </div>
              </Col>
              <Col className="Modal-Col">
                <div className="Modal-Input-Box">
                  <label className="Modal-Input-Label" htmlFor="">Apellidos*</label>
                  <InputGroup className="mb-3">
                    <FormControl
                      className="Modal-Input"
                      placeholder="Apellidos*"
                      aria-label="lastName"
                      aria-describedby="basic-addon1"
                    />
                  </InputGroup>
                </div>
                <div className="Modal-Input-Box">
                  <label className="Modal-Input-Label" htmlFor="">Correo*</label>
                  <InputGroup className="mb-3">
                    <FormControl
                      className="Modal-Input"
                      placeholder="ejemplo@mail.com"
                      aria-label="email"
                      aria-describedby="basic-addon1"
                    />
                  </InputGroup>
                </div>
                <div className="Modal-Input-Box">
                  <label className="Modal-Input-Label" htmlFor="">Contraseña*</label>
                  <InputGroup className="mb-3">
                    <FormControl
                      className="Modal-Input"
                      placeholder="Contraseña*"
                      aria-label="password"
                      aria-describedby="basic-addon1"
                    />
                    <InputGroup.Append>
                      <Button className="Modal-Password">
                        <span className="icon-lupa"></span>
                      </Button>
                    </InputGroup.Append>
                  </InputGroup>
                </div>
              </Col>
            </Row>
            <Row className="Modal-Row Terms">
              <InputGroup.Checkbox aria-label="terms" />
              <div className="Terms-Text Terms-Start">
                Acepto
                <a href="#" className="Terms-Text">terminos y condiciones</a>
              </div>
            </Row>
            <Row className="Modal-Row Terms">
              <InputGroup.Checkbox aria-label="privacy" />
              <div className="Terms-Text Terms-Start">
                Acepto
                <a href="#" className="Terms-Text">politicas de privacidad</a>
              </div>
            </Row>
            <Row className="justify-content-center">
              <Button
                className="App-Button justify-content-center Register-Modal-Button">
                Registrarme
              </Button>
            </Row>
          </Tab.Container>
          <Tab.Container className="Modal-Tab" eventKey="login" title="INICIAR SESIÓN">
            <div className="Modal-Input-Box">
              <label className="Modal-Input-Label" htmlFor="">Correo*</label>
              <InputGroup className="mb-3">
                <FormControl
                  className="Modal-Input"
                  placeholder="Correo*"
                  aria-label="email"
                  aria-describedby="basic-addon1"
                />
              </InputGroup>
            </div>
            <div className="Modal-Input-Box">
              <label className="Modal-Input-Label" htmlFor="">Contraseña*</label>
              <InputGroup className="mb-3">
                <FormControl
                  className="Modal-Input"
                  placeholder="Contraseña*"
                  aria-label="password"
                  aria-describedby="basic-addon1"
                />
                <InputGroup.Append>
                  <Button className="Modal-Password">
                    <span className="icon-lupa"></span>
                  </Button>
                </InputGroup.Append>
              </InputGroup>
            </div>
            <Row className="justify-content-center">
              <Button className="App-Button Register-Modal-Button">Acceder</Button>
            </Row>
          </Tab.Container>
        </Tabs>
      </Modal>
    </Row>
  );
}

const mapStateToProps = state => {
  return {
    list: state.categories.list,
    loggedIn: state.authentication.loggedIn,
    token: state.authentication.token,
  };
};

const mapDispatchToProps = {
  validateUser,
  logOut
};

Navbar.prototype = {
  list: PropTypes.array.isRequired,
  loggedIn: PropTypes.object.isRequired,
  setCategory: PropTypes.func.isRequired,
  validateUser: PropTypes.func.isRequired,
  logOut: PropTypes.func.isRequired,
  token: PropTypes.string.isRequired,
};

export default connect(mapStateToProps, mapDispatchToProps)(Navbar);
