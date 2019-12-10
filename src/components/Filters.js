import React from "react";
import Dropdown from "react-bootstrap/Dropdown";
import Form from "react-bootstrap/Form";

import "../styles/Filters.css";

function Filters() {
  return (
    <div className="ServiceList-Filter d-flex justify-content-center">
      <Dropdown>
        <Dropdown.Toggle className="Filter-Button">
          <span className="icon-campana Filter-Icon"></span>
          Buscar Reserva
          <span className="icon-despleg Filter-Icon-Arrow"></span>
        </Dropdown.Toggle>
        <Dropdown.Menu className="Filter-Dropdown-List">
          <Dropdown.Item href="#" className="Filter-List-Item">A domicilio</Dropdown.Item>
          <Dropdown.Item href="#" className="Filter-List-Item">En salón</Dropdown.Item>
          <Dropdown.Item href="#" className="Filter-List-Item">Otro</Dropdown.Item>
        </Dropdown.Menu>
      </Dropdown>
      <Dropdown>
        <Dropdown.Toggle className="Filter-Button">
          <span className="icon-controles Filter-Icon"></span>
          Servicio
          <span className="icon-despleg Filter-Icon-Arrow"></span>
        </Dropdown.Toggle>
      </Dropdown>
      <Dropdown>
        <Dropdown.Toggle className="Filter-Button">
          <span className="icon-ubicacion Filter-Icon"></span>
          Ciudad
          <span className="icon-despleg Filter-Icon-Arrow"></span>
        </Dropdown.Toggle>
        <Dropdown.Menu className="Filter-Dropdown-List">
          <Dropdown.Item href="#" className="Filter-List-Item">Bogotá</Dropdown.Item>
          <Dropdown.Item href="#" className="Filter-List-Item">Cali</Dropdown.Item>
          <Dropdown.Item href="#" className="Filter-List-Item">Medellín</Dropdown.Item>
          <Dropdown.Item href="#" className="Filter-List-Item">Barranquilla</Dropdown.Item>
        </Dropdown.Menu>
      </Dropdown>
      <Dropdown>
        <Dropdown.Toggle className="Filter-Button">
          <span className="icon-objetivo Filter-Icon"></span>
          Zona
          <span className="icon-despleg Filter-Icon-Arrow"></span>
        </Dropdown.Toggle>
      </Dropdown>
      <div className="Filter-Switch d-flex align-items-center">
        Ver ofertas
        <Form className="Filter-Switch-Text">
          <Form.Check
            type="switch"
            id="custom-switch"
            label=""
          />
        </Form>
      </div>
    </div>
  );
}

export default Filters;
