import React, { useEffect } from "react";
import Button from "react-bootstrap/Button";
import Row from "react-bootstrap/Row";
import { Link } from "react-router-dom";
import { connect } from "react-redux";
import PropTypes from "prop-types";

import logo from "../images/logo.png";
import "../styles/Navbar.css";
import { setCategory } from "../actions/categories";
import SearchInput from "./SearchInput";

function Navbar(props){ 
  
  const { list, setCategory } = props;
  let AppNavBar = '';
  let LinkList = '';
  let SearchInputDiv = '';
  let AppHeaderSearch = '';
  let BtnAcceder = '';
  let BtnAccederMov = '';
  
  useEffect(() => {
    window.addEventListener('scroll', handleScroll, true);
    AppNavBar = document.getElementsByClassName('App-Navbar')[0];
    LinkList = document.getElementById('Link-List-Id');
    SearchInputDiv = document.getElementById('Search-Input-Id');
    AppHeaderSearch = document.getElementsByClassName('App-Header-Search')[0];
    BtnAcceder = document.getElementById('Btn-Acceder');
    BtnAccederMov = document.getElementById('Btn-Acceder-Mov');


    var widthBrowser = window.outerWidth;
    if(widthBrowser < 768){
      LinkList.style.display = 'none';
      BtnAcceder.style.display = 'none';
    }else{
      BtnAccederMov.style.display = 'none';
    }

    SearchInputDiv.style.display = 'none';

  }, []);

  const handleScroll = () => {
    positionBar();
  };

  function positionBar() {
    var widthBrowser = window.outerWidth;
  
    if(widthBrowser > 768){
      if (window.pageYOffset >= 450){
        setBar();
        BtnAccederMov.style.display = 'none';
        
      }else{
        setBarInit();
      }
      SearchInputDiv.classList.remove('App_Navbar_Width_Full');
    }else{
      if (window.pageYOffset >= 230){
        setBar();
        AppNavBar.classList.remove('App_Navbar_Justify_Center');
      }else{
        setBarMovilInit();
      }
    }
    
   }
  
function setBar(){  
    AppNavBar.style = "z-index:4000";
    AppNavBar.classList.remove('App_Navbar_Blanco');
    AppNavBar.classList.add('App_Navbar_Dorado');
    AppNavBar.classList.add('App_Navbar_Justify_Center');
    AppNavBar.classList.add('App_Navbar_Width_Full');
    AppNavBar.classList.add('position-fixed');
    LinkList.style.display = 'none';
    SearchInputDiv.style.display = 'block';
    AppHeaderSearch.classList.remove('mb-4');
}

function setBarInit() {
  AppNavBar.classList.add('App_Navbar_Blanco');
  AppNavBar.classList.remove('position-fixed');
  SearchInputDiv.style.display = 'none';
  LinkList.style.display = 'block';
}

function setBarMovilInit() {
  AppNavBar.classList.add('App_Navbar_Dorado');
  AppNavBar.classList.remove('position-fixed');
  AppNavBar.classList.remove('App_Navbar_Width_Full');
  AppNavBar.classList.remove('App_Navbar_Justify_Center');
  LinkList.style.display = 'none';
  SearchInputDiv.style.display = 'none';
  BtnAccederMov.style.display = 'block';
  BtnAcceder.style.display = 'none';
}  

  const setActiveItem = item => {
    setCategory(item);
  };
  
  const renderCategory = category => {
    return (
      <Link
        to="/services"
        className="App-Navbar-Link"
        key={category.id}
        onClick={() => setActiveItem(category)}
      >
        {category.name}
      </Link>
    );
  };  

  return (
    <Row className="App-Navbar justify-content-between justify-content-md-center py-4">
      <div className="col-auto">
        <Link to="/">
          <img src={logo} className="App-logo" alt="logo" />
        </Link>
      </div>
      <div id="Link-List-Id" className="col-auto align-items-center">
        <div className="App-Navbar-Link-List">
          {list.map(category => renderCategory(category))}
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

const mapStateToProps = state => {
  return {
    list: state.categories.list
  };
};
const mapDispatchToProps = {
  setCategory
};

Navbar.prototype = {
  list: PropTypes.array.isRequired,
  setCategory: PropTypes.func.isRequired
};

export default connect(mapStateToProps, mapDispatchToProps)(Navbar);