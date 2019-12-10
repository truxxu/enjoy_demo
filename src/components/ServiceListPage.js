import React from "react";
import Container from "react-bootstrap/Container";

import Footer from "./Footer";
import Navbar from "./Navbar";
import ServiceListItem from "./ServiceListItem";
import "../styles/ServiceListPage.css";
import Header from "./Header";

function ServiceListPage() {
  return (
    <Container fluid className="Service-List">
      <Navbar />
      <Header />
      <Container>
        <ServiceListItem />
      </Container>
      <Footer />
    </Container>
  );
}

export default ServiceListPage;
