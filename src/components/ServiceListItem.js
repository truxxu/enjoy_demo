import React from "react";
import Button from "react-bootstrap/Button";

import salon from "../images/salon.jpeg";
import "../styles/ServiceListItem.css";

function ServiceListItem() {
  return (
    <div className="Service-Item d-flex flex-column flex-md-row  my-5 px-md-5 ">
      <div className="Service-Img col px-0 d-md-flex ">
        <img className="Salon-Img " src={salon} alt="Salon"></img>
        <span className="icon-corazones"></span>
      </div>
      <div className="Salon-Service col-md-5 pl-4 d-flex flex-column ">
        <h4 className="Salon-Name pt-4">Salon 420</h4>
        <p className="Salon-Address mb-0">Carrera 24 # 10 - 04</p>
        <div className="Icon-Strella mb-md-4 mb-2 pt-1 pl-md-2">
          <span className="icon-estrella_full"></span>
          <span className="icon-estrella_med"></span>
          <span className="icon-estrella_none"></span>
          <span className="icon-estrella_full"></span>
          <span className="icon-estrella_full"></span>
        </div>
        <div className="Salon-Description">
          <p>
            Duis autem vel eum iriure dolor in hendrerit in vulputate velit esse
            molestie consequat, vel illum dolore eu feugiat nulla facilisis at
            vero eros et accumsan et iusto odio dignissim qui blandit praesent
            luptatum zzril delenit augue duis dolore te feugait nulla facilisi.
            Duis autem vel eum iriure dolor in hendrerit in vulputate velit esse
            molestie consequat, vel illum dolore eu feugiat nulla facilisis at
            vero eros et accumsan et iusto odio dignissim qui blandit praesent
            luptatum zzril delenit augue duis dolore te feugait nulla facilisi.
            Duis autem vel eum iriure dolor in hendrerit in vulputate velit esse
            molestie consequat, vel illum dolore eu feugiat nulla facilisis at
            vero eros et accumsan et iusto odio dignissim qui blandit praesent
            luptatum zzril delenit augue duis dolore te feugait nulla facilisi.
          </p>
        </div>
      </div>
      <div className="Service-Description col pl-4 d-flex flex-column justify-content-between ">
        <div className="Service-Name d-flex flex-md-column flex-row justify-content-between">
          <h4 className="Service-Name pt-4 mb-1">Corte Cabello</h4>
          <p className="Service-Time pt-4 pt-md-0 pr-5 pr-md-0">45 min</p>
        </div>
        <div className="Service-Price d-flex flex-md-column">
          <h3 className=" mb-md-0 pt-2 pt-md-0">$30.915</h3>
          <p className="Service-Discount-Price pl-3 pt-2 pt-md-0 pl-md-0">
            $45.000
          </p>
        </div>
        <div className="Service-Buttons pb-4 d-flex flex-row justify-content-around">
          <Button className="Button mr-2">RESERVAR YA</Button>
          <Button className="Gray-Button ">VER SALÓN</Button>
        </div>
      </div>
    </div>
  );
}

export default ServiceListItem;
