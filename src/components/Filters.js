import React, {useState} from "react";
import Dropdown from "react-bootstrap/Dropdown";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";

import "../styles/Filters.css";

function Filters(props) {

  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  console.log(props.data)

  return (
    <div>
      <div
        className="ServiceList-Filter d-md-flex
        justify-content-center d-none d-md-block">
        <Dropdown className="d-inline-block">
          <Dropdown.Toggle className="Filter-Button">
            <span className="icon-campana Filter-Icon"></span>
            Buscar Reserva
            <span className="icon-despleg Filter-Icon-Arrow"></span>
          </Dropdown.Toggle>
          <Dropdown.Menu className="Filter-Dropdown-List w-100">
            <Dropdown.Item
              href="#"
              className="Filter-List-Item">
              A domicilio
            </Dropdown.Item>
            <Dropdown.Item
              href="#"
              className="Filter-List-Item">
              En salón
            </Dropdown.Item>
            <Dropdown.Item
              href="#"
              className="Filter-List-Item">
              Otro
            </Dropdown.Item>
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
            {
              props.data.map(city => {
              return(
                <Dropdown.Item key={city.id} className="Filter-List-Item">
                  {city.name}
                </Dropdown.Item>
              )})
            }
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
              variant="none"/>
          </Form>
        </div>
      </div>
      <div className="ServiceList-Filter-Mobile">
        <Button
          onClick={handleShow}
          variant="none"
          className="Mobile-Filter-Button">
            <span className="icon-controles"></span>
        </Button>
      </div>
      <Modal className="Filter-Modal" show={show} onHide={handleClose}>
        <div className="Filter-Modal-Title">
          <a style={{visibility: "hidden"}}>X</a>
          <div>
            Filtra
          </div>
          <a
            href=""
            onClick={handleClose}
            className="Modal-Close">
            X
          </a>
        </div>
        <div className="Filter-Switch">
          <div>
            Ver ofertas
          </div>
          <Form className="Filter-Switch-Text">
            <Form.Check
              type="switch"
              id="custom-switch"
              label=""
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
            <Dropdown.Item
              href="#"
              className="Filter-List-Item">
              A domicilio
            </Dropdown.Item>
            <Dropdown.Item
              href="#"
              className="Filter-List-Item">
              En salón
            </Dropdown.Item>
            <Dropdown.Item
              href="#"
              className="Filter-List-Item">
              Otro
            </Dropdown.Item>
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
            <Dropdown.Item
              href="#"
              className="Filter-List-Item">
              Bogotá
            </Dropdown.Item>
            <Dropdown.Item
              href="#"
              className="Filter-List-Item">
              Cali
            </Dropdown.Item>
            <Dropdown.Item
              href="#"
              className="Filter-List-Item">
              Medellín
            </Dropdown.Item>
            <Dropdown.Item
              href="#"
              className="Filter-List-Item">
              Barranquilla
            </Dropdown.Item>
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
        </Dropdown>
      </Modal>
    </div>
  );
}

export default Filters;
