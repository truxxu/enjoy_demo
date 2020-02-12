import React, { useEffect } from 'react';
import Button from "react-bootstrap/Button";
import { connect } from "react-redux";
import PropTypes from "prop-types";
import * as moment from 'moment';

import "../styles/BookingCard.css";
import { getBookings } from "../actions/bookings";

function BookingCard(props) {

  const { getBookings, list } = props;

  useEffect(() => {
    getBookings();
  }, []);

  const renderService = (item) => {
    return(
      <div key={item.id}>
        <p style={{margin: 0}} className="Booking-Title">{item.service_name}</p>
        <p style={{margin: 0}} className="Booking-Text-Time">{item.duration} min</p>
      </div>
    )
  }

  const renderReserveCard = (item,index) => {
    return(
      <div key={index} className="Booking-Card p-4 mb-4 row">
        <div className="col-lg-6">
          <p className="Booking-Title">{item.salon_name}</p>
          <p className="Booking-Text">{item.salon_address}</p>
          <p className="Booking-Text">{item.salon_phone}</p>
          <p className="Booking-Text">{item.contact_name}</p>
          <br/>
          {
            item.reserved_services.map(item => renderService(item))
          }
        </div>
        <div className="col-lg-6 flex">
          <p className="Booking-Title">Datos de la reserva</p>
          <p className="Booking-Title">Fecha:</p>
          <p className="Booking-Datetime">
            { moment(item.reservation_datetime).format('DD/MM/YYYY') }
          </p>
          <p className="Booking-Title">Hora:</p>
          <p className="Booking-Datetime">
            { moment(item.reservation_datetime).format('h:mm:ss a') }
          </p>
          <br/>
          <Button
            variant={'none'}
            // onClick={}
            className="Booking-Button">
            CANCELAR RESERVA
          </Button>
        </div>
      </div>
    )
  }

  if (list.lenght !== 0) {
    return list.map((reserve,index) => renderReserveCard(reserve,index))
  } else {
    return(
      <p>Aún no tienes reservas</p>
    )
  }
};

const mapStateToProps = state => {
  return {
    list: state.bookings.list
  };
};

const mapDispatchToProps = {
  getBookings
};

BookingCard.prototype = {
  list: PropTypes.array.isRequired,
  getBookings: PropTypes.func.isRequired,
};

export default connect(mapStateToProps, mapDispatchToProps)(BookingCard);
