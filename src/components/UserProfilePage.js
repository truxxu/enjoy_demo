import React, { useState, useEffect } from "react";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Tab from "react-bootstrap/Tab";
import Col from "react-bootstrap/Col";
import Nav from "react-bootstrap/Nav";
import InputGroup from "react-bootstrap/InputGroup";
import FormControl from "react-bootstrap/FormControl";
import Button from "react-bootstrap/Button";
import { connect } from "react-redux";
import PropTypes from "prop-types";
import * as _ from 'lodash';

import "../styles/UserProfilePage.css";
import Footer from "./Footer";
import Navbar from "./Navbar";
import { updateUser, validateUser, updateUserField } from "../actions/authentication";

function UserProfilePage(props) {

  const { currentUser, updateUser, isLoading, updateUserField } = props;
  const [keyMask, setMask] = useState(true);

  useEffect(() => {
    validateUser();
  }, []);

  return (
    <Container fluid >
      <Navbar />
      <Row
        className="justify-content-center align-content-center Profile-Banner"
      >
      {
        !isLoading &&
          <div className="">
            Hola {currentUser.first_name} {currentUser.last_name}
          </div>
      }
      </Row>
      <Tab.Container id="left-tabs-example" defaultActiveKey="user">
        <Row className="Profile-Box">
          <Col sm={2}></Col>
          <Col >
            <Nav className="flex-column Profile-Nav">
              <Nav.Item>
                <Nav.Link eventKey="user">
                  <span className="icon-usuario Tab-Icon"></span>
                </Nav.Link>
              </Nav.Item>
              <Nav.Item>
                <Nav.Link eventKey="favorites">
                  <span className="icon-corazones Tab-Icon"></span>
                </Nav.Link>
              </Nav.Item>
              <Nav.Item>
                <Nav.Link eventKey="reservations">
                  <span className="icon-calendario Tab-Icon"></span>
                </Nav.Link>
              </Nav.Item>
            </Nav>
          </Col>
          <Col sm={7}>
            <Tab.Content>
              { !isLoading &&
                <Tab.Pane eventKey="user">
                  <Row className="Modal-Row">
                    <Col md={6} className="Modal-Col">
                      <div className="Modal-Input-Box">
                        <label
                          className={
                            currentUser.first_name === '' ?
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
                            value={ currentUser.first_name }
                            onChange={event =>
                              updateUserField({ first_name: event.target.value })}
                          />
                        </InputGroup>
                      </div>
                      <div className="Modal-Input-Box">
                        <label
                          className={
                            currentUser.last_name === '' ?
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
                            value={currentUser.last_name}
                            onChange={event =>
                              updateUserField({ last_name: event.target.value })}
                          />
                        </InputGroup>
                      </div>
                      <div className="Modal-Input-Box">
                        <label
                          className="Modal-Input-Label"
                        >
                          Fecha de nacimiento*
                        </label>
                        <InputGroup className="mb-3">
                          <FormControl
                            className="Modal-Input"
                            placeholder="DD/MM/AA"
                            aria-label="birth_date"
                            aria-describedby="basic-addon1"
                            value={currentUser.birth_date}
                            onChange={event =>
                              updateUserField({ birth_date: event.target.value })}
                          />
                        </InputGroup>
                      </div>
                    </Col>
                    <Col md={6} className="Modal-Col">
                      <div className="Modal-Input-Box">
                        <label
                          className={
                            currentUser.phone === '' ?
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
                            value={currentUser.phone}
                            onChange={event =>
                              updateUserField({ phone: event.target.value })}
                          />
                        </InputGroup>
                      </div>
                      <div className="Modal-Input-Box">
                        <label
                          className="Modal-Input-Label"
                        >
                          Correo*
                        </label>
                        <InputGroup className="mb-3">
                          <FormControl
                            className="Modal-Input"
                            placeholder="Correo*"
                            aria-label="username"
                            aria-describedby="basic-addon1"
                            value={currentUser.username}
                            disabled={true}
                          />
                        </InputGroup>
                      </div>
                      <div className="Modal-Input-Box">
                        <label
                          className="Modal-Input-Label"
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
                            value={currentUser.password || ''}
                            onChange={event =>
                              updateUserField({ password: event.target.value })}
                          />
                          <InputGroup.Append>
                            <Button
                              onClick={() => setMask(!keyMask)}
                              className="Modal-Password"
                            >
                              <span className="icon-lupa"></span>
                            </Button>
                          </InputGroup.Append>
                        </InputGroup>
                      </div>
                    </Col>
                  </Row>
                  <Row className="justify-content-end">
                    <Button
                      onClick={() => updateUser(currentUser)}
                      className="justify-content-center Modal-Button-Active Register-Modal-Button"
                    >
                      Guardar
                    </Button>
                  </Row>
                </Tab.Pane>
              }
              <Tab.Pane eventKey="favorites">
                <label className="Profile-Label">Servicios Favoritos</label>
              </Tab.Pane>
              <Tab.Pane eventKey="reservations">
                <label className="Profile-Label">Reservas Programadas</label>
              </Tab.Pane>
            </Tab.Content>
          </Col>
          <Col sm={2}></Col>
        </Row>
      </Tab.Container>
      <Footer />
    </Container>
  );
}

const mapStateToProps = state => {
  return {
    currentUser: state.authentication.currentUser,
    isLoading: state.authentication.isLoading,
  };
};

const mapDispatchToProps = {
  updateUser,
  validateUser,
  updateUserField
};

Navbar.prototype = {
  currentUser: PropTypes.array.isRequired,
  updateUser: PropTypes.func.isRequired,
  validateUser: PropTypes.func.isRequired,
  updateUserField: PropTypes.func.isRequired,
};

export default connect(mapStateToProps, mapDispatchToProps)(UserProfilePage);
