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
    <Row className="Header-Row align-items-center flex-column">
      {data ? (
        <img
          className="Header-Img-Category "
          src={data.header_image}
          alt="logo"
        />
      ) : (
        <div className="col-auto d-none d-md-flex align-self-center mt-5">
          <img className="App-Header-Image" src={logo} alt="logo" />
        </div>
      )}
      <div className="Header-Search ">
        {data ? (
          <h1 className="Header-Title-Category ">{data.title} </h1>
        ) : (
          <h1 className="Header-Title ">Por que la belleza </h1>
        )}
        {data ? (
          <h1 className="Header-Subtitle-Category ">{data.sub_title} </h1>
        ) : (
          <h1 className="Header-Subtitle ">es para todos </h1>
        )}
        <div className="d-none d-md-flex">
          <SearchInput />
        </div>
      </div>
    </Row>
  );
}

export default Header;
