import React, { useState } from "react";
import { render } from 'react-dom'
import Dropdown from "react-bootstrap/Dropdown";
import Modal from "react-bootstrap/Modal";
import Highcharts from 'highcharts'
import HighchartsReact from 'highcharts-react-official'
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Tab from "react-bootstrap/Tab";
import Col from "react-bootstrap/Col";
import Nav from "react-bootstrap/Nav";
import { Link, Redirect } from "react-router-dom";
import { connect } from "react-redux";
import PropTypes from "prop-types";

import "../styles/DashboardPage.css";
import logo from "../images/logo_black_white.png";
import { logOut } from "../actions/authentication";

const options = {
  title: {
    text: 'VENTAS'
  },
  series: [{
    data: [1, 2, 3]
  }]
}

let chartWidth = 0;
let chartHeight = 0;
let chartMargin = 0;
let chartFontSize = '';
if(window.innerWidth>768){
  chartWidth = 800;
  chartHeight = 392;
  chartMargin = 90;
  chartFontSize = '11px';
}else{
  chartWidth = 350;
  chartHeight = 370;
  chartMargin = 50;
  chartFontSize = '5px'
}

const chartOptionsBoard = {
  title: {
    text: '',
    style:{
      margin:60
    }
  },
  chart: {
    shadow: true,
    borderRadius: 6,
    type: 'line',
    margin: [80, 20, 50, chartMargin],
    width:chartWidth,
    height:chartHeight
  },
  yAxis: {
    title: {
      text: '<b>VENTAS</b>',
      enabled:true,//default is true
      align:'high',
      offset: -10,
      y : -50, 
      rotation: 0,
    },
    labels: {
      enabled:true,
      style: {
        fontSize: chartFontSize
      },
      formatter: function () {
        let value = this.value+'';
        let valueLength = value.length;
        if(valueLength==8){
          return '$' + value.substr(0,2)+'MIL';
        }
        return '$' + this.value;
      }
    }
  },
  xAxis: {
    labels: {
      style: {
          fontSize: chartFontSize
      }
    },
    categories: ['Ene', 'Feb', 'Mar', 'Abr', 'May', 'Jun', 'Jul', 'Ago', 'Sep', 'Oct', 'Nov', 'Dic'],
  },
  plotOptions: {
    series: {
        color: '#B73639'
    },
    line: {
      marker: {
          enabled: false
      }
    }
  },
  series: [{ 
      showInLegend: false,             
      data: [100000, 15000000, 24000000, 25000000, 26000000, 27000000, 28000000, 29000000, 30000000, 31000000, 32000000, 33000000] 
  }],
  credits: {
    enabled: false
  }
}

const chartOptionsReserves = {
  title: {
    text: '',
    style:{
      margin:60
    }
  },
  chart: {
    shadow: true,
    borderRadius: 6,
    type: 'line',
    margin: [80, 20, 50, chartMargin],
    width:chartWidth,
    height:chartHeight
  },
  yAxis: {
    title: {
      text: '<b>RESERVAS</b>',
      enabled:true,
      align:'high',
      offset: -30,
      y : -50, 
      rotation: 0,
    },
    labels: {
      enabled:true,
      style: {
        fontSize: chartFontSize
      },
      formatter: function () {
        let value = this.value+'';
        let valueLength = value.length;
        if(valueLength==8){
          return '$' + value.substr(0,2)+'MIL';
        }
        return '$' + this.value;
      }
    }
  },
  xAxis: {
    labels: {
      style: {
        fontSize: chartFontSize
      }
    },
    categories: ['Ene', 'Feb', 'Mar', 'Abr', 'May', 'Jun', 'Jul', 'Ago', 'Sep', 'Oct', 'Nov', 'Dic'],
  },
  plotOptions: {
    series: {
        color: '#B73639'
    },
    line: {
      marker: {
          enabled: false
      }
    }
  },
  series: [{ 
      showInLegend: false,             
      data: [10, 15, 24, 25, 26, 27, 28, 29, 30, 30, 32, 33] 
  }],
  credits: {
    enabled: false
  }
}

