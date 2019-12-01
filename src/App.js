import React from 'react';
import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'

import './App.css';
import logo from './logo.png';

function App() {
  return (
    <div className="App">
      <Container>
        <Row className="App-Navbar justify-content-center py-4">
          <div className="col-auto">
            <img src={logo} className="App-logo" alt="logo" />
          </div>
          <div className="col-auto d-flex align-items-center">
            <div className="App-Navbar-Link-List">
              <a href="#" className="App-Navbar-Link">Mujer</a>
              <a href="#" className="App-Navbar-Link">Hombre</a>
              <a href="#" className="App-Navbar-Link">Niños</a>
              <a href="#" className="App-Navbar-Link">Mascotas</a>
            </div>
          </div>
          <div className="col-auto d-flex align-items-center">
            <div className="App-Social-Links">
              <a href="https://instagram.com"><span className="icon-instagram"></span></a>
              <a href="https://facebook.com"><span className="icon-facebook"></span></a>
            </div>
          </div>
        </Row>
      </Container>
    </div>
  );
}

export default App;
