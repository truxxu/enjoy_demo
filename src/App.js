import React from 'react';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Button from 'react-bootstrap/Button';
import InputGroup from 'react-bootstrap/InputGroup';
import FormControl from 'react-bootstrap/FormControl';

import './App.css';
import logo from './logo.png';
import categoriaMujer from './images/mujer.png';
import categoriaHombre from './images/hombre.png';
import categoriaNiños from './images/niños.png';
import categoriaMascotas from './images/mascotas.png';

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
          <h1 className="App-Header-Title p-4">Por que la belleza<br/><span class="App-Header-Subtitle">es para todos</span></h1>
          <InputGroup className="App-Header-Search align-self-center mb-4 px-2">
            <FormControl
              placeholder="Buscar un servicio o un salón"
              aria-label="search"
              aria-describedby="basic-addon1"
            />
            <InputGroup.Append>
              <InputGroup.Text id="basic-addon1"><span className="icon-lupa"></span></InputGroup.Text>
            </InputGroup.Append>
          </InputGroup>
        </Row>
        <Row className="App-Category-List-Text justify-content-center py-4 px-5 mt-md-3">
          <div className="col-auto">
            <p>Haz <a href="#">click</a> y agenda tu cita a domicilio o en el salón</p>
          </div>
        </Row>
        <Row className="App-Category-List justify-content-center">
          <div className="col-auto App-Category-List-Item">
            <img src={categoriaMujer} className="App-Category-List-Item-Image" alt="mujer" />
            <p className="mt-3">Mujer</p>
          </div>
          <div className="col-auto App-Category-List-Item">
            <img src={categoriaHombre} className="App-Category-List-Item-Image" alt="hombre" />
            <p className="mt-3">Hombre</p>
          </div>
          <div className="col-auto App-Category-List-Item">
            <img src={categoriaNiños} className="App-Category-List-Item-Image" alt="niños" />
            <p className="mt-3">Niños</p>
          </div>
          <div className="col-auto App-Category-List-Item">
            <img src={categoriaMascotas} className="App-Category-List-Item-Image" alt="mascotas" />
            <p className="mt-3">Mascotas</p>
          </div>
        </Row>
      </Container>
    </div>
  );
}

export default App;
