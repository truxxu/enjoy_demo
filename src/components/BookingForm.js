import React, { useState } from 'react';
import Modal from "react-bootstrap/Modal";
import Button from "react-bootstrap/Button";
import { connect } from "react-redux";
import PropTypes from "prop-types";
import InputGroup from "react-bootstrap/InputGroup";
import FormControl from "react-bootstrap/FormControl";
import DatePicker from "react-datepicker";
import { registerLocale, setDefaultLocale } from "react-datepicker";
import es from 'date-fns/locale/es';

import "../styles/BookingForm.css";
import "react-datepicker/dist/react-datepicker.css";
import { showForm } from "../actions/bookings";

const BookingForm = (props) => {

  registerLocale('es', es)

  const { show, showForm } = props;
  let token = localStorage.getItem('token');

  const [startDate, setStartDate] = useState(new Date());

  if (token !== null) {
    return (
      <Modal show={show} onHide={() => showForm(false)}>
        <div className="Booking-Form">
          <div className="Booking-Form-Header">
            <div className="Title-Box d-flex flex-row justify-content-between">
              <p>Nombre del Salón</p>
              <Button
                style={{padding: 0}}
                variant={'none'}
                onClick={ () => showForm(false)}>
                <p>X</p>
              </Button>
            </div>
            <p>Tiempo estimado de tu reserva: X:XX horas</p>
          </div>
          <div className="Booking-Form-Body">
            <div className="Services-Box">
              <p style ={{marginBottom: '15px'}}>Servicios</p>
              <div className="d-flex flex-row flex-wrap">
                <div
                  className="Service d-flex flex-row justify-content-around
                  align-items-center">
                  <p>Servicio 1</p>
                  <Button variant={'none'}>
                    <p>X</p>
                  </Button>
                </div>
                <div
                  className="Service d-flex flex-row justify-content-around
                  align-items-center">
                  <p>Servicio 2</p>
                  <Button variant={'none'}>
                    <p>X</p>
                  </Button>
                </div>
                <div
                  className="Service d-flex flex-row justify-content-around
                  align-items-center">
                  <p>Servicio 3</p>
                  <Button variant={'none'}>
                    <p>X</p>
                  </Button>
                </div>
              </div>
            </div>
            <div className="Date-Box">
              <p>Selecciona Fecha y Hora</p>
              <div className="d-flex justify-content-center">
                <DatePicker
                  selected={startDate}
                  onChange={date => setStartDate(date)}
                  minDate={new Date()}
                  locale="es"
                  inline
                />
              </div>
            </div>
            <div className="Time-Box">
            </div>
            <div className="Input-Box">
              <p>¿Prefieres algún profesional?</p>
              <InputGroup className="mb-3">
                <FormControl
                  maxLength={40}
                  className="Modal-Input"
                  aria-label="pro_name"
                  aria-describedby="basic-addon1"
                  // onChange={}
                />
              </InputGroup>
            </div>
            <div className="Payment-Box">
              <p>Selecciona una forma de pago</p>
              <div className="Cash d-flex flex-row">
                <InputGroup.Checkbox
                  aria-label="cash"
                  className="checkbox"
                  // checked={false}
                  // onChange={}
                />
                <p>Pagar en el centro de belleza</p>
              </div>
              <div className="Online d-flex flex-row">
                <InputGroup.Checkbox
                  aria-label="online"
                  className="checkbox"
                  // checked={false}
                  // onChange={}
                />
                <p>¡Paga online!</p>
              </div>
            </div>
            <div
              className="Coupon-Box d-flex flex-row justify-content-between
              align-content-end">
                <InputGroup>
                  <FormControl
                    maxLength={40}
                    placeholder={'Ingresa tu cupón de descuento'}
                    className="Modal-Input"
                    aria-label="coupon"
                    aria-describedby="basic-addon1"
                    // onChange={}
                  />
                </InputGroup>
              <div className="Total-Price">
                <p>Precio total</p>
                <p className="Total">$9.999.999</p>
              </div>
            </div>
            <div className="Booking-Form-Footer">
              <div className="d-flex justify-content-center">
                <Button
                  // onClick={handleCloseAlert}
                  className="justify-content-center Modal-Button-Active
                  Register-Modal-Button"
                >
                  ¡RESERVAR YA!
                </Button>
              </div>
              <p>Consulta nuestras <a href="#">políticas de pago</a> y
              <a href="#"> cancelación de servicio</a></p>
            </div>
          </div>
        </div>
      </Modal>
    )
  } else {
    return (
      <Modal centered show={show} onHide={() => showForm(false)}>
        <div className="Non-User-Modal">
          <div className="Non-User-Modal-Header">
            Por favor registrate o inicia sesión <br /> para poder reservar tu servicio
          </div>
          <div className="Non-User-Modal-Footer">
            <div className="d-flex justify-content-around">
              <Button
                // onClick={handleCloseAlert}
                className="justify-content-center Modal-Button-Active
                Register-Modal-Button"
              >
                REGISTRARME
              </Button>
              <Button
                // onClick={handleCloseAlert}
                className="justify-content-center Modal-Button-Active
                Register-Modal-Button"
              >
                INICIAR SESIÓN
              </Button>
            </div>
          </div>
        </div>
      </Modal>
    )
  }
}

const mapStateToProps = state => {
  return {
    show: state.bookings.show,
  };
};

const mapDispatchToProps = {
  showForm,
};

BookingForm.prototype = {
  showForm: PropTypes.func.isRequired,
};

export default connect(mapStateToProps, mapDispatchToProps)(BookingForm);

