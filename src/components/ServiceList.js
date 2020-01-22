import React, { useEffect, useState } from "react";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Dropdown from "react-bootstrap/Dropdown";
import InputGroup from "react-bootstrap/InputGroup";
import FormControl from "react-bootstrap/FormControl";
import { connect } from "react-redux";
import PropTypes from "prop-types";

import "../styles/ServiceList.css";
import ServiceItemSmall from "./ServiceItemSmall";
import BookingForm from "./BookingForm";
import { getCategories } from "../actions/categories";
import { getSalonServices } from "../actions/salon";
import { showForm } from "../actions/bookings";

function ServiceList(props) {
  const {
    getCategories,
    list,
    getSalonServices,
    servicesList,
    //
    showForm
  } = props;

  const salonId = props.salonId;
  const scheduleSalon = props.schedule;

  useEffect(() => {
    getCategories();
  }, []);

  useEffect(() => {
    getSalonServices(salonId, "");
  }, []);

  useEffect(() => {
    setFilteredServices(servicesList);
  }, [servicesList]);

  useEffect(() => {
    window.addEventListener("scroll", handleScroll, true);
    return () => window.removeEventListener("scroll", handleScroll, true);
  }, []);

  const handleScroll = () => {
    let Reserve = document.querySelector(".Reserve");
    var widthBrowser = window.outerWidth;

    if (widthBrowser > 768) {
      if (window.pageYOffset >= 486) {
        Reserve.classList.add("fixed-top");
        Reserve.classList.add("mt-md-5");
        Reserve.classList.add("pt-md-4");
      } else {
        Reserve.classList.remove("fixed-top");
        Reserve.classList.remove("mt-md-5");
        Reserve.classList.remove("pt-md-4");
      }
    } else {
      Reserve.classList.remove("fixed-top");
    }
  };

  const renderschedule = schedule => {
    let days = {
      monday: "lunes",
      tuesday: "martes",
      wednesday: "miercoles",
      thursday: "jueves",
      friday: "viernes",
      saturday: "sabado",
      sunday: "domingo"
    };
    return (
      <div className="d-flex justify-content-between" key={schedule.day}>
        <p className="Schedule-Day">{days[schedule.day]}</p>
        <div className="Schedule-Hour d-flex">
          <p>{schedule.opening_hour.split(":", 2).join(".")}</p>
          <p className="mx-1">-</p>
          <p>{schedule.closing_hour.split(":", 2).join(".")}</p>
        </div>
      </div>
    );
  };

  const [filteredServices, setFilteredServices] = useState([]);
  const [activeCategory, setActiveCategory] = useState("");

  const renderSalonService = salonServices => {
    return <ServiceItemSmall key={salonServices.id} data={salonServices} />;
  };

  const filterInput = event => {
    setFilteredServices(
      servicesList.filter(service => {
        return (
          service.name.toLowerCase().indexOf(event.target.value.toLowerCase()) >
          -1
        );
      })
    );
  };

  const renderCategories = cat => {
    if (list !== null) {
      return list.map(cat => {
        return (
          <Dropdown.Item
            key={cat.id}
            className={
              "Filter-List-Item" +
              (activeCategory == cat.name ? "show pl-3" : "")
            }
            onClick={() => {
              setActiveCategory(cat.name);
              getSalonServices(salonId, cat.id);
            }}
            variant="none"
          >
            {cat.name}
          </Dropdown.Item>
        );
      });
    } else {
      return null;
    }
  };

  return (
    <Row className="ServiceList-Row ">
      <BookingForm data={props.data}/>
      <Col sm={8} className="ServiceList-Body ">
        <div className="Title-Body my-4">
          <h2>Servicios</h2>
        </div>
        <Row className="Filter-Search d-flex align-items-center ">
          <Col sm={8} className="mb-4 mb-md-0">
            <InputGroup className="Search align-self-center ">
              <FormControl
                placeholder="Buscar un servicio"
                aria-label="search"
                aria-describedby="basic-addon1"
                onKeyUp={filterInput}
              />
              <InputGroup.Append>
                <InputGroup.Text id="basic-addon1">
                  <span className="icon-lupa pr-3 py-2"></span>
                </InputGroup.Text>
              </InputGroup.Append>
            </InputGroup>
          </Col>
          <Col sm={4} className="ServiceList-Dropdown">
            <Dropdown>
              <Dropdown.Toggle className="Filter-Button-Big d-flex align-items-center justify-content-between">
                <div>
                  <span className="icon-controles Filter-Icon mx-3 "></span>
                  Categoria
                </div>
                <span className="icon-despleg Filter-Icon-Arrow mr-3 p"></span>
              </Dropdown.Toggle>
              <Dropdown.Menu className="Filter-Dropdown-List">
                {renderCategories()}
              </Dropdown.Menu>
            </Dropdown>
          </Col>
        </Row>
        <h3 className="Active-Category mt-4">{activeCategory}</h3>
        {filteredServices ? (
          filteredServices.map(salonServices =>
            renderSalonService(salonServices)
          )
        ) : (
          <h6 className="Off-Service pt-4">No hay servicios</h6>
        )}
      </Col>
      <Col>
        <Row className="Reserve-Mobile d-md-none">
          <button
            onClick={() => showForm(true)}
            className="Reserve-Button my-3">
            Reserva Ya!
          </button>
        </Row>
        <Row className="Reserve flex-column my-4 pb-4 align-items-center ">
          <h1 className="Price-Reserve">$</h1>
          <button
            onClick={() => showForm(true)}
            className="Reserve-Button my-3">
            Reserva Ya!
          </button>
          <p className="Reserve-Description px-4">
            Lorem ipsum dolor sit amet, consect etuer adipiscing elit.{" "}
          </p>
        </Row>
        <Row className="Schedule my-mb-5 py-5 mx-2 flex-column">
          <h3 className="Schedule-Title">Horarios</h3>
          {scheduleSalon
            ? scheduleSalon.map(scheduleSalon => renderschedule(scheduleSalon))
            : null}
        </Row>
        <Row className="Score-Salon-Row mx-2 flex-column mt-4">
          <h1 className="Score-Salon-Title">Calificación</h1>
          <p>
            Badasa en usuarios que han reservado por{" "}
            <strong className="Score-Salon-ENJOY">EN JOY!</strong>
          </p>
          <div className="Score-Salon align-self-center">
            <span className="icon-estrella_full"></span>
            <span className="icon-estrella_full"></span>
            <span className="icon-estrella_full"></span>
            <span className="icon-estrella_med"></span>
            <span className="icon-estrella_none"></span>
          </div>
          <div className="d-flex justify-content-center">
            <h1 className="Score-Point">5,0</h1>
            <h3 className="Score-Point-  align-self-center">/5</h3>
          </div>
        </Row>
      </Col>
    </Row>
  );
}

const mapStateToProps = state => {
  return {
    list: state.categories.list,
    servicesList: state.services.list,
    // total: state.bookings.total
  };
};

const mapDispatchToProps = {
  getCategories,
  getSalonServices,
  showForm
};

ServiceList.prototype = {
  list: PropTypes.array.isRequired,
  getCategories: PropTypes.func.isRequired,
  getSalonServices: PropTypes.func.isRequired,
  showForm: PropTypes.func.isRequired,
  servicesList: PropTypes.array.isRequired,
  // total: PropTypes.number.isRequired,
};

export default connect(mapStateToProps, mapDispatchToProps)(ServiceList);
