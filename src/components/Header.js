import React from "react";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import InputGroup from "react-bootstrap/InputGroup";
import FormControl from "react-bootstrap/FormControl";
import SearchInput from "./SearchInput";
import banner from "../images/banner_servicios_ninos.jpg";
import "../styles/Header.css"; 

function Header() {
  return (
    <React.Fragment>
        <Row className="Header-Row flex flex-column">
            <img className="Header-Img img-fluid" src={banner} alt="logo" />
            <div className="Header-Search align-self-center">
              <h1 className="Header-Title">
                Los mejores servicios
                <br />
                <span className="Header-Subtitle">para los niños</span>
              </h1>
              <div className="d-none d-md-flex">  
                <SearchInput />
              </div>    
            </div>
        </Row>

    </React.Fragment>
  );
}

export default Header;
