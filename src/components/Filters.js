import React, { useState, useEffect } from "react";
import Dropdown from "react-bootstrap/Dropdown";
import Form from "react-bootstrap/Form";
import Modal from "react-bootstrap/Modal";
import PropTypes from "prop-types";
import { connect } from "react-redux";

import "../styles/Filters.css";
import { getCities, updateFilters } from "../actions/services";

function Filters(props) {
  const { activeItem, getCities, updateFilters, filters } = props;

  useEffect(() => {
    getCities();
  }, []);

  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  const renderZone = () => {
    return filters.cities.map(city => {
      if (filters.city === city.id) {
        return city.area.map(area => {
          return (
            <Dropdown.Item
              key={area.id}
              className="Filter-List-Item"
              onClick={() => {
                updateFilters({ zone: area.id });
                handleClose();
              }}
              variant="none"
            >
              {area.name}
            </Dropdown.Item>
          );
        });
      }
    });
  };

  const renderReserveOption = (option, index) => {
    return (
      <Dropdown.Item
        key={index}
        className="Filter-List-Item"
        onClick={() => {
          updateFilters({ reserve: option });
          handleClose();
        }}
        variant="none">
        {option == 'is_at_home' ? 'A domicilio': null}
        {option == 'is_at_salon' ? 'En salón' : null}
      </Dropdown.Item>
    );
  };

  const renderCities = city => {
    return (
      <Dropdown.Item
        key={city.id}
        className="Filter-List-Item"
        onClick={() => {
          updateFilters({ city: city.id });
          handleClose();
        }}
        variant="none"
      >
        {city.name}
      </Dropdown.Item>
    );
  };

  const renderCategories = cat => {
    if (activeItem !== null) {
      return activeItem.sub_categories.map(cat => {
        return (
          <Dropdown.Item
            key={cat.id}
            className="Filter-List-Item"
            onClick={() => {
              updateFilters({ sub_category: cat.id });
              handleClose();
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
    <div class="row Filters-Row">
      <div class="container">
      <div
        className="ServiceList-Filter d-md-flex
        justify-content-around d-none">
        <Dropdown className="flex-grow-1 d-md-flex">
          <Dropdown.Toggle className="Filter-Button">
            <span className="icon-campana Filter-Icon"></span>
            Buscar Reserva
            <span className="icon-despleg Filter-Icon-Arrow"></span>
          </Dropdown.Toggle>
          <Dropdown.Menu className="Filter-Dropdown-List w-100">
            <Dropdown.Item
              className="Filter-List-Item"
              onClick={() => {
                updateFilters({ reserve: "is_at_home" });
                handleClose();
              }}
              variant="none"
            >
              A domicilio
            </Dropdown.Item>
            <Dropdown.Item
              className="Filter-List-Item"
              onClick={() => {
                updateFilters({ reserve: "is_at_salon" });
                handleClose();
              }}
              variant="none"
            >
              En salón
            </Dropdown.Item>
          </Dropdown.Menu>
        </Dropdown>
        <Dropdown className="flex-grow-1 d-md-flex">
          <Dropdown.Toggle className="Filter-Button">
            <span className="icon-controles Filter-Icon"></span>
            Servicio
            <span className="icon-despleg Filter-Icon-Arrow"></span>
          </Dropdown.Toggle>
          <Dropdown.Menu className="Filter-Dropdown-List">
            {renderCategories()}
          </Dropdown.Menu>
        </Dropdown>
        <Dropdown className="flex-grow-1 d-md-flex">
          <Dropdown.Toggle className="Filter-Button">
            <span className="icon-ubicacion Filter-Icon"></span>
            Ciudad
            <span className="icon-despleg Filter-Icon-Arrow"></span>
          </Dropdown.Toggle>
          <Dropdown.Menu className="Filter-Dropdown-List">
            {filters.cities.map(city => renderCities(city))}
          </Dropdown.Menu>
        </Dropdown>
        <Dropdown className="flex-grow-1 d-md-flex">
          <Dropdown.Toggle className="Filter-Button">
            <span className="icon-objetivo Filter-Icon"></span>
            Zona
            <span className="icon-despleg Filter-Icon-Arrow"></span>
          </Dropdown.Toggle>
          <Dropdown.Menu className="Filter-Dropdown-List">
            {filters.city === "" && (
              <div className="Filter-List-Item">Selecciona una ciudad</div>
            )}
            {renderZone()}
          </Dropdown.Menu>
        </Dropdown>
        <div className="Filter-Switch d-flex align-items-center">
          Ver ofertas
          <Form className="Filter-Switch-Text">
            <Form.Check
              type="switch"
              id="custom-switch"
              label=""
              variant="none"
              checked={filters.is_sale}
              onChange={() => updateFilters({ is_sale: !filters.is_sale })}
            />
          </Form>
        </div>
      </div>
      <div className="ServiceList-Filter-Mobile">
        <Dropdown.Item
          onClick={handleShow}
          variant="none"
          className="Mobile-Filter-Button"
        >
          <span className="icon-controles"></span>
        </Dropdown.Item>
      </div>
      <Modal className="Filter-Modal" show={show} onHide={handleClose}>
        <div className="Filter-Modal-Title">
          <a style={{ visibility: "hidden" }}>X</a>
          <div>Filtra</div>
          <a href="" onClick={handleClose} className="Modal-Close">
            X
          </a>
        </div>
        <div className="Filter-Switch">
          <div>Ver ofertas</div>
          <Form className="Filter-Switch-Text">
            <Form.Check
              type="switch"
              id="custom-switch"
              label=""
              variant="none"
              checked={filters.is_sale}
              onChange={() => updateFilters({ is_sale: !filters.is_sale })}
            />
          </Form>
        </div>
        <Dropdown>
          <Dropdown.Toggle className="Filter-Button">
            <div className="">
              <span className="icon-campana Filter-Icon"></span>
              Buscar Reserva
            </div>
            <span className="icon-despleg Filter-Icon-Arrow"></span>
          </Dropdown.Toggle>
          <Dropdown.Menu className="Filter-Dropdown-List">
            {filters.reserve_options.map((option, index) =>
              renderReserveOption(option, index)
            )}
          </Dropdown.Menu>
        </Dropdown>
        <Dropdown>
          <Dropdown.Toggle className="Filter-Button">
            <div>
              <span className="icon-controles Filter-Icon"></span>
              Servicio
            </div>
            <span className="icon-despleg Filter-Icon-Arrow"></span>
          </Dropdown.Toggle>
          <Dropdown.Menu className="Filter-Dropdown-List">
            {renderCategories()}
          </Dropdown.Menu>
        </Dropdown>
        <Dropdown>
          <Dropdown.Toggle className="Filter-Button">
            <div>
              <span className="icon-ubicacion Filter-Icon"></span>
              Ciudad
            </div>
            <span className="icon-despleg Filter-Icon-Arrow"></span>
          </Dropdown.Toggle>
          <Dropdown.Menu className="Filter-Dropdown-List">
            {filters.cities.map(city => renderCities(city))}
          </Dropdown.Menu>
        </Dropdown>
        <Dropdown>
          <Dropdown.Toggle className="Filter-Button">
            <div className="">
              <span className="icon-objetivo Filter-Icon"></span>
              Zona
            </div>
            <span className="icon-despleg Filter-Icon-Arrow"></span>
          </Dropdown.Toggle>
          <Dropdown.Menu className="Filter-Dropdown-List">
            {filters.city === "" && (
              <div className="Filter-List-Item">Selecciona una ciudad</div>
            )}
            {renderZone()}
          </Dropdown.Menu>
        </Dropdown>
      </Modal>
      </div>
    </div>
  );
}

const mapStateToProps = state => {
  return {
    activeItem: state.categories.activeItem,
    filters: state.services.filters
  };
};

const mapDispatchToProps = {
  getCities,
  updateFilters
};

Filters.prototype = {
  activeItem: PropTypes.object.isRequired,
  filters: PropTypes.object.isRequired,
  getCities: PropTypes.func.isRequired,
  updateFilters: PropTypes.func.isRequired
};

export default connect(mapStateToProps, mapDispatchToProps)(Filters);
