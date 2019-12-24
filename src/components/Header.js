import React from "react";
import Row from "react-bootstrap/Row";

import SearchInput from "./SearchInput";
import "../styles/Header.css";
import logo from "../images/logo_black_yellow.png";

function Header(props) {
  if (props.data) {
    var data = props.data;
  }

  return (
    <Row className="Header-Row flex flex-column">
      {data ? (
        <img className="Header-Img " src={data.header_image} alt="logo" />
      ) : (
        <div className="col-auto d-none d-md-flex align-self-center mt-5">
          <img className="App-Header-Image" src={logo} alt="logo" />,
        </div>
      )}
      <div className="Header-Search align-self-center">
        <h1 className="Header-Title ">
          {data ? data.title : "Por que la belleza"}
          <br />
          <span className="Header-Subtitle">
            {data ? data.sub_title : "es para todos"}
          </span>
        </h1>
        <div className="d-none d-md-flex">
          <SearchInput />
        </div>
      </div>
    </Row>
  );
}

export default Header;
