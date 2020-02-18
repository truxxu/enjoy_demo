import React, { useEffect, useState } from "react";
import { connect } from "react-redux";
import PropTypes from "prop-types";

import * as moment from 'moment';
import 'moment/min/locales'

import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Button from "react-bootstrap/Button";
import Dropdown from "react-bootstrap/Dropdown";
import "../styles/Reserves.css";

import { getReserves } from "../actions/reserves";

let cardNumToRender = 1;
let numSteps = 1;
if(window.innerWidth>768){
  cardNumToRender = 4;
  numSteps = 2;
}else{
  cardNumToRender = 1;
  numSteps = 1;
}

function Reserves(props) {
  const { getReserves, token, reservesList } = props;
  moment.locale('es' );

  let AppReservesActionBar = '';

  useEffect(() => {
    window.addEventListener('scroll', handleScroll, true);
    AppReservesActionBar = document.getElementsByClassName('App-Reserves-Action-Bar')[0];
    let month = new Date().getMonth()+1;
    getReserves(token, month);    
  }, []);

  const handleScroll = () => {
    positionBar();
  };

  function positionBar() {
    var widthBrowser = window.outerWidth;

    if(widthBrowser <= 768){
      if (window.pageYOffset >= 250){
        AppReservesActionBar.classList.add('fixed-top');
      } else {
        AppReservesActionBar.classList.remove('fixed-top');
      }
    }
  }

  const getInitDate = () => {
    let startDate = new Date();
    startDate.setDate(startDate.getDate()-1);
    return startDate;
  }

  const addTwoDays = () => {
    if(moment(initialDay).format('MMMM')!==moment(moment(initialDay, "YYYY-MM-DD").add(numSteps, 'days')._d).format('MMMM')){
      if(moment(initialDay).format('MMMM')!==moment(moment(initialDay, "YYYY-MM-DD").add(1, 'days')._d).format('MMMM')){
        return initialDay;
      }else{  
        return moment(initialDay, "YYYY-MM-DD").add(1, 'days')._d;    
      }
    }
    return moment(initialDay, "YYYY-MM-DD").add(numSteps, 'days')._d;
  }

  const removeTwoDays = () => {
    if(moment(initialDay).format('MMMM')!==moment(moment(initialDay, "YYYY-MM-DD").add(-numSteps, 'days')._d).format('MMMM')){
      if(moment(initialDay).format('MMMM')!==moment(moment(initialDay, "YYYY-MM-DD").add(-1, 'days')._d).format('MMMM')){
        return initialDay;
      }else{
        
        return moment(initialDay, "YYYY-MM-DD").add(-1, 'days')._d;    
      }
    }
    return moment(initialDay, "YYYY-MM-DD").add(-numSteps, 'days')._d;
  }

  const renderHeadMonth = () => {
    return moment(initialDay).format('MMMM');
  }
  
  const [initialDay, setInitialDay] = useState(getInitDate());
  const handleNext = () => setInitialDay(addTwoDays());
  const handlePrev = () => setInitialDay(removeTwoDays());
  const handleInit = (dateToSet) => setInitialDay(dateToSet);

  const renderMonths = () => {
    let new_date = moment(new Date(), "YYYY-MM-DD");
    let strInitMonth = moment(new_date).format('MMMM');
    let months = moment.months();
    const indexMonth = months.indexOf(strInitMonth)+1;
    months = months.splice(0, indexMonth);
    return(
      months.map(month => <Dropdown.Item key={month} onClick={() => { getReserverByMonth(month) }} className="first-letter-Capital">{month}</Dropdown.Item>)
    );
  }

  const getReserverByMonth = (month) => {
    let numMonth = moment().month(month).format("M");    
    handleInit(moment([moment().year(), numMonth-1])._d);
    getReserves(token, numMonth);
  }

  const getNewDate = (currentDay) => {
    let new_date = moment(currentDay, "YYYY-MM-DD").add(1, 'days').format('YYYY-MM-DD');
    return new_date;
  }

  const renderServices = (services) => {
    return services.map(service => 
      <label key={service.service_name} className="d-flex App-Reserves-Service">
        <label className="App-Reserves-Point align-self-center mr-2">&nbsp;</label> 
        <label >{service.service_name.toUpperCase()}</label>
      </label>
    );
  }

  const renderReservesCard = (initDay) => {
    const itemsCards = []
    for (let j=0; j<reservesList.length;j++){
      if(moment(reservesList[j].reservation_datetime).format('DD')==initDay){
        let reserveStatus = reservesList[j].customer_name;
        itemsCards.push(
          <div key={j} className={`App-Reserves-Card 
            ${ reserveStatus === "1" ?
              ' App_Reserves_Today'
              :
              reserveStatus === "2" ?
              ' App_Reserves_Scheduled'
              :
              reserveStatus === "3" ?
              ' App_Reserves_Cancel'
              :
              reserveStatus === "4" ?
              ' App_Reserves_TodayDate'
              :
              ' gre'
            }
            d-flex flex-column justify-content-center mt-4 ml-2 mr-2 py-2 px-3` }>    
          <label>{reservesList[j].customer_name.toUpperCase()}</label>
          <label>{reservesList[j].customer_phone}</label>
          <label>{ moment(reservesList[j].reservation_datetime).format('h:mm:ss a') }</label>
          <hr className="App-Reserves-Line" />      
          {
            renderServices(reservesList[j].reserved_services)
          }
          <label className="first-letter-Capital">{reservesList[j].professional_name}</label>
          {
            reservesList[j].customer_name!=='1' &&
            <div className="d-flex justify-content-center">
              <Button className="App-Reserves-Button mt-2 mb-1">
                Cancelar Reserva
              </Button>
            </div>
          }
        </div>);
      }
    }

    return (itemsCards);
  }

   function renderReserverDays(currentDate){
    let currentDay = currentDate.getDate();
    const itemsDays = []
    let initDay = '';
    let contView = 0;
    let i = 0;

    if(reservesList && reservesList.length>0){
      i=0;
      while(contView < cardNumToRender && i < reservesList.length){
        if(contView!=0)
          currentDate = getNewDate(currentDate);
        initDay = moment(currentDate).format('DD');

        if(moment(currentDate).format('MMMM')===moment(initialDay).format('MMMM')){
          itemsDays.push(
            <div id={'calendar'+1} key={i} className={`App-Reserves-Column 
              ${ moment(currentDate).format('DD')===moment(new Date()).format('DD') && 'App-Reserves-Current-Column' } 
              col-md-3 border-top border-left border-right pb-4`}>
              <div className="d-flex border-bottom justify-content-center py-2">
                {moment(currentDate).format('dddd DD').toUpperCase()}
              </div>
              {
                renderReservesCard(initDay)
              }
            </div>
          );
        }
        initDay++;
        contView++;
        i++;
      }
    }
    return (itemsDays);
  };

  return (
    <React.Fragment>
      <Row className="App-Reserves-Col-Dorado pt-4">
        <Col md={6} className="mb-sm-5 pl-4 ">
          <label className="font-weight-bold">Reservas</label>
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

<div className="App-Reserves-Action-Bar d-sm-block d-md-none">
   <div className=" col-md-12 d-flex align-items-center">
                <div className="App-Reserver-Filter d-flex align-self-center border-right my-2 justify-content-center">
                  <div className=" d-flex mr-2">
                    <span className="icon-calendario"></span> 
                  </div>
                  <div className=" d-flex">
                    <span className="first-letter-Capital">{ moment(initialDay).format('MMMM') }</span>
                  </div>
                </div>
                <div className="App-Reserver-Filter d-flex justify-content-center my-2">
                  <Dropdown className="d-md-flex align-self-center">
                    <Dropdown.Toggle className="App-Reserves-Drd Filter-Button align-self-center">
                      Mes
                      <span className="icon-despleg Filter-Icon-Arrow"></span>
                    </Dropdown.Toggle>
                    <Dropdown.Menu className="Filter-Dropdown-List">
                      {
                        renderMonths()
                      }
                    </Dropdown.Menu>
                  </Dropdown>
                </div>
              </div>
              
              <div className="App-Reserves-More col-md-12 d-sm-block d-md-none justify-content-center py-3">
                <div className="row justify-content-center">  
                  <div className="d-flex ign-self-center">
                    <span onClick={ handlePrev }  className="icon-mas_izquierda App-Reserves-Arrow"></span>
                  </div>  
                  <div className="d-flex align-self-center">
                    <span className="mx-3">Ver más días</span>
                  </div>  
                  <div className="d-flex align-self-center">
                    <span onClick={ handleNext }  className="icon-mas_derecha App-Reserves-Arrow"></span>
                  </div>  
                </div>
              </div>  
            </div>  



      <Row className="barraaa d-flex pb-5 align-items-center App-Reserves-Gris pr-3">
        <Col className="align-items-center">
          <div className="App-Reserves-Table row mx-md-3 App-Reserver-Full-Width">  
            <div className=" col-md-12 d-none d-md-flex justify-content-between  py-2 ">
              <div className="d-flex">
                <div className="align-self-center d-flex mr-2">
                  <span className="icon-calendario"></span> 
                </div>
                <div className="align-self-center d-flex">
                  <span className="first-letter-Capital">{ moment(initialDay).format('MMMM') }</span>
                </div>
              </div>
              <div className="d-flex">
                <div className="align-self-center d-flex">
                  <span onClick={ handlePrev } className="icon-mas_izquierda App-Reserves-Arrow"></span>
                </div>  
                <div className="align-self-center d-flex">
                  <span className="mx-3">Ver más días</span>
                </div>  
                <div className="align-self-center d-flex">
                  <span onClick={ handleNext } className="icon-mas_derecha App-Reserves-Arrow"></span>
                </div>  
              </div>
              <div className="align-self-center mr-4">
                <Dropdown className="flex-grow-1 d-md-flex">
                  <Dropdown.Toggle className="App-Reserves-Drd Filter-Button">
                    Seleccionar mes
                    <span className="icon-despleg Filter-Icon-Arrow"></span>
                  </Dropdown.Toggle>
                  <Dropdown.Menu className="Filter-Dropdown-List">
                  {
                    renderMonths()
                  }
                  </Dropdown.Menu>
                </Dropdown>
              </div>
            </div>

            

            {
              renderReserverDays(initialDay)
            }
          </div>
        </Col>
      </Row>
    </React.Fragment>
  );
}

const mapStateToProps = state => {
  return {
    token: state.authentication.token,
    reservesList: state.reserves.reservesList
  };
};

const mapDispatchToProps = {
  getReserves,
};

Reserves.prototype = {
  getReserves: PropTypes.func.isRequired,
  token: PropTypes.string.isRequired,
  reservesList: PropTypes.array.isRequired
};

export default connect(mapStateToProps, mapDispatchToProps)(Reserves);
