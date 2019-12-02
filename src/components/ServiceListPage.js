import React from "react";
import Container from "react-bootstrap/Container";

import Footer from "./Footer";
import Navbar from "./Navbar";

function ServiceListPage() {
  return (
    <Container fluid>
      <Navbar />
      <h1>ServiceListPage</h1>
      <Footer />
    </Container>
  );
}

export default ServiceListPage;
