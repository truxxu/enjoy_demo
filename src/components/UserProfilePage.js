import React, {useState} from "react";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Tab from "react-bootstrap/Tab";
import Col from "react-bootstrap/Col";
import Nav from "react-bootstrap/Nav";
import InputGroup from "react-bootstrap/InputGroup";
import FormControl from "react-bootstrap/FormControl";
import Button from "react-bootstrap/Button";

import "../styles/UserProfilePage.css";
import Footer from "./Footer";
import Navbar from "./Navbar";

function UserProfilePage() {

  const [keyMask, setMask] = useState(true);

  return (
    <Container fluid >
      <Navbar />
      <Row
        className="justify-content-center align-content-center Profile-Banner"
      >
        <div className="">
          Hola #Nombre de Usuario#
        </div>
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
              <Tab.Pane eventKey="user">
                <Row className="Modal-Row">
                  <Col md={6} className="Modal-Col">
                    <div className="Modal-Input-Box">
                      <label
                        className="Modal-Input-Label"
                      >
                        Nombres*
                      </label>
                      <InputGroup className="mb-3">
                        <FormControl
                          className="Modal-Input"
                          placeholder="Nombres*"
                          aria-label="first_name"
                          aria-describedby="basic-addon1"
                        />
                      </InputGroup>
                    </div>
                    <div className="Modal-Input-Box">
                      <label
                        className="Modal-Input-Label"
                      >
                        Celular*
                      </label>
                      <InputGroup className="mb-3">
                        <FormControl
                          className="Modal-Input"
                          placeholder="Celular*"
                          aria-label="phone"
                          aria-describedby="basic-addon1"
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
                          placeholder="DD/MM/AA"
                          aria-label="birth_date"
                          aria-describedby="basic-addon1"
                        />
                      </InputGroup>
                    </div>
                  </Col>
                  <Col md={6} className="Modal-Col">
                    <div className="Modal-Input-Box">
                      <label
                        className="Modal-Input-Label"
                      >
                        Apellidos*
                      </label>
                      <InputGroup className="mb-3">
                        <FormControl
                          className="Modal-Input"
                          placeholder="Apellidos*"
                          aria-label="last_name"
                          aria-describedby="basic-addon1"
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
                  <Button className="App-Button">Guardar</Button>
                </Row>
              </Tab.Pane>
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

export default UserProfilePage;
