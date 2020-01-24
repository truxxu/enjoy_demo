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
import { getFavorites } from "../actions/favoriteService";

function ServiceListPage(props) {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const {
    getServices,
    getFavorites,
    getCategory,
    servicesList,
    activeCategory,
    match
  } = props;

  const activeCategoryId = match.params.id;

  useEffect(() => {
    getServices(activeCategoryId);
  }, [activeCategoryId]);

  useEffect(() => {
    getCategory(activeCategoryId);
  }, [activeCategoryId]);

  useEffect(() => {
    getFavorites();
  }, []);

  const renderService = service => {
    if (servicesList.length !== 0) {
      return servicesList.map(service => (
        <ServiceListItem key={service.id} data={service} />
      ));
    } else {
      return (
        <div className="Filter-Result-Placeholder">
          No se encontraron servicios
        </div>
      );
    }
  };

  return (
    <Container fluid className="Service-List">
      <Navbar />
      <Header data={activeCategory} />
      <Filters />
      <Container>
        {servicesList.map(service => renderService(service))}
      </Container>
      <Footer />
    </Container>
  );
}

const mapStateToProps = state => {
  return {
    servicesList: state.services.list,
    activeCategory: state.categories.activeItem
  };
};

const mapDispatchToProps = {
  getServices,
  getCategory,
  getFavorites
};

ServiceListPage.prototype = {
  activeCategory: PropTypes.object.isRequired,
  getServices: PropTypes.func.isRequired,
  getCategory: PropTypes.func.isRequired,
  getFavorites: PropTypes.func.isRequired,
  servicesList: PropTypes.array.isRequired
};

export default connect(mapStateToProps, mapDispatchToProps)(ServiceListPage);
