import React from "react";
import Container from "react-bootstrap/Container";

import Footer from "./Footer";
import Navbar from "./Navbar";
import Header from "./Header";

function ServiceListPage() {
  return (
    <Container fluid>
      <Navbar />
      <Header />
      <h1>ServiceListPage</h1>
      <Footer />
    </Container>
  );
}

export default ServiceListPage;
