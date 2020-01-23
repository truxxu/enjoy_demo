import React from "react";
import { render } from 'react-dom'
import Highcharts from 'highcharts'
import HighchartsReact from 'highcharts-react-official'
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Tab from "react-bootstrap/Tab";
import Col from "react-bootstrap/Col";
import Nav from "react-bootstrap/Nav";
import { Link } from "react-router-dom";


import "../styles/DashboardPage.css";
import logo from "../images/logo_black_white.png";

const options = {
  title: {
    text: 'VENTAS'
  },
  series: [{
    data: [1, 2, 3]
  }]
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
    margin: [80, 20, 30, 90],
    width:800
  },
  responsive: {
    rules: [{
        condition: {
            maxWidth: 500
        },
        chartOptions: {
            legend: {
                align: 'center',
                verticalAlign: 'bottom',
                layout: 'horizontal'
            },
            yAxis: {
                labels: {
                    align: 'left',
                    x: 0,
                    y: -5
                },
                title: {
                    text: null
                }
            },
            subtitle: {
                text: null
            },
            credits: {
                enabled: false
            }
        }
    }]
},
  yAxis: {
    title: {
      text: '<b>VENTAS</b>',
      enabled:true,//default is true
      align:'high',
      offset: 10,
      y : -50, 
      rotation: 0,
    },
    labels: {
      enabled:true,
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
    margin: [80, 20, 30, 90],
    width:800
  },
  responsive: {
    rules: [{
        condition: {
            maxWidth: 500
        },
        chartOptions: {
            legend: {
                align: 'center',
                verticalAlign: 'bottom',
                layout: 'horizontal'
            },
            yAxis: {
                labels: {
                    align: 'left',
                    x: 0,
                    y: -5
                },
                title: {
                    text: null
                }
            },
            subtitle: {
                text: null
            },
            credits: {
                enabled: false
            }
        }
    }]
},
  yAxis: {
    title: {
      text: '<b>RESERVAS</b>',
      enabled:true,
      align:'high',
      offset: -20,
      y : -50, 
      rotation: 0,
    },
    labels: {
      enabled:true,
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

  return (
    <Container fluid className="App-Dashboard">
      

      <Tab.Container id="left-tabs-example" defaultActiveKey="user">
        <Row>
          <Col>
            <Row className="align-items-center mt-4 mb-5">
              <div className="col-md-2 align-items-center justify-content-center">
                <Link to="/">
                  <img src={logo} className="App-Dashboard-Logo m-3" />
                </Link>
              </div>        
            </Row>
   
            <Nav className="flex-column Profile-Nav">
              <Nav.Item>
                <Nav.Link eventKey="user" className="App-Dashboard-Link" >
                    <label className="icon-usuario Tab-Icon App-Board-Pointer"></label> 
                    <label className="ml-2 App-Board-Pointer">Tablero</label>
                </Nav.Link>
              </Nav.Item>
              <Nav.Item>
                <Nav.Link eventKey="favorites" className="App-Dashboard-Link">
                    <span className="icon-corazones Tab-Icon App-Board-Pointer"></span>
                    <label className="ml-2 App-Board-Pointer">Reservas</label>
                </Nav.Link>
              </Nav.Item>
              <Nav.Item>
                <Nav.Link eventKey="reservations" className="App-Dashboard-Link">
                    <span className="icon-calendario Tab-Icon App-Board-Pointer"></span>
                    <label className="ml-2 App-Board-Pointer">Perfil</label>
                </Nav.Link>
              </Nav.Item>
            </Nav>

            <hr />

            <a href="" className="App-Dashboard-Link" >
              <span className="icon-logout Tab-Icon ico-red"></span>
              <label className="ml-2">Cerrar sesión</label>
            </a>
          </Col>
          <Col sm={10} className="">
            <Tab.Content>
              <Tab.Pane eventKey="user">
                <Row className="pt-4 App-Board-Col-Dorado">
                  <Col md={6} className="pl-4">
                    <label className="font-weight-bold">Tablero</label>
                  </Col>
                  <Col md={6} className="mb-5">
                    <Row className="justify-content-end pr-5 d-none d-md-flex">
                      <div className="align-self-center">
                        <img src="https://enjoy-files.s3.amazonaws.com/images/salon1.jpg?AWSAccessKeyId=AKIAR6F4S2NVN3L3RGOL&Signature=m6zIPiPezZhlco0ZSCPvUh3B4bE%3D&Expires=1579718242" className="App-Dashboard-Logo" />
                      </div>
                      <div className="align-self-center ml-2">
                        <label className="">Nombre del salón</label>
                      </div>
                    </Row>
                  </Col>
                </Row>

                <Row className="d-md-flex App-Board-Col-Dorado pb-5">

                  <Col className="App-Board-Card ml-3">
                    <Row className="mx-1 mt-2 mb-1">
                      <Col className="">
                        <Row className="mb-1">
                          <label className="App-Board-Title">VENTAS TOTALES</label>
                        </Row>
                        <Row className="">
                          <label className="font-weight-bold"> $0.000.000</label>
                        </Row>
                      </Col>
                      <Col md={3} className="App-Board-Ico">
                        <span className="icon-usuario Tab-Icon"></span>
                      </Col>
                    </Row>
                    <Row className="App-Board-Percent mx-1">
                        <label><span className="Col-Percent-Gre font-weight-bold">↑0.0%</span> desde el mes pasado</label>
                    </Row>
                  </Col>

                  <Col className="App-Board-Card ml-3">
                    <Row className="mx-1 mt-2 mb-1">
                      <Col className="">
                        <Row className="mb-1">
                          <label className="App-Board-Title">PAGOS ONLINE</label>
                        </Row>
                        <Row className="">
                          <label className="font-weight-bold"> $0.000.000</label>
                        </Row>
                      </Col>
                      <Col md={3} className="App-Board-Ico">
                        <span className="icon-usuario Tab-Icon"></span>
                      </Col>
                    </Row>
                    <Row className="App-Board-Percent mx-1">
                        <label><span className="Col-Percent-Red font-weight-bold">↓0.0%</span> desde el mes pasado</label>
                    </Row>
                  </Col>

                  <Col className="App-Board-Card ml-3">
                    <Row className="mx-1 mt-2 mb-1">
                      <Col className="">
                        <Row className="mb-1">
                          <label className="App-Board-Title">PAGOS EN EL SALÓN</label>
                        </Row>
                        <Row className="">
                          <label className="font-weight-bold"> $0.000.000</label>
                        </Row>
                      </Col>
                      <Col md={3} className="App-Board-Ico">
                        <span className="icon-usuario Tab-Icon"></span>
                      </Col>
                    </Row>
                    <Row className="App-Board-Percent mx-1">
                        <label className=""><span className="Col-Percent-Gre font-weight-bold">↑0.0%</span> desde el mes pasado</label>
                    </Row>
                  </Col>

                  <Col className="App-Board-Card mx-3">
                    <Row className="mx-1 mt-2 mb-1">
                      <Col className="">
                        <Row className="mb-1">
                          <label className="App-Board-Title">SALDO A FAVOR</label>
                        </Row>
                        <Row className="mt-3">
                          <label className="font-weight-bold Total-Red"> $0.000.000</label>
                        </Row>
                      </Col>
                      <Col md={3} className="App-Board-Ico">
                        <span className="icon-usuario Tab-Icon"></span>
                      </Col>
                    </Row>
                  </Col>                

                </Row>
                
                <Row className="App-Board-Reserves-Chart App-Board-Gris justify-content-center  d-md-flex">
                  <Row className="ddddrrr">
                    <HighchartsReact
                      highcharts={Highcharts}
                      options={chartOptionsBoard}
                    />
                  </Row>
                </Row>


                <Row className="pt-4 App-Board-Col-Dorado">
                  <Col md={6} className="pl-4 mb-5">
                    <label className="font-weight-bold">Reservas</label>
                  </Col>
                </Row>



                <Row className="d-md-flex App-Board-Col-Dorado pb-5">

                  <Col className="App-Board-Card ml-3">
                    <Row className="mx-1 mt-2 mb-1">
                      <Col className="">
                        <Row className="mb-1">
                          <label className="App-Board-Title">RESERVAS TOTALES</label>
                        </Row>
                        <Row className="">
                          <label className="font-weight-bold"> 128</label>
                        </Row>
                      </Col>
                      <Col md={3} className="App-Board-Ico">
                        <span className="icon-usuario Tab-Icon"></span>
                      </Col>
                    </Row>
                    <Row className="App-Board-Percent mx-1">
                        <label><span className="Col-Percent-Gre font-weight-bold">↑0.0%</span> desde el mes pasado</label>
                    </Row>
                  </Col>

                  <Col className="App-Board-Card ml-3">
                    <Row className="mx-1 mt-2 mb-1">
                      <Col className="">
                        <Row className="mb-1">
                          <label className="App-Board-Title">RESERVAS CANCELADAS POR EL CLIENTE</label>
                        </Row>
                        <Row className="">
                          <label className="font-weight-bold">8</label>
                        </Row>
                      </Col>
                      <Col md={3} className="App-Board-Ico">
                        <span className="icon-usuario Tab-Icon"></span>
                      </Col>
                    </Row>
                    <Row className="App-Board-Percent mx-1">
                        <label><span className="Col-Percent-Red font-weight-bold">↓0.0%</span> desde el mes pasado</label>
                    </Row>
                  </Col>

                  <Col className="App-Board-Card mx-3 ">
                    <Row className="mx-1 mt-2">
                      <Col className="">
                        <Row className="">
                          <label className="App-Board-Title">RESERVAS CANCELADAS POR EL SALÓN</label>
                        </Row>
                        <Row className="">
                          <label className="font-weight-bold"> $0.000.000</label>
                        </Row>
                      </Col>
                      <Col md={3} className="App-Board-Ico">
                        <span className="icon-usuario Tab-Icon"></span>
                      </Col>
                    </Row>
                    <Row className="App-Board-Percent mx-1">
                        <label className=""><span className="Col-Percent-Gre font-weight-bold">↑0.0%</span> desde el mes pasado</label>
                    </Row>
                  </Col>

                </Row>


                <Row className="App-Board-Reserves-Chart App-Board-Gris justify-content-center  d-md-flex">
                  <Row className="ddddrrr">
                    <HighchartsReact
                      highcharts={Highcharts}
                      options={chartOptionsReserves}
                    />
                  </Row>
                </Row>

                
                
                <Row className="App-Footer-Bottom App-Board-Gris justify-content-center justify-content-md-between pt-2 px-5">
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

export default DashboardPage;
