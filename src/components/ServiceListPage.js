import React, { useEffect } from "react";
import Container from "react-bootstrap/Container";

import Footer from "./Footer";
import Navbar from "./Navbar";
import ServiceListItem from "./ServiceListItem";
import "../styles/ServiceListPage.css";
import Header from "./Header";
import { getServices } from "../actions/services";

function ServiceListPage(props) {
  const { list } = props;

  useEffect(() => {
    getServices();
  }, []);

  const renderService = (service) => {
    return(
      <ServiceListItem />
    )
  };

  return (
    <Container fluid className="Service-List">
      <Navbar />
      <Header />
      <Container>
        {
          // list.map(service => renderService(service))
        }
      </Container>
      <Footer />
    </Container>
  );
}

export default ServiceListPage;
