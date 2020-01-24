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
import Slider from 'rc-slider';
import Tooltip from 'rc-tooltip';

import "../styles/BookingForm.css";
import "react-datepicker/dist/react-datepicker.css";
import 'rc-slider/assets/index.css';
import 'rc-tooltip/assets/bootstrap.css';
import { showForm, removeBooking } from "../actions/bookings";

const BookingForm = (props) => {

  // Time Sliders
  const createSliderWithTooltip = Slider.createSliderWithTooltip;
  const Handle = Slider.Handle;

  const [hourValue, setHourValue] = useState(0);
  const [minuteValue, setMinuteValue] = useState(0);
  const handle = (props) => {
    const { value, dragging, index, ...restProps } = props;
    return (
      <Tooltip
        prefixCls="rc-slider-tooltip"
        overlay={value}
        visible={dragging}
        placement="top"
        key={index}
        onChange={setHourValue(value)}
      >
        <Handle value={value} {...restProps}/>
      </Tooltip>
    );
  };

  const handle2 = (props) => {
    const { value, dragging, index, ...restProps } = props;
    return (
      <Tooltip
        prefixCls="rc-slider-tooltip"
        overlay={value}
        visible={dragging}
        placement="top"
        key={index}
        onChange={setMinuteValue(value)}
      >
        <Handle value={value} {...restProps}/>
      </Tooltip>
    );
  };

  // Calendar localization
  registerLocale('es', es)

  const { show, showForm, list, removeBooking, salon } = props;
  let token = localStorage.getItem('token');

  const [startDate, setStartDate] = useState(new Date());

  const priceStr = string => {
    return string.replace(/\B(?=(\d{3})+(?!\d))/g, ".");
  };

  const renderService = (item) => {
    return (
      <div
        key={item.id}
        className="Service d-flex flex-row justify-content-around
        align-items-center">
        <p>{item.name}</p>
        <Button
          onClick={() => removeBooking(item)}
          variant={'none'}>
          <p>X</p>
        </Button>
      </div>
    )
  }

  const totalTime = () => {
    let count = 0;
    list.map(item => {
      count += item.duration
    })
    return count
  }

  const totalPrice = () => {
    let count = 0;
    list.map(item => {
      if (item.discount_price !== null) {
        count += parseInt(item.discount_price)
      } else {
        count += parseInt(item.price)
      }
    })
    return count.toString()
  }

  const days = {
    monday: 1,
    tuesday: 2,
    wednesday: 3,
    thursday: 4,
    friday: 5,
    saturday: 6,
    sunday: 0
  }

  const serviceDaysArray = [];
  for (const [key, value] of Object.entries(days)) {
    if (salon.schedule !== undefined) {
      salon.schedule.map(day => {
        if (day.day === key) {
          serviceDaysArray.push(value)
        }
      })
    }
  }

  const serviceDays = (date) => {
    const day = date.getDay();
    return serviceDaysArray.includes(day)
  }


  const workingHours = (param) => {
    if (salon.schedule !== undefined) {
      const date = startDate.getDay();
      let str = '';
      for (const [key, value] of Object.entries(days)) {
        if (date === value) {
          salon.schedule.map(day => {
            if (day.day === key) {
              str = str + day[param]
            }
          })
        }
      }
      return str.split(':')[0]
    }
  };

  if (token !== null && list.length > 0) {
    return (
      <Modal
        centered
        show={show}
        onHide={() => showForm(false)}>
        <div className="Booking-Form">
          <div className="Booking-Form-Header">
            <div className="Title-Box d-flex flex-row justify-content-between">
              <p>{salon.name}</p>
              <Button
                style={{padding: 0}}
                variant={'none'}
                onClick={ () => showForm(false)}>
                <p>X</p>
              </Button>
            </div>
            <p>Tiempo estimado de tu reserva: {totalTime('duration')} minutos</p>
          </div>
          <div className="Booking-Form-Body">
            <div className="Services-Box">
              <p style ={{marginBottom: '15px'}}>Servicios</p>
              <div className="d-flex flex-row flex-wrap">
                {list.map(item => renderService(item))}
              </div>
            </div>
            <div className="Date-Box">
              <p>Selecciona Fecha y Hora</p>
              <div className="d-flex justify-content-center">
                <DatePicker
                  selected={startDate}
                  onChange={date => setStartDate(date)}
                  minDate={new Date()}
                  filterDate={serviceDays}
                  locale="es"
                  inline
                />
              </div>
              <div className="Time-Box d-flex flex-row justify-content-center">
                <div
                className="Time-Display d-flex justify-content-center
                align-items-center">
                  {hourValue} : { minuteValue === 0 ? '00' : minuteValue }
                </div>
                <div className="Time-Sliders">
                  <Slider
                    min={parseInt(workingHours('opening_hour'))}
                    max={parseInt(workingHours('closing_hour')) - 1}
                    step={1}
                    handle={handle} />
                  <Slider min={0} max={50} step={10} handle={handle2} />
                </div>
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
                <p className="Total">${priceStr(totalPrice())}</p>
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
  } else if (list.length === 0) {
    showForm(false);
    return null;
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
                onClick={ () => showForm(false)}
                className="justify-content-center Modal-Button-Active
                Register-Modal-Button"
              >
                REGISTRARME
              </Button>
              <Button
                onClick={ () => showForm(false)}
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
    list: state.bookings.list,
    salon: state.salons.activeItem
  };
};

const mapDispatchToProps = {
  showForm,
  removeBooking
};

BookingForm.prototype = {
  showForm: PropTypes.func.isRequired,
  removeBooking: PropTypes.func.isRequired,
  list: PropTypes.array.isRequired,
  salon: PropTypes.object.isRequired,
};

export default connect(mapStateToProps, mapDispatchToProps)(BookingForm);

