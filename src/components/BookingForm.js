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
import axios from "axios";
import moment from "moment";

import "../styles/BookingForm.css";
import "react-datepicker/dist/react-datepicker.css";
import 'rc-slider/assets/index.css';
import 'rc-tooltip/assets/bootstrap.css';
import { showForm, removeBooking, cleanBookings } from "../actions/bookings";
import { env } from "../env";

const BookingForm = (props) => {

  // Time Sliders
  const createSliderWithTooltip = Slider.createSliderWithTooltip;
  const Handle = Slider.Handle;

  const [hourValue, setHourValue] = useState(0);
  const handleHourSlider = (props) => {
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

  const [minuteValue, setMinuteValue] = useState(0);
  const handleMinSlider = (props) => {
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

  const {
    show,
    showForm,
    list,
    removeBooking,
    salon,
    totalPrice,
    duration,
    cleanBookings
  } = props;

  let token = localStorage.getItem('token');

  const [startDate, setStartDate] = useState(new Date());

  const priceStr = num => {
    return num.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ".");
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

  const [checkedRadio, setCheckedRadio] = useState(1);
  const [proName, setProName] = useState('');

  const [bookingStatus, setBookingStatus] = useState('');
  const [showStatusModal, setShowStatusModal] = useState(false);
  console.log(bookingStatus)
  console.log(showStatusModal)
  const renderBookingStatus = () => {
    if (bookingStatus === 'success') {
      return (
        <div>
          <div className="Non-User-Modal-Header">
            ¡Todo Listo! <br/> Gracias por preferir a enjoy. Tu servicio a sido
            reservado con éxito. <br/> Por favor revisa tu correo o ingresa a tu
            perfil para ver los datos completos de tu reserva.
          </div>
          <div className="Non-User-Modal-Footer">
            <div className="d-flex justify-content-around">
              <Button
                onClick={ () => {
                  showForm(false);
                }}
                className="justify-content-center Modal-Button-Active
                Register-Modal-Button"
              >
                IR A PERFIL
              </Button>
            </div>
          </div>
        </div>
      )
    } else if (bookingStatus === 'error') {
      return (
        <div>
          <div className="Non-User-Modal-Header">
            Parece que tenemos un problema. <br/> Por favor intenta reservar tu
            servicio mas tarde. <br/> Si el problema persiste, por favor
            escribenos a soporte@enjoycol.com
          </div>
          <div className="Non-User-Modal-Footer">
            <div className="d-flex justify-content-around">
              <Button
                onClick={ () => {
                  showForm(false);
                }}
                className="justify-content-center Modal-Button-Active
                Register-Modal-Button"
              >
                CERRAR
              </Button>
            </div>
          </div>
        </div>
      )
    }
  }

  const createReservation = () => {
    const getPaymentMethod = () => {
      if (checkedRadio === 1) {
        return 'at_salon'
      } else if (checkedRadio === 2) {
        return 'online'
      }
    };
    const includeServices = () => {
      let array = [];
      list.map(item => {
        const container = new Object;
        container.service = item.id;
        container.price = parseInt(item.discount_price || item.price);
        container.duration = item.duration;
        array.push(container);
      });
      return array;
    };
    const payload = {
      reservation_datetime: moment(startDate).format('YYYY-MM-DDT') +
                            parseInt(hourValue) + ':' + parseInt(minuteValue)
                            + ':00.511Z',
      payment_method: getPaymentMethod(),
      professional_name: proName,
      salon: salon.id,
      reserved_services: includeServices(),
    };

    const headers = {
      'Content-Type': 'application/json',
      'Authorization': 'Token ' + token
    };

    axios
      .post(env.apiUrl + "reservations/", payload, { headers: headers })
      .then(res => {
        showForm(false);
        setBookingStatus('success');
        setShowStatusModal(true);
      })
      .catch(err =>{
        setBookingStatus('error');
        setShowStatusModal(true);
      });
  }

  if (token !== null && list.length > 0) {
    return (
      <div>
        <Modal
          show={show}
          onHide={() => {
            cleanBookings();
            showForm(false);
          }}>
          <div className="Booking-Form">
            <div className="Booking-Form-Header">
              <div className="Title-Box d-flex flex-row justify-content-between">
                <p>{salon.name}</p>
                <Button
                  style={{padding: 0}}
                  variant={'none'}
                  onClick={ () => {
                    cleanBookings();
                    showForm(false);
                  }}>
                  <p>X</p>
                </Button>
              </div>
              <p>Tiempo estimado de tu reserva: {duration} minutos</p>
            </div>
            <div className="Booking-Form-Body">
              <div className="Services-Box">
                <p className="Services-Box-Text">Servicios</p>
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
                      handle={handleHourSlider} />
                    <Slider min={0} max={50} step={10} handle={handleMinSlider} />
                  </div>
                </div>
              </div>
              <div className="Input-Box">
                <p className="Input-Box-Text">¿Prefieres algún profesional?</p>
                <InputGroup className="mb-3">
                  <FormControl
                    maxLength={40}
                    placeholder={'Escribe el nombre'}
                    className="Modal-Input"
                    aria-label="pro_name"
                    aria-describedby="basic-addon1"
                    onChange={event => setProName(event.target.value)}
                  />
                </InputGroup>
              </div>
              <div className="Payment-Box">
                <p className="Input-Box-Text">Selecciona una forma de pago</p>
                <div className="Cash d-flex flex-row">
                  <InputGroup.Radio
                    aria-label="cash"
                    className="checkbox"
                    checked={checkedRadio === 1}
                    onChange={() => setCheckedRadio(1)}
                  />
                  <p className="Payment-Box-Text">Pagar en el centro de belleza</p>
                </div>
                <div className="Online d-flex flex-row">
                  <InputGroup.Radio
                    aria-label="online"
                    className="checkbox"
                    checked={checkedRadio === 2}
                    onChange={() => setCheckedRadio(2)}
                  />
                  <p className="Payment-Box-Text">¡Paga online!</p>
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
                  <p className="Total-Price-Text">Precio total</p>
                  <p className="Total">${priceStr(totalPrice)}</p>
                </div>
              </div>
              <div className="Booking-Form-Footer">
                <div className="d-flex justify-content-center">
                  <Button
                    onClick={ () => {
                      showForm(false);
                      createReservation();
                    }}
                    className="justify-content-center Modal-Button-Active
                    Register-Modal-Button"
                  >
                    ¡RESERVAR YA!
                  </Button>
                </div>
                <p className="Booking-Terms">Consulta nuestras <a href="#">políticas de pago</a> y
                <a href="#"> cancelación de servicio</a></p>
              </div>
            </div>
          </div>
        </Modal>
        <Modal centered show={showStatusModal}>
          <div className="Non-User-Modal">
            { renderBookingStatus() }
          </div>
        </Modal>
      </div>
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
                onClick={ () => {
                  showForm(false);
                }}
                className="justify-content-center Modal-Button-Active
                Register-Modal-Button"
              >
                REGISTRARME
              </Button>
              <Button
                onClick={ () => {
                  showForm(false);
                }}
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
    totalPrice: state.bookings.total,
    duration: state.bookings.duration,
    salon: state.salons.activeItem
  };
};

const mapDispatchToProps = {
  showForm,
  removeBooking,
  cleanBookings
};

BookingForm.prototype = {
  showForm: PropTypes.func.isRequired,
  cleanBookings: PropTypes.func.isRequired,
  removeBooking: PropTypes.func.isRequired,
  list: PropTypes.array.isRequired,
  salon: PropTypes.object.isRequired,
};

export default connect(mapStateToProps, mapDispatchToProps)(BookingForm);