function DashboardPage(props) {
  const data = props.data;

  const { logOut, currentUser, token } = props;

  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  return (
    <Container fluid className="App-Dashboard">
      {
        (token===null || token === 'undefined' || token === '' || token === undefined || currentUser===null || currentUser===undefined || currentUser.role!='MAIN_ADMIN') &&
        <Redirect to='/'  />
      }
      <Tab.Container id="left-tabs-example" defaultActiveKey="user">
        <Row>
          <Col className="App-Board-Header">
            <Row className="align-items-center mt-4 mb-5">
              <Col className="d-flex">
                <div className="col-md-2">
                  <Link to="/">
                    <img src={logo} className="App-Dashboard-Logo m-3" />
                  </Link>
                </div>        
                <div className="d-md-none d-sm-block  align-self-center mr-4 ">
                  <label onClick={handleShow} className="App-Board-Icon-Menu icon-menu Tab-Icon App-Board-Pointer"></label> 
                </div>        
              </Col>
            </Row>
   
            <Nav className="Profile-Nav d-none d-sm-none d-md-block ">
              <Nav.Item>
                <Nav.Link eventKey="user" className="App-Dashboard-Link" >
                    <label className="icon-dashboar Tab-Icon App-Board-Pointer"></label> 
                    <label className="ml-2 App-Board-Pointer">Tablero</label>
                </Nav.Link>
              </Nav.Item>
              <Nav.Item>
                <Nav.Link eventKey="favorites" className="App-Dashboard-Link">
                    <span className="icon-calendario Tab-Icon App-Board-Pointer"></span>
                    <label className="ml-2 App-Board-Pointer">Reservas</label>
                </Nav.Link>
              </Nav.Item>
              <Nav.Item>
                <Nav.Link eventKey="reservations" className="App-Dashboard-Link">
                    <span className="icon-usuario Tab-Icon App-Board-Pointer"></span>
                    <label className="ml-2 App-Board-Pointer">Perfil</label>
                </Nav.Link>
              </Nav.Item>
              <hr />
              <Nav.Item>
                <Nav.Link className="App-Dashboard-Link">
                  <a onClick={logOut} className="App-Dashboard-Link App-Board-Pointer" >
                    <span className="icon-logout Tab-Icon ico-red"></span>
                    <label className="App-Board-Pointer ml-2">Cerrar sesión</label>
                  </a>
                </Nav.Link>
              </Nav.Item>
            </Nav>

            <Modal className="Menu-Board-Modal align-items-left" show={show} onHide={handleClose}>
              <Row className="Menu-Board-Modal-Links align-items-center justify-content-around mb-5">
                <div>
                  <Link to="/">
                    <img src={logo} className="App-Dashboard-Logo mt-4" />
                  </Link>
                </div>              
                <div className="App-Board-Pointer mt-4">
                  <span onClick={handleClose} className="Modal-Close Mobile-Filter-Text">
                    X
                  </span>
                </div>
              </Row>

              <Nav className="Profile-Nav-Mov d-flex flex-column d-sm-block">
                <Nav.Item onClick={handleClose}>
                  <Nav.Link eventKey="user" className="App-Dashboard-Link" >
                      <label className="icon-dashboar Tab-Icon App-Board-Pointer"></label> 
                      <label className="ml-2 App-Board-Pointer">Tablero</label>
                  </Nav.Link>
                </Nav.Item>
                <Nav.Item onClick={handleClose}>
                  <Nav.Link eventKey="favorites" className="App-Dashboard-Link">
                      <span className="icon-calendario Tab-Icon App-Board-Pointer"></span>
                      <label className="ml-2 App-Board-Pointer">Reservas</label>
                  </Nav.Link>
                </Nav.Item>
                <Nav.Item onClick={handleClose}>
                  <Nav.Link eventKey="reservations" className="App-Dashboard-Link">
                      <span className="icon-usuario Tab-Icon App-Board-Pointer"></span>
                      <label className="ml-2 App-Board-Pointer">Perfil</label>
                  </Nav.Link>
                </Nav.Item>
                <hr />
                <Nav.Item onClick={handleClose}>
                  <Nav.Link className="App-Dashboard-Link App-Board-Pointer">
                    <a onClick={logOut} className="App-Dashboard-Link " >
                      <span className="icon-logout Tab-Icon ico-red ico-session-close"></span>
                      <label className="App-Board-Pointer ml-2">Cerrar sesión</label>
                    </a>
                  </Nav.Link>
                </Nav.Item>
              </Nav>
            </Modal>
          </Col>
          <Col sm={10} className="">
            <Tab.Content>
              <Tab.Pane eventKey="user">
                <Row className="pt-4 App-Board-Col-Dorado">
                  <Col md={6} className="mb-sm-5 pl-4 ">
                    <label className="font-weight-bold">Tablero</label>
                  </Col>
                  <Col md={6} className="mb-5">
                    <Row className="justify-content-end pr-5 d-none d-md-flex">
                      <div className="align-self-center">
                        <img src="https://enjoy-files.s3.amazonaws.com/images/salon1.jpg?AWSAccessKeyId=AKIAR6F4S2NVN3L3RGOL&Signature=iKYeu%2FNhZiinhEhm%2FsVEV2CnC%2Bs%3D&Expires=1579806476" className="App-Dashboard-Logo" />
                      </div>
                      <div className="align-self-center ml-2">
                        <label className="">Nombre del salón</label>
                      </div>
                    </Row>
                  </Col>
                </Row>

                <Row className="App-Board-Card-Col justify-content-around pb-5">
                
                  <Col sm={2} className="App-Board-Card d-flex justify-content-between mb-2 mb-md-0 mt-2 mt-md-0">
                    <div className="d-flex flex-column justify-content-around ml-2 pt-2">
                      <label className="App-Board-Title">VENTAS TOTALES</label>
                      <label className="App-Board-Value font-weight-bold"> $0.000.000</label>
                      <label className="App-Board-Percent"><span className="Col-Percent-Gre font-weight-bold">↑0.0%</span> desde el mes pasado</label>
                    </div>
                    <div className="App-Board-Ico mt-1 d-none d-md-block mr-1">
                      <span className="icon-grafico-de-barras Tab-Icon"></span>
                    </div>
                  </Col>

                  <Col sm={2} className="App-Board-Card d-flex justify-content-between mb-2 mb-md-0">
                    <div className="d-flex flex-column justify-content-around ml-2 pt-2">
                      <label className="App-Board-Title">PAGOS ONLINE</label>
                      <label className="App-Board-Value font-weight-bold"> $0.000.000</label>
                      <label className="App-Board-Percent"><span className="Col-Percent-Gre font-weight-bold">↑0.0%</span> desde el mes pasado</label>
                    </div>
                    <div className="App-Board-Ico mt-1 d-none d-md-block mr-1">
                      <span className="icon-pagar_online Tab-Icon"></span>
                    </div>
                  </Col>

                  <Col sm={2} className="App-Board-Card d-flex justify-content-between mb-2 mb-md-0">
                    <div className="d-flex flex-column justify-content-around ml-2 pt-2">
                      <label className="App-Board-Title">PAGOS EN EL SALÓN</label>
                      <label className="App-Board-Value font-weight-bold"> $0.000.000</label>
                      <label className="App-Board-Percent"><span className="Col-Percent-Gre font-weight-bold">↑0.0%</span> desde el mes pasado</label>
                    </div>
                    <div className="mt-2 d-none d-md-block">
                      <span className="icon-tienda Tab-Icon"></span>
                    </div>
                  </Col>

                  <Col sm={2} className="App-Board-Card d-flex justify-content-between mb-2 mb-md-0">
                    <div className="d-flex flex-column justify-content-around ml-2 pt-1">
                      <label className="App-Board-Title">SALDO A FAVOR</label>
                      <label className="App-Board-Value Total-Red font-weight-bold">$0.000.000</label>
                    </div>
                    <div className="App-Board-Ico mt-1 d-none d-md-block mr-1">
                      <span className="icon-poos-favor Tab-Icon"></span>
                    </div>
                  </Col>

                </Row>

                <Row className="App-Board-Reserves-Chart App-Board-Gris justify-content-center  d-md-flex">
                  <Row className="App-Board-Content-Chart">
                    <HighchartsReact
                      highcharts={Highcharts}
                      options={chartOptionsBoard}
                    />
                  </Row>
                </Row>

                <Row className="pt-4 App-Board-Col-Dorado">
                  <Col md={6} className="pl-4 mb-5 mt-3">
                    <label className="font-weight-bold">Reservas</label>
                  </Col>
                </Row>

                <Row className="App-Board-Card-Col justify-content-around pb-5">
                
                  <Col sm={2.7} className="App-Board-Card d-flex justify-content-between mb-2 mb-md-0 mt-2 mt-md-0">
                    <div className="d-flex flex-column justify-content-around ml-2 pt-2">
                      <label className="App-Board-Title">RESERVAS TOTALES</label>
                      <label className="App-Board-Value font-weight-bold"> 128</label>
                      <label className="App-Board-Percent"><span className="Col-Percent-Gre font-weight-bold">↑0.0%</span> desde el mes pasado</label>
                    </div>
                    <div className="App-Board-Ico mt-1 d-none d-md-block mr-2">
                      <span className="icon-campana Tab-Icon"></span>
                    </div>
                  </Col>

                  <Col sm={2.7} className="App-Board-Card d-flex justify-content-between mb-2 mb-md-0">
                    <div className="d-flex flex-column justify-content-around ml-2 pt-2">
                      <label className="App-Board-Title">RESERVAS CANCELADAS <br />POR EL CLIENTE</label>
                      <label className="App-Board-Value font-weight-bold">8</label>
                      <label className="App-Board-Percent"><span className="Col-Percent-Red font-weight-bold">↓0.0%</span> desde el mes pasado</label>
                    </div>
                    <div className="App-Board-Ico mt-1 d-none d-md-block mr-2">
                      <span className="icon-campana_cancelar Tab-Icon"></span>
                    </div>
                  </Col>

                  <Col sm={2.7} className="App-Board-Card d-flex justify-content-between">
                    <div className="d-flex flex-column justify-content-around ml-2 pt-2">
                    <label className="App-Board-Title">RESERVAS CANCELADAS <br />POR EL SALÓN</label>
                    <label className="App-Board-Value font-weight-bold">2</label>
                    <label className="App-Board-Percent"><span className="Col-Percent-Gre font-weight-bold">↑0.0%</span> desde el mes pasado</label>
                    </div>
                    <div className="App-Board-Ico mt-1 d-none d-md-block mr-2">
                      <span className="icon-campana_cancelar Tab-Icon"></span>
                    </div>
                  </Col>
                </Row>

                <Row className="App-Board-Reserves-Chart App-Board-Gris justify-content-center  d-md-flex">
                  <Row className="App-Board-Content-Chart">
                    <HighchartsReact
                      highcharts={Highcharts}
                      options={chartOptionsReserves}
                    />
                  </Row>
                </Row>
                
                <Row className="App-Board-Bottom App-Board-Gris justify-content-center justify-content-md-between pt-2 px-5">
                   <label>
                    Todos los derechos reservados EN JOY!-s &copy;{" "}
                    {new Date().getFullYear()}
                  </label>
                  <label>
                    Hecho con <span className="icon-corazones"></span> por #wopudev
                  </label>
                </Row>

              </Tab.Pane>
              
              <Tab.Pane eventKey="favorites">
                <label className="Profile-Label">Servicios Favoritos</label>
              </Tab.Pane>

              <Tab.Pane eventKey="reservations">
                <label className="Profile-Label">Reservas Programadas</label>
              </Tab.Pane>
            </Tab.Content>

          </Col>
        </Row>
      </Tab.Container>
    </Container>
  );
}

const mapStateToProps = state => {
  return {
    token: state.authentication.token,
    currentUser: state.authentication.currentUser
  };
};

const mapDispatchToProps = {
  logOut
};

DashboardPage.prototype = {
  currentUser: PropTypes.object.isRequired,
  token: PropTypes.string.isRequired,
  logOut: PropTypes.func.isRequired
};

export default connect(mapStateToProps, mapDispatchToProps)(DashboardPage);
