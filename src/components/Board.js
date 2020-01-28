import React from "react";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Highcharts from 'highcharts'
import HighchartsReact from 'highcharts-react-official'

import "../styles/Board.css";

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

function DashboardFooter() {
  return (
    <React.Fragment>
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

      <Row className="App-Board-Card-Col flex-md-row flex-column pb-5 align-items-center">
                
        <Col className="App-Board-Card App-Board-Min-Height-Card d-flex justify-content-between mx-2 mb-2 mb-md-0 mt-2 mt-md-0">
          <div className="d-flex flex-column justify-content-around ml-2 pt-2">
            <label className="App-Board-Title">VENTAS TOTALES</label>
            <label className="App-Board-Value font-weight-bold"> $0.000.000</label>
            <label className="App-Board-Percent"><span className="Col-Percent-Gre font-weight-bold">↑0.0%</span> desde el mes pasado</label>
          </div>
          <div className="App-Board-Ico mt-1 d-none d-md-block mr-1">
            <span className="icon-grafico-de-barras Tab-Icon"></span>
          </div>
        </Col>

        <Col className="App-Board-Card App-Board-Min-Height-Card d-flex justify-content-between mx-2 mb-2 mb-md-0 mt-2 mt-md-0">
          <div className="d-flex flex-column justify-content-around ml-2 pt-2">
            <label className="App-Board-Title">PAGOS ONLINE</label>
            <label className="App-Board-Value font-weight-bold"> $0.000.000</label>
            <label className="App-Board-Percent"><span className="Col-Percent-Gre font-weight-bold">↑0.0%</span> desde el mes pasado</label>
          </div>
          <div className="App-Board-Ico mt-1 d-none d-md-block mr-1">
            <span className="icon-pagar_online Tab-Icon"></span>
          </div>
        </Col>

        <Col className="App-Board-Card App-Board-Min-Height-Card d-flex justify-content-between mx-2 mb-2 mb-md-0 mt-2 mt-md-0">
          <div className="d-flex flex-column justify-content-around ml-2 pt-2">
            <label className="App-Board-Title">PAGOS EN EL SALÓN</label>
            <label className="App-Board-Value font-weight-bold"> $0.000.000</label>
            <label className="App-Board-Percent"><span className="Col-Percent-Gre font-weight-bold">↑0.0%</span> desde el mes pasado</label>
          </div>
          <div className="mt-2 d-none d-md-block">
            <span className="icon-tienda Tab-Icon"></span>
          </div>
        </Col>

        <Col className="App-Board-Card App-Board-Min-Height-Card d-flex justify-content-between mx-2 mb-2 mb-md-0 mt-2 mt-md-0">
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

      <Row className="App-Board-Card-Col flex-md-row flex-column pb-5 justify-content-between align-items-center">
              
        <Col className="App-Board-Card App-Board-Max-Width-Reserves-Card App-Board-Min-Height-Reserves-Card d-flex justify-content-between mx-2 mb-2 mb-md-0 mt-2 mt-md-0">
          <div className="d-flex flex-column justify-content-around ml-2 pt-2">
            <label className="App-Board-Title">RESERVAS TOTALES</label>
            <label className="App-Board-Value font-weight-bold"> 128</label>
            <label className="App-Board-Percent"><span className="Col-Percent-Gre font-weight-bold">↑0.0%</span> desde el mes pasado</label>
          </div>
          <div className="App-Board-Ico mt-1 d-none d-md-block mr-2">
            <span className="icon-campana Tab-Icon"></span>
          </div>
        </Col>

        <Col className="App-Board-Card App-Board-Max-Width-Reserves-Card App-Board-Min-Height-Reserves-Card d-flex justify-content-between mx-2 mb-2 mb-md-0 mt-2 mt-md-0">
          <div className="d-flex flex-column justify-content-around ml-2 pt-2">
            <label className="App-Board-Title">RESERVAS CANCELADAS <br />POR EL CLIENTE</label>
            <label className="App-Board-Value font-weight-bold">8</label>
            <label className="App-Board-Percent"><span className="Col-Percent-Red font-weight-bold">↓0.0%</span> desde el mes pasado</label>
          </div>
          <div className="App-Board-Ico mt-1 d-none d-md-block mr-2">
            <span className="icon-campana_cancelar Tab-Icon"></span>
          </div>
        </Col>

        <Col className="App-Board-Card App-Board-Max-Width-Reserves-Card App-Board-Min-Height-Reserves-Card d-flex justify-content-between mx-2 mb-2 mb-md-0 mt-2 mt-md-0">
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
    </React.Fragment>
  );
}

export default DashboardFooter;
