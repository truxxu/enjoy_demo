import React, { useEffect } from "react";
import Container from "react-bootstrap/Container";
import { connect } from "react-redux";
import PropTypes from "prop-types";

import Footer from "./Footer";
import Navbar from "./Navbar";
import ServiceListItem from "./ServiceListItem";
import "../styles/ServiceListPage.css";
import Header from "./Header";
import { getServices } from "../actions/services";

function ServiceListPage(props) {
  const { getServices, list } = props;

  useEffect(() => {
    getServices();
  }, []);

  const renderService = (service) => {
    return(
      <ServiceListItem key= {service.id} data={service} />
    )
  };

  return (
    <Container fluid className="Service-List">
      <Navbar />
      <Header />
      <Container>
        {
          list.map(service => renderService(service))
        }
      </Container>
      <Footer />
    </Container>
  );
}

const mapStateToProps = state => {
  return {
    list: state.services.list
  };
};

const mapDispatchToProps = {
  getServices,
};

ServiceListPage.prototype = {
  list: PropTypes.array.isRequired,
  getServices: PropTypes.func.isRequired,
};

export default connect(mapStateToProps, mapDispatchToProps)(ServiceListPage);

