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
import FacebookLogin from 'react-facebook-login'
import GoogleLogin from 'react-google-login';

import logoMobile from "../images/logo_black_yellow.png";
import logoDesktop from "../images/logo_black_white.png";
import "../styles/Navbar.css";
import { setCategory } from "../actions/categories";
import { getCategories } from "../actions/categories";
import SearchInput from "./SearchInput";
import { validateUser, logOut, registerUser, authUser, socialAuth } from "../actions/authentication";

function Navbar(props) {

  const [showAlert, setShowAlert] = useState(false);

  const handleCloseAlert = () => setShowAlert(false);
  const handleShowAlert = () => setShowAlert(true);

  const [show, setShow] = useState(false);
  const [form, writeForm] = useState({
    first_name: '',
    last_name: '',
    phone: '',
    username: '',
    birth_date: '',
    password: ''
  });
  const [terms, setTerms] = useState({
    conditions: false,
    privacy: false,
  });
  const [keyMask, setMask] = useState(true);

  const { authUser, list, getCategories, setCategory, loggedIn, validateUser,
          logOut, token, registerUser, response, socialAuth } = props;

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  useEffect(() => {
    getCategories();
  }, []);

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

  const renderRegisterButton = () => {
    if (terms.conditions &&
        terms.privacy &&
        form.first_name !== '' &&
        form.last_name !== '' &&
        form.username !== '' &&
        form.password !== '' &&
        form.phone !== '' &&
        form.birth_date !== '') {
      return "justify-content-center Modal-Button-Active Register-Modal-Button"
    } else {
      return "justify-content-center Register-Modal-Button"
    }
  };

  const clickRegisterButton = () => {
    if (terms.conditions &&
        terms.privacy &&
        form.first_name !== '' &&
        form.last_name !== '' &&
        form.username !== '' &&
        form.password !== '' &&
        form.phone !== '' &&
        form.birth_date !== '' &&
        response) {
      registerUser(form);
      handleClose();
      handleShowAlert();
    }
  };

  const renderLoginButton = () => {
    if (form.username !== '' && form.password !== '') {
      return "justify-content-center Modal-Button-Active Register-Modal-Button"
    } else {
      return "justify-content-center Register-Modal-Button"
    }
  };

    const clickLoginButton = () => {
    if (form.username !== '' && form.password !== '') {
      authUser(form.username, form.password)
      handleClose();
    }
  };

  const responseFacebook = (response) => {
    socialAuth(response.email, response.accessToken, 'facebook');
    setShow(false);
    validateUser();
  }
  const responseGoogle = (response) => {
    socialAuth(response.profileObj.email, response.tokenId, 'google');
    setShow(false);
    validateUser();
  }

  return (
    <Row className="App-Navbar">
      <Container id="Navbar-Container">
        <Row className="App-Navbar justify-content-between py-4">
          <div className="col-auto">
            <Link to="/">
              <img src={logoMobile} className="App-logo d-md-none d-block" alt="logo" />
              <img src={logoDesktop} className="App-logo d-none d-md-block" alt="logo" />
            </Link>
          </div>
          <div
            id="Link-List-Id"
            className="col-auto d-none d-md-flex align-items-center"
          >
            <div className="App-Navbar-Link-List">
              {list.map(category => renderCategory(category))}
            </div>
          </div>
          <div id="Search-Input-Id" className="col-auto justify-content-center">
            <SearchInput />
          </div>
          <div
            id="Social-Links"
            className="col-auto d-none d-md-flex align-items-center"
          >
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
            token===null || token === 'undefined' || token === '' || token === undefined  ?
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
          <Tab.Container
            className="Modal-Tab"
            eventKey="register"
            title="REGISTRATE"
          >
            <Row className="Modal-Row">
              <Col className="Modal-Col" md={6}>
                <div className="Modal-Input-Box">
                  <label
                    className={
                      form.first_name === '' ?
                        'text-hide' :
                        'Modal-Input-Label'}
                  >
                    Nombres*
                  </label>
                  <InputGroup className="mb-3">
                    <FormControl
                      className="Modal-Input"
                      placeholder="Nombres*"
                      aria-label="first_name"
                      aria-describedby="basic-addon1"
                      onChange={event => writeForm(
                        {
                          ...form,
                          first_name: event.target.value
                        }
                      )}
                    />
                  </InputGroup>
                </div>
                <div className="Modal-Input-Box">
                  <label
                    className={
                      form.phone === '' ?
                        'text-hide' :
                        'Modal-Input-Label'}
                  >
                    Celular*
                  </label>
                  <InputGroup className="mb-3">
                    <FormControl
                      className="Modal-Input"
                      placeholder="Celular*"
                      aria-label="phone"
                      aria-describedby="basic-addon1"
                      onChange={event => writeForm(
                        {
                          ...form,
                          phone: event.target.value
                        }
                      )}
                    />
                  </InputGroup>
                </div>
                <div className="Modal-Input-Box">
                  <label
                    className="Modal-Input-Label">
                    Fecha de nacimiento*
                  </label>
                  <InputGroup className="mb-3">
                    <FormControl
                      className="Modal-Input"
                      placeholder="DD/MM/AAAA"
                      aria-label="birth_date"
                      aria-describedby="basic-addon1"
                      onChange={event => writeForm(
                        {
                          ...form,
                          birth_date: event.target.value
                        }
                      )}
                    />
                  </InputGroup>
                </div>
              </Col>
              <Col className="Modal-Col" md={6}>
                <div className="Modal-Input-Box">
                  <label
                    className={
                      form.last_name === '' ?
                        'text-hide' :
                        'Modal-Input-Label'}
                  >
                    Apellidos*
                  </label>
                  <InputGroup className="mb-3">
                    <FormControl
                      className="Modal-Input"
                      placeholder="Apellidos*"
                      aria-label="last_name"
                      aria-describedby="basic-addon1"
                      onChange={event => writeForm(
                        {
                          ...form,
                          last_name: event.target.value
                        }
                      )}
                    />
                  </InputGroup>
                </div>
                <div className="Modal-Input-Box">
                   <label
                    className={
                      form.username === '' ?
                        'text-hide' :
                        'Modal-Input-Label'}
                  >
                    Correo*
                  </label>
                  <InputGroup className="mb-3">
                    <FormControl
                      className="Modal-Input"
                      placeholder="Correo*"
                      aria-label="username"
                      aria-describedby="basic-addon1"
                      onChange={event => writeForm(
                        {
                          ...form,
                          username: event.target.value
                        }
                      )}
                    />
                  </InputGroup>
                </div>
                <div className="Modal-Input-Box">
                  <label
                    className={
                      form.password === '' ?
                        'text-hide' :
                        'Modal-Input-Label'}
                  >
                    Contraseña*
                  </label>
                  <InputGroup className="mb-3">
                    <FormControl
                      type={keyMask ? 'password' : 'text'}
                      className="Modal-Input"
                      placeholder="Contraseña*"
                      aria-label="password"
                      aria-describedby="basic-addon1"
                      onChange={event => writeForm(
                        {
                          ...form,
                          password: event.target.value
                        }
                      )}
                    />
                    <InputGroup.Append>
                      <Button
                        onClick={() => setMask(!keyMask)}
                        className="Modal-Password"
                      >
                        <span className="icon-ojo_cont"></span>
                      </Button>
                    </InputGroup.Append>
                  </InputGroup>
                </div>
              </Col>
            </Row>
            <Row className="Modal-Row Terms">
              <InputGroup.Checkbox
                aria-label="terms"
                className="checkbox"
                checked={terms.conditions}
                onChange={ () => setTerms({
                  ...terms,
                  conditions: !terms.conditions
                })}
              />
              <div className="Terms-Text Terms-Start">
                Acepto
                <a href="#" className="Terms-Text">terminos y condiciones</a>
              </div>
            </Row>
            <Row className="Modal-Row Terms">
              <InputGroup.Checkbox
                aria-label="privacy"
                className="checkbox"
                checked={terms.privacy}
                onChange={ () => setTerms({
                  ...terms,
                  privacy: !terms.privacy
                })}
              />
              <div className="Terms-Text Terms-Start">
                Acepto
                <a href="#" className="Terms-Text">politicas de privacidad</a>
              </div>
            </Row>
            <Row className="justify-content-center">
              <Button
                onClick={clickRegisterButton}
                className={renderRegisterButton()}>
                Registrarme
              </Button>
            </Row>
          </Tab.Container>
          <Tab.Container
            className="Modal-Tab"
            eventKey="login"
            title="INICIAR SESIÓN"
          >
            <Row className="justify-content-center">
              <FacebookLogin
                appId="754706191708393"
                fields="name,email,picture"
                textButton="INGRESAR CON FACEBOOK"
                responseType='code'
                icon="fa-facebook"
                cssClass="btnFacebook"
                callback={responseFacebook}
              />
            </Row>
            <Row className="justify-content-center">
              <GoogleLogin
                clientId="1027412479110-40mhofv4tesejit21d4n1ch5bukcfp54.apps.googleusercontent.com"
                className="btnGoogle"
                onSuccess={responseGoogle}
                onFailure={responseGoogle}
              >
                <i className="fa fa-google"/> <span>INGRESAR CON GOOGLE</span> 
              </GoogleLogin>
            </Row>
            <Row className="justify-content-center mb-3">
              <li type="circle">Utiliza tu mail</li>
            </Row>

            <div className="Modal-Input-Box">
               <label
                className={
                  form.username === '' ?
                    'text-hide' :
                    'Modal-Input-Label'}
              >
                Correo*
              </label>
              <InputGroup className="mb-3">
                <FormControl
                  className="Modal-Input"
                  placeholder="Correo*"
                  aria-label="username"
                  aria-describedby="basic-addon1"
                  onChange={event => writeForm(
                    {
                      ...form,
                      username: event.target.value
                    }
                  )}
                />
              </InputGroup>
            </div>
            <div className="Modal-Input-Box">
              <label
                className={
                  form.password === '' ?
                    'text-hide' :
                    'Modal-Input-Label'}
              >
                Contraseña*
              </label>
              <InputGroup className="mb-3">
                <FormControl
                  type={keyMask ? 'password' : 'text'}
                  className="Modal-Input"
                  placeholder="Contraseña*"
                  aria-label="password"
                  aria-describedby="basic-addon1"
                  onChange={event => writeForm(
                    {
                      ...form,
                      password: event.target.value
                    }
                  )}
                />
                <InputGroup.Append>
                  <Button
                    onClick={() => setMask(!keyMask)}
                    className="Modal-Password"
                  >
                    <span className="icon-ojo_cont"></span>
                  </Button>
                </InputGroup.Append>
              </InputGroup>
            </div>
            <Row className="justify-content-center">
              <Button
                onClick={clickLoginButton}
                className={renderLoginButton()}
              >
                Acceder
              </Button>
            </Row>
          </Tab.Container>
        </Tabs>
      </Modal>
      <Modal
        className="Register-Modal"
        show={showAlert}
        onHide={handleCloseAlert}
        centered
      >
        <Row className="justify-content-center">
          <div className="Alert-Modal-Text">
            ¡Registro exitoso!
          </div>
        </Row>
        <Row className="justify-content-center">
          <Button
            onClick={handleCloseAlert}
            className="justify-content-center Modal-Button-Active Register-Modal-Button"
          >
            Aceptar
          </Button>
        </Row>
      </Modal>
    </Row>
  );
}

const mapStateToProps = state => {
  return {
    list: state.categories.list,
    loggedIn: state.authentication.loggedIn,
    token: state.authentication.token,
    response: state.authentication.response,
  };
};

const mapDispatchToProps = {
  getCategories,
  validateUser,
  logOut,
  registerUser,
  authUser,
  socialAuth
};

Navbar.prototype = {
  list: PropTypes.array.isRequired,
  token: PropTypes.string.isRequired,
  loggedIn: PropTypes.object.isRequired,
  setCategory: PropTypes.func.isRequired,
  validateUser: PropTypes.func.isRequired,
  logOut: PropTypes.func.isRequired,
  registerUser: PropTypes.func.isRequired,
  authUser: PropTypes.func.isRequired,
  socialAuth: PropTypes.func.isRequired
};

export default connect(mapStateToProps, mapDispatchToProps)(Navbar);
