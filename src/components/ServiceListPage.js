import React, { useEffect } from "react";
import Container from "react-bootstrap/Container";
import { connect } from "react-redux";
import PropTypes from "prop-types";

import Footer from "./Footer";
import Navbar from "./Navbar";
import ServiceListItem from "./ServiceListItem";
import "../styles/ServiceListPage.css";
import Header from "./Header";
import Filters from "./Filters";
import { getServices } from "../actions/services";

function ServiceListPage(props) {
  const { getServices, list, activeItem } = props;
  useEffect(() => {
    getServices();
  }, []);

  const renderService = service => {
    return <ServiceListItem key={service.id} data={service} />;
  };
  if (activeItem) {
    if (activeItem.name === "Mujer") {
      var dataHeader = {
        image: activeItem.header_image,
        title: "los mejores cervicios",
        subTitle: "para las Mujeres"
      };
    }
    if (activeItem.name === "Hombre") {
      var dataHeader = {
        image: activeItem.header_image,
        title: "los mejores cervicios",
        subTitle: "para las hombres"
      };
    }
    if (activeItem.name === "Niños") {
      var dataHeader = {
        image: activeItem.header_image,
        title: "los mejores cervicios",
        subTitle: "para las niños"
      };
    }
    if (activeItem.name === "mascotas") {
      var dataHeader = {
        image: activeItem.header_image,
        title: "los mejores cervicios",
        subTitle: "para las mascotas"
      };
    }
  }

  return (
    <Container fluid className="Service-List">
      <Navbar />
      <Header data={dataHeader} />
      <Filters />
      <Container>{list.map(service => renderService(service))}</Container>
      <Footer />
    </Container>
  );
}

const mapStateToProps = state => {
  return {
    list: state.services.list,
    activeItem: state.categories.activeItem
  };
};

const mapDispatchToProps = {
  getServices
};

ServiceListPage.prototype = {
  list: PropTypes.array.isRequired,
  activeItem: PropTypes.object.isRequired,
  getServices: PropTypes.func.isRequired
};

export default connect(mapStateToProps, mapDispatchToProps)(ServiceListPage);
