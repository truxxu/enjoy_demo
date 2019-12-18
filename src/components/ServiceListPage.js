import React, { useEffect } from "react";
import Container from "react-bootstrap/Container";
import { connect } from "react-redux";
import PropTypes from "prop-types";

import "../styles/ServiceListPage.css";
import Footer from "./Footer";
import Navbar from "./Navbar";
import ServiceListItem from "./ServiceListItem";
import Header from "./Header";
import Filters from "./Filters";
import { getServices } from "../actions/services";

function ServiceListPage(props) {
  const { getServices, list, activeItem } = props;

  useEffect(() => {
    getServices(activeItem.id);
  }, []);

  const renderService = (service) => {
    if (list.length !== 0) {
      return list.map(service =>
          <ServiceListItem key= {service.id} data={service} />
      )
    }
    else {
      return(
        <div className="Filter-Result-Placeholder">
          No se encontraron servicios
        </div>
      )
    }
  };

  return (
    <Container fluid className="Service-List">
      <Navbar />
      <Header />
      <Filters/>
      <Container>
        {
          renderService()
        }
      </Container>
      <Footer />
    </Container>
  );
}

const mapStateToProps = state => {
  return {
    list: state.services.list,
    activeItem: state.categories.activeItem,
  };
};

const mapDispatchToProps = {
  getServices,
};

ServiceListPage.prototype = {
  activeItem: PropTypes.object.isRequired,
  list: PropTypes.array.isRequired,
  getServices: PropTypes.func.isRequired,
};

export default connect(mapStateToProps, mapDispatchToProps)(ServiceListPage);

