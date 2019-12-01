import React from 'react';
import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'

import './App.css';
import logo from './logo.png';

function App() {
  return (
    <div className="App">
      <Container>
        <Row className="App-Navbar justify-content-md-center py-4">
          <img src={logo} className="App-logo" alt="logo" />
        </Row>
      </Container>
    </div>
  );
}

export default App;
