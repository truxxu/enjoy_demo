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
import { getCategories } from "../actions/categories";
import { getSalonServices } from "../actions/salon";

function ServiceList(props) {
  const { getCategories, list, getSalonServices, servicesList } = props;
  const salonId = props.salonId;

  useEffect(() => {
    getCategories();
  }, []);

  useEffect(() => {
    getSalonServices(salonId, "");
  }, []);

  useEffect(() => {
    setFilteredServices(servicesList);
  }, [servicesList]);

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
                  Categorias
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
      <Col></Col>
    </Row>
  );
}

const mapStateToProps = state => {
  return {
    list: state.categories.list,
    servicesList: state.services.list
  };
};

const mapDispatchToProps = {
  getCategories,
  getSalonServices
};

ServiceList.prototype = {
  list: PropTypes.array.isRequired,
  getCategories: PropTypes.func.isRequired,
  getSalonServices: PropTypes.func.isRequired,
  servicesList: PropTypes.array.isRequired
};

export default connect(mapStateToProps, mapDispatchToProps)(ServiceList);
