import React from "react";
import Row from "react-bootstrap/Row";

import "../styles/DashboardFooter.css";

function DashboardFooter() {
  return (
    <Row className="App-Board-Bottom App-Board-Gris justify-content-center justify-content-md-between pt-2 px-5">
      <label>
      Todos los derechos reservados EN JOY!-s &copy;{" "}
        {new Date().getFullYear()}
      </label>
      <label>
        Hecho con <span className="icon-corazones"></span> por #wopudev
      </label>
    </Row>
  );
}

export default DashboardFooter;
