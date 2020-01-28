import React, { useState } from "react";
import { render } from 'react-dom'
import Modal from "react-bootstrap/Modal";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Tab from "react-bootstrap/Tab";
import Col from "react-bootstrap/Col";
import Nav from "react-bootstrap/Nav";
import { Link, Redirect } from "react-router-dom";
import { connect } from "react-redux";
import PropTypes from "prop-types";

import "../styles/DashboardPage.css";
import logo from "../images/logo_black_white.png";
import { logOut } from "../actions/authentication";
import DashboardFooter from "./DashboardFooter";
import Board from "./Board";

function DashboardPage(props) {
  const data = props.data;

  const { logOut, currentUser, token } = props;

  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  return (
    <Container fluid className="App-Dashboard">
      
      <Tab.Container id="left-tabs-example" defaultActiveKey="user">
        <Row>
          <Col className="App-Board-Header">
            <Row className="align-items-center mt-4 mb-5">
              <Col className="d-flex">
                <div className="col-md-2">
                  <Link to="/">
                    <img src={logo} className="App-Dashboard-Logo m-3" />
                  </Link>
                </div>        
                <div className="d-md-none d-sm-block  align-self-center mr-4 ">
                  <label onClick={handleShow} className="App-Board-Icon-Menu icon-menu Tab-Icon App-Board-Pointer"></label> 
                </div>        
              </Col>
            </Row>
   
            <Nav className="App-Board-Nav d-none d-sm-none d-md-block ">
              <Nav.Item>
                <Nav.Link eventKey="user" className="App-Dashboard-Link" >
                    <label className="icon-dashboar Tab-Icon App-Board-Pointer"></label> 
                    <label className="ml-2 App-Board-Pointer">Tablero</label>
                </Nav.Link>
              </Nav.Item>
              <Nav.Item>
                <Nav.Link eventKey="favorites" className="App-Dashboard-Link">
                    <span className="icon-calendario Tab-Icon App-Board-Pointer"></span>
                    <label className="ml-2 App-Board-Pointer">Reservas</label>
                </Nav.Link>
              </Nav.Item>
              <Nav.Item>
                <Nav.Link eventKey="reservations" className="App-Dashboard-Link">
                    <span className="icon-usuario Tab-Icon App-Board-Pointer"></span>
                    <label className="ml-2 App-Board-Pointer">Perfil</label>
                </Nav.Link>
              </Nav.Item>
              <hr />
              <Nav.Item>
                <Nav.Link className="App-Dashboard-Link">
                  <a onClick={logOut} className="App-Dashboard-Link App-Board-Pointer" >
                    <span className="icon-logout Tab-Icon ico-red"></span>
                    <label className="App-Board-Pointer ml-2">Cerrar sesión</label>
                  </a>
                </Nav.Link>
              </Nav.Item>
            </Nav>

            <Modal className="Menu-Board-Modal align-items-left" show={show} onHide={handleClose}>
              <Row className="Menu-Board-Modal-Links align-items-center justify-content-around mb-5">
                <div>
                  <Link to="/">
                    <img src={logo} className="App-Dashboard-Logo mt-4" />
                  </Link>
                </div>              
                <div className="App-Board-Pointer mt-4">
                  <span onClick={handleClose} className="Modal-Close App-Board-Text">
                    X
                  </span>
                </div>
              </Row>

              <Nav className="App-Board-Nav-Mov d-flex flex-column d-sm-block">
                <Nav.Item onClick={handleClose}>
                  <Nav.Link eventKey="user" className="App-Dashboard-Link" >
                      <label className="icon-dashboar Tab-Icon App-Board-Pointer"></label> 
                      <label className="ml-2 App-Board-Pointer">Tablero</label>
                  </Nav.Link>
                </Nav.Item>
                <Nav.Item onClick={handleClose}>
                  <Nav.Link eventKey="favorites" className="App-Dashboard-Link">
                      <span className="icon-calendario Tab-Icon App-Board-Pointer"></span>
                      <label className="ml-2 App-Board-Pointer">Reservas</label>
                  </Nav.Link>
                </Nav.Item>
                <Nav.Item onClick={handleClose}>
                  <Nav.Link eventKey="reservations" className="App-Dashboard-Link">
                      <span className="icon-usuario Tab-Icon App-Board-Pointer"></span>
                      <label className="ml-2 App-Board-Pointer">Perfil</label>
                  </Nav.Link>
                </Nav.Item>
                <hr />
                <Nav.Item onClick={handleClose}>
                  <Nav.Link className="App-Dashboard-Link App-Board-Pointer">
                    <a onClick={logOut} className="App-Dashboard-Link " >
                      <span className="icon-logout Tab-Icon ico-red ico-session-close"></span>
                      <label className="App-Board-Pointer ml-2">Cerrar sesión</label>
                    </a>
                  </Nav.Link>
                </Nav.Item>
              </Nav>
            </Modal>
          </Col>
          <Col sm={10} className="">
            <Tab.Content>
              <Tab.Pane eventKey="user">
                <Board />
              </Tab.Pane>
              
              <Tab.Pane eventKey="favorites">
                <label className="Profile-Label">Servicios Favoritos</label>
              </Tab.Pane>

              <Tab.Pane eventKey="reservations">
                <label className="Profile-Label">Reservas Programadas</label>
              </Tab.Pane>
            </Tab.Content>

            <DashboardFooter />  

          </Col>
        </Row>
      </Tab.Container>
    </Container>
  );
}

const mapStateToProps = state => {
  return {
    token: state.authentication.token,
    currentUser: state.authentication.currentUser
  };
};

const mapDispatchToProps = {
  logOut
};

DashboardPage.prototype = {
  currentUser: PropTypes.object.isRequired,
  token: PropTypes.string.isRequired,
  logOut: PropTypes.func.isRequired
};

export default connect(mapStateToProps, mapDispatchToProps)(DashboardPage);
