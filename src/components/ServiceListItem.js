import React from "react";
import Button from "react-bootstrap/Button";
import { Link } from "react-router-dom";
import { connect } from "react-redux";
import PropTypes from "prop-types";

import "../styles/ServiceListItem.css";
import BookingForm from "./BookingForm";
import { addFavoriteService } from "../actions/favoriteService";
import { showForm, addBooking } from "../actions/bookings";
import { getSalon } from "../actions/salon";

function ServiceListItem(props) {
  const data = props.data;
  const { addFavoriteService, showForm , addBooking, getSalon} = props;

  const priceStr = string => {
    return string
      .split(".")[0]
      .replace(/\B(?=(\d{3})+(?!\d))/g, ".");
  };

  return (
    <div className="Service-Item d-flex flex-column flex-md-row  my-5 px-md-5 ">
      <BookingForm />
      <div className="Service-Img col px-0 d-md-flex ">
        <img className="Salon-Img " src={data.salon_image} alt="Salon"></img>
        <span
          className="icon-corazones"
          onClick={() => addFavoriteService(data.id)}
        ></span>
      </div>
      <div className="Salon-Service col-md-5 pl-4 d-flex flex-column ">
        <h4 className="Salon-Name pt-4">{data.salon_name}</h4>
        <p className="Salon-Address mb-0">{data.salon_address.split(",")[0]}</p>
        <div className="Star-Icons mb-md-4 mb-2 pt-1 pl-md-2">
          <span className="icon-estrella_full"></span>
          <span className="icon-estrella_full"></span>
          <span className="icon-estrella_full"></span>
          <span className="icon-estrella_med"></span>
          <span className="icon-estrella_none"></span>
        </div>
        <div className="Salon-Description">
          <p>{data.salon_description}</p>
        </div>
      </div>
      <div className="Service-Description col pl-4 d-flex flex-column justify-content-between ">
        <div className="Service-Name d-flex flex-md-column flex-row justify-content-between">
          <h4 className="Service-Name pt-4 mb-1">{data.name}</h4>
          <p className="Service-Time pt-4 pt-md-0 pr-5 pr-md-0">
            {data.duration} min
          </p>
        </div>
        <div className="Service-Price d-flex flex-md-column">
          {data.discount_price ? (
            <h3 className=" mb-md-0 pt-2 pt-md-0">
              ${priceStr(data.discount_price)}
            </h3>
          ) : (
            ""
          )}
          <p className="Service-Discount-Price pl-3 pt-2 pt-md-0 pl-md-0">
            ${priceStr(data.price)}
          </p>
        </div>
        <div className="Service-Buttons pb-4 d-flex flex-row justify-content-around">
          <Button
            onClick={() => {
              showForm(true);
              getSalon(data.salon_id);
              addBooking(data);
            }}
            className="Button mr-2">
            RESERVAR YA
          </Button>
          <Link
            to={{pathname: `/salon/${data.salon_id}`, data: data}}>
            <div className="Gray-Button">
              VER SALÓN
            </div>
          </Link>
        </div>
      </div>
    </div>
  );
}

const mapDispatchToProps = {
  addFavoriteService,
  showForm,
  addBooking,
  getSalon
};

ServiceListItem.prototype = {
  addFavoriteService: PropTypes.func.isRequired,
  showForm: PropTypes.func.isRequired,
  addBooking: PropTypes.func.isRequired,
  getSalon: PropTypes.func.isRequired,
};

export default connect(null, mapDispatchToProps)(ServiceListItem);
