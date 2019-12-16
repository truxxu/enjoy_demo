import React from "react";
import Row from "react-bootstrap/Row";

import "../styles/ServiceItemSmall.css";

function ServiceItemSmall(props) {
  const isPopular = true;
  const popular = (
    <p className="Popular px-2 mb-1 mt-md-3 mr-md-5 align-self-md-baseline">
      POPULAR
    </p>
  );
  const price = 130000;
  const discount = 180000;

  return (
    <Row className="Service-Item-Small my-5 ">
      <div className="Service-Item-Small-Body ml-4">
        <div className="Service-Item-Small-Description d-flex flex-wrap ">
          <h1 className="Service-Name mr-4 pt-2 mr-md-5">
            Nombre del Servicio
          </h1>
          <span className="icon-corazones mr-5 mr-md-1 mt-md-2 flex-md-grow-1"></span>
          {isPopular ? popular : ""}
        </div>
        <p>45 min</p>
        <p className="Description mr-4">
          loremDuis autem vel eum iriure dolor in hendrerit in vulputate velit
          esse molestie consequat, vel illum dolore eu feugiat nulla facilisis
          at vero eros et accumsan et iusto odio dignissim qui blandit
          praeseeros et accumsan et iusto odio dignissim qui blandit praeseeros
          et accumsan et iusto odio dignissim qui blandit praesent luptatum
          zzril delenit augue duis dolore te feugait nulla facilisi.luptatum
          zzril delenit augue duis dolore te feugait nulla facilisi.luptatum
          zzril delenit augue duis dolore te feugait nulla facilisi.
        </p>
      </div>
      <div
        className="Service-Item-Small-Price ml-4 ml-md-0 d-flex justify-content-between 
      flex-md-column justify-content-md-around align-items-md-center"
      >
        {price ? (
          <div className="Service-Price">
            <h2 className="mb-0">${price}</h2>
            <p className="Service-Discount-Price">${discount}</p>
          </div>
        ) : (
          <div className="Service-Price">
            <h2 className="mb-0">${discount}</h2>
          </div>
        )}
        <div>
          <input
            className="form-check-input"
            type="radio"
            name="inlineRadioOptions"
            id="inlineRadio1"
            value="option1"
          />
          <label className="ml-2">Agregar</label>
        </div>
      </div>
    </Row>
  );
}

export default ServiceItemSmall;
