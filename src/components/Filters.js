import React from "react";
import Row from "react-bootstrap/Row";
import Dropdown from "react-bootstrap/Dropdown";
import Form from "react-bootstrap/Form";

import "../styles/Filters.css";

function Filters() {
  return (
    <React.Fragment>
        <Row className="ServiceList-Filter">
          <Dropdown>
            <Dropdown.Toggle>
              <span className="icon-campana"></span>
              Buscar Reserva
            </Dropdown.Toggle>

            <Dropdown.Menu>
              <Dropdown.Item href="#">A domicilio</Dropdown.Item>
              <Dropdown.Item href="#">En salón</Dropdown.Item>
              <Dropdown.Item href="#">Otro</Dropdown.Item>
            </Dropdown.Menu>
          </Dropdown>
          <Dropdown>
            <Dropdown.Toggle>
              <span className="icon-controles"></span>
              Servicio
            </Dropdown.Toggle>
          </Dropdown>
          <Dropdown>
            <Dropdown.Toggle>
              <span className="icon-ubicacion"></span>
              Ciudad
            </Dropdown.Toggle>

            <Dropdown.Menu>
              <Dropdown.Item href="#">Bogotá</Dropdown.Item>
              <Dropdown.Item href="#">Cali</Dropdown.Item>
              <Dropdown.Item href="#">Medellín</Dropdown.Item>
              <Dropdown.Item href="#">Barranquilla</Dropdown.Item>
            </Dropdown.Menu>
          </Dropdown>
          <Dropdown>
            <Dropdown.Toggle>
              <span className="icon-objetivo"></span>
              Zona
            </Dropdown.Toggle>
          </Dropdown>
          <div>
            Ver ofertas
            <Form>
              <Form.Check
                type="switch"
                id="custom-switch"
                label=""
              />
            </Form>
          </div>
        </Row>

    </React.Fragment>
  );
}

export default Filters;
