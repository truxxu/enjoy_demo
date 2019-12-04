import React from "react";
import Button from "react-bootstrap/Button";

import salon from "../images/salon.jpeg";
import "../styles/ServiceListItem.css";

function ServiceListItem() {
  return (
    <div className="Service-Item d-flex flex-column flex-md-row my-5 px-5 ">
      <div className="Service-Img col px-0 d-flex ">
        <img className="Salon-Img " src={salon} alt="Salon"></img>
        <span className="icon-corazones"></span>
      </div>
      <div className="Salon-Service col-5 pl-4 d-flex flex-column">
        <div>
          <h3 className="Salon-Name pt-4">Salon 420</h3>
          <p className="Salon-Address mb-0">Carrera 24 # 10 - 04</p>
          <div className="Icon-Strella mb-4 pt-1 pl-2">
            <span className="icon-estrella_full"></span>
            <span className="icon-estrella_med"></span>
            <span className="icon-estrella_none"></span>
            <span className="icon-estrella_full"></span>
            <span className="icon-estrella_full"></span>
          </div>
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
      <div className="Service-Description col d-flex flex-column justify-content-between ">
        <div className="Service-Name ">
          <h4 className="Service-Name pt-4 mb-1">Corte Cabello</h4>
          <p className="Service-Time ">45 min</p>
        </div>
        <div className="Service-Price ">
          <h3 className=" mb-0">$30.915</h3>
          <p className="Service-Discount-Price">$45.000</p>
        </div>
        <div className="Service-Buttons pb-4">
          <Button className="App-Button mr-2">RESERVAR YA</Button>
          <Button className="App-Button1 ">VER SALÓN</Button>
        </div>
      </div>
    </div>
  );
}

export default ServiceListItem;
