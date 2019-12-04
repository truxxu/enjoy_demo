import React from "react";
import Container from "react-bootstrap/Container";

import Footer from "./Footer";
import Navbar from "./Navbar";
import ServiceListItem from "./ServiceListItem";
import "../styles/ServiceListPage.css";

function ServiceListPage() {
  return (
    <Container fluid className="Service-List">
      <Navbar />
      <Container>
        <h1>ServiceListPage</h1>
        <ServiceListItem />
      </Container>
      <Footer />
    </Container>
  );
}

export default ServiceListPage;
