import React from "react";
import Row from "react-bootstrap/Row";

import "../styles/ServiceItemSmall.css";

function ServiceItemSmall(props) {
  const data = props.data;

  const priceStr = string => {
    return string
      .split(".")[0]
      .split(".")[0]
      .replace(/\B(?=(\d{3})+(?!\d))/g, ".");
  };

  return (
    <Row className="Service-Item-Small my-5 ">
      <div className="Service-Item-Small-Body ml-4">
        <div className="Service-Item-Small-Description d-md-flex ">
          <div className="d-flex flex-md-grow-1">
            <h1 className="Service-Name mr-4 pt-2 mr-md-5">{data.name}</h1>
            {data.is_favorite ? (
              <span className="icon-corazones mr-5 mr-md-1 mt-md-2 flex-md-grow-1"></span>
            ) : (
              <span className="icon-corazones false mr-5 mr-md-1 mt-md-2 "></span>
            )}
          </div>
          <div className="d-flex ">
            {data.is_popular ? (
              <p className="Popular px-2 mb-1 mt-md-4 mr-md-5 ">POPULAR</p>
            ) : (
              ""
            )}
          </div>
        </div>
        <p>{data.duration} min</p>
        <p className="Description mr-4">{data.description}</p>
      </div>
      <div
        className="Service-Item-Small-Price ml-4 ml-md-0 d-flex justify-content-between 
      flex-md-column justify-content-md-around align-items-md-center"
      >
        {data.discount_price ? (
          <div className="Service-Price">
            <h2 className="mb-0">${priceStr(data.discount_price)}</h2>
            <p className="Service-Discount-Price">${priceStr(data.price)}</p>
          </div>
        ) : (
          <div className="Service-Price">
            <h2 className="mb-0">${priceStr(data.price)}</h2>
          </div>
        )}
        <div>
          <input
            className="form-check-input"
            type="radio"
            name="inlineRadioOptions"
            id="inlineRadio1"
            value="option1"
          />
          <label className="ml-2">Agregar</label>
        </div>
      </div>
    </Row>
  );
}

export default ServiceItemSmall;
