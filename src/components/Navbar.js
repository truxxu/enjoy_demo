import React from "react";
import Button from "react-bootstrap/Button";
import Row from "react-bootstrap/Row";
import { Link } from "react-router-dom";
import logo from "../images/logo.png";
import "../styles/Navbar.css";
import SearchInput from "./SearchInput";
import $ from 'jquery';

positionBar();
 $(window).scroll(function() {    
  positionBar();
});

 function positionBar() {
  var header_height = $('.App-Category-List-Text').outerHeight(true);

  var widthBrowser = window.outerWidth;

  if(widthBrowser > 768){
    if ($(window).scrollTop() >= header_height+340){
      setBar();
      $('#Btn-Acceder-Mov').hide(); 
    }else{
      setBarInit();
    }
    $('#Search-Input-Id').removeClass('App_Navbar_Width_Full');
  }else{
    if ($(window).scrollTop() >= header_height+100){
      setBar();
      $('.App-Navbar').removeClass('App_Navbar_Justify_Center');
    }else{
      setBarMovilInit();
    }
  }
  
 }

function setBar(){  
    $(".App-Navbar").css("z-index","4000");
    $('.App-Navbar').removeClass('App_Navbar_Blanco');
    $('.App-Navbar').addClass('App_Navbar_Dorado');
    $('.App-Navbar').addClass('App_Navbar_Justify_Center');
    $('.App-Navbar').addClass('App_Navbar_Width_Full');
    $('.App-Navbar').addClass('position-fixed');
    $('#Link-List-Id').hide();
    $('#Search-Input-Id').show();
    $('.App-Header-Search').removeClass('mb-4');
}

function setBarInit() {
  $('.App-Navbar').addClass('App_Navbar_Blanco');
  $('.App-Navbar').removeClass('position-fixed');
  $('#Search-Input-Id').hide();
  $('#Link-List-Id').show();
}

function setBarMovilInit() {
  $('.App-Navbar').addClass('App_Navbar_Dorado');
  $('.App-Navbar').removeClass('position-fixed');
  $('.App-Navbar').removeClass('App_Navbar_Width_Full');
  $('.App-Navbar').removeClass('App_Navbar_Justify_Center');
  $('#Link-List-Id').hide();
  $('#Search-Input-Id').hide(); 
  $('#Btn-Acceder-Mov').show(); 
  $('#Btn-Acceder').hide();
}

class Navbar extends React.Component {

  componentDidMount() {
    var widthBrowser = window.outerWidth;
    if(widthBrowser < 768){
      $('#Link-List-Id').hide();
      $('#Btn-Acceder').hide();
    }else{
      $('#Btn-Acceder-Mov').hide(); 
    }

    $('#Search-Input-Id').hide();
  }
  
  render(){
  return (
    <Row className="App-Navbar justify-content-between justify-content-md-center py-4">
      <div className="col-auto">
        <Link to="/">
          <img src={logo} className="App-logo" alt="logo" />
        </Link>
      </div>
      <div id="Link-List-Id" className="col-auto align-items-center">
        <div className="App-Navbar-Link-List">
          <Link to="/services" className="App-Navbar-Link">
            Mujer 
          </Link>
          <Link to="/services" className="App-Navbar-Link">
            Hombre
          </Link>
          <Link to="/services" className="App-Navbar-Link">
            Niños
          </Link>
          <Link to="/services" className="App-Navbar-Link">
            Mascotas
          </Link>
        </div>
      </div>
      <div id="Btn-Acceder-Mov" className="col-auto align-items-center">
        <Button className="App-Button">Acceder</Button>
      </div>
      <div id="Search-Input-Id" className="App_Navbar_Width_Full align-items-center">
        <SearchInput />
      </div>
      <div className="col-auto d-none d-md-flex align-items-center">
        <div className="App-Social-Links">
          <a href="https://instagram.com">
            <span className="icon-instagram"></span>
          </a>
          <a href="https://facebook.com">
            <span className="icon-facebook"></span>
          </a>
        </div>
      </div>
      <div id="Btn-Acceder" className="col-auto align-items-center">
        <Button className="App-Button">Acceder</Button>
      </div>
    </Row>
  );
 }
}

export default Navbar;
