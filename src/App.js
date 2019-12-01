import React from 'react';
import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Button from 'react-bootstrap/Button'
import InputGroup from 'react-bootstrap/InputGroup'
import FormControl from 'react-bootstrap/FormControl'

import './App.css';
import logo from './logo.png';

function App() {
  return (
    <div className="App">
      <Container fluid>
        <Row className="App-Navbar justify-content-between justify-content-md-center py-4">
          <div className="col-auto">
            <img src={logo} className="App-logo" alt="logo" />
          </div>
          <div className="col-auto d-none d-md-flex align-items-center">
            <div className="App-Navbar-Link-List">
              <a href="#" className="App-Navbar-Link">Mujer</a>
              <a href="#" className="App-Navbar-Link">Hombre</a>
              <a href="#" className="App-Navbar-Link">Niños</a>
              <a href="#" className="App-Navbar-Link">Mascotas</a>
            </div>
          </div>
          <div className="col-auto d-none d-md-flex align-items-center">
            <div className="App-Social-Links">
              <a href="https://instagram.com"><span className="icon-instagram"></span></a>
              <a href="https://facebook.com"><span className="icon-facebook"></span></a>
            </div>
          </div>
          <div className="col-auto d-flex align-items-center">
            <Button className="App-Button">Acceder</Button>
          </div>
        </Row>
        <Row className="App-Header d-flex flex-column py-2">
          <div className="col-auto d-none d-md-flex align-self-center mt-5">
            <img className="App-Header-Image" src={logo} alt="logo" />
          </div>
          <h1 class="App-Header-Title p-4">Por que la belleza<br/><span class="App-Header-Subtitle">es para todos</span></h1>
          <InputGroup className="App-Header-Search align-self-center mb-4 px-2">
            <FormControl
              placeholder="Buscar un servicio o un salón"
              aria-label="search"
              aria-describedby="basic-addon1"
            />
            <InputGroup.Append>
              <InputGroup.Text id="basic-addon1"><span class="icon-lupa"></span></InputGroup.Text>
            </InputGroup.Append>
          </InputGroup>
        </Row>
      </Container>
    </div>
  );
}

export default App;
