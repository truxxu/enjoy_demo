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
import { getCategory } from "../actions/categories";

function ServiceListPage(props) {

  const { getServices, getCategory, list, match } = props;
  const activeCategory = match.params.id;

  useEffect(() => {
    getServices(activeCategory);
  }, []);

  useEffect(() => {
    getCategory(activeCategory);
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
      <Header data={activeItem} />
      <Filters />
      <Container>{list.map(service => renderService(service))}</Container>
      <Footer />
    </Container>
  );
}

const mapStateToProps = state => {
  return {
    list: state.services.list,
  };
};

const mapDispatchToProps = {
  getServices,
  getCategory,
};

ServiceListPage.prototype = {
  list: PropTypes.array.isRequired,
  getServices: PropTypes.func.isRequired,
  getCategory: PropTypes.func.isRequired,
};

export default connect(mapStateToProps, mapDispatchToProps)(ServiceListPage);
