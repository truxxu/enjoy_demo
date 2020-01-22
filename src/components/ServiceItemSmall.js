import React from "react";
import Row from "react-bootstrap/Row";
import { connect } from "react-redux";
import PropTypes from "prop-types";

import "../styles/ServiceItemSmall.css";
import { addOrRemoveFromBookings } from "../actions/bookings";

function ServiceItemSmall(props) {
  const data = props.data;

  const { addOrRemoveFromBookings } = props;

  const priceStr = string => {
    return string
      .split(".")[0]
      .replace(/\B(?=(\d{3})+(?!\d))/g, ".");
  };

  const finalPrice = function(price, discount_price) {
    if(discount_price===null){
      return price;
    }else{
      return discount_price;
    }
  };

  return (
    <Row className="Service-Item-Small my-5 ">
      <div className="Service-Item-Small-Body ml-4">
        <div className="Service-Item-Small-Description d-md-flex ">
          <div className="d-flex flex-md-grow-1">
            <h1 className="Service-Name mr-4 pt-2 mr-md-5 mb-0">{data.name}</h1>
            {data.is_favorite ? (
              <span className="icon-corazones mr-5 mr-md-1 mt-md-1 flex-md-grow-1"></span>
            ) : (
              <span className="icon-corazones false mr-5 mr-md-1 mt-md-1 "></span>
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
        <p className="Service-Duration">{data.duration} min</p>
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
            className="checkbox"
            type="checkbox"
            name="inlineRadioOptions"
            id="inlineRadio1"
            value="option1"
            onChange={() => addOrRemoveFromBookings(data)}
          />
          <label className="ml-2">Agregar</label>
        </div>
      </div>
    </Row>
  );
}

const mapDispatchToProps = {
  addOrRemoveFromBookings
};

ServiceItemSmall.prototype = {
  addOrRemoveFromBookings: PropTypes.func.isRequired
};

export default connect(null, mapDispatchToProps)(ServiceItemSmall);
