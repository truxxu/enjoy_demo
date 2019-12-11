import React, { useEffect } from "react";
import Button from "react-bootstrap/Button";
import Container from "react-bootstrap/Container";
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
  let SocialLinks = '';
  let SearchInputDivMov = '';
  
  useEffect(() => {
    window.addEventListener('scroll', handleScroll, true);
    AppNavBar = document.getElementsByClassName('App-Navbar')[0];
    LinkList = document.getElementById('Link-List-Id');
    SocialLinks = document.getElementById('Social-Links');
    SearchInputDiv = document.getElementById('Search-Input-Id');
    AppHeaderSearch = document.getElementsByClassName('App-Header-Search')[0];
    BtnAcceder = document.getElementById('Btn-Acceder');
    SearchInputDivMov = document.getElementById('Search-Input-Id-Mov');
    
    var widthBrowser = window.outerWidth;
    if(widthBrowser < 768){
      SearchInputDiv.classList.add('d-none');
      SocialLinks.classList.add('d-none');
    }else{
      SearchInputDiv.classList.add('d-none');
    }

  }, []);

  const handleScroll = () => {
    positionBar();
  };

  function positionBar() {
    var widthBrowser = window.outerWidth;
  
    if(widthBrowser > 768){
      if (window.pageYOffset >= 450){
        setBar();
      }else{
        setBarInit();
      }
    }else{
      if (window.pageYOffset >= 230){
        setBar();
        SearchInputDiv.classList.add('d-none');
        SearchInputDivMov.classList.remove('d-none');
      }else{
        setBarMovilInit();
      }
    }
  }
  
  function setBar(){  
    AppNavBar.classList.add('fixed-top');
    LinkList.classList.remove('d-md-flex');
    SocialLinks.classList.remove('d-md-flex');
    SocialLinks.classList.add('d-none');
    SearchInputDiv.classList.remove('d-none');
    AppHeaderSearch.classList.remove('mb-4');
  }

  function setBarInit() {
    AppNavBar.classList.remove('fixed-top');
    LinkList.classList.add('d-md-flex');
    SocialLinks.classList.remove('d-none');
    SocialLinks.classList.add('d-md-flex');
    SearchInputDiv.classList.add('d-none');
  }

  function setBarMovilInit() {
    AppNavBar.classList.remove('fixed-top');
    SearchInputDiv.classList.add('d-none');
    SearchInputDivMov.classList.add('d-none');
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
    <container>
    <Row className="App-Navbar justify-content-between py-4 px-5">
      <div className="col-auto align-items-center">
        <Link to="/">
          <img src={logo} className="App-logo" alt="logo" />
        </Link>
      </div>
      <div id="Link-List-Id" className="col-auto d-none d-md-flex align-items-center">
        <div className="App-Navbar-Link-List">
          {list.map(category => renderCategory(category))}
        </div>
      </div>
      <div id="Search-Input-Id" className="col-auto align-items-center">
        <SearchInput />
      </div>
      <div id="Social-Links" className="col-auto d-none d-md-flex align-items-center">
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
      <div id="Search-Input-Id-Mov" className="col-auto d-none align-items-center mt-3 App_Navbar_Width_Full App_Navbar_Mar_Search">
        <SearchInput />
      </div>
    </Row>
    </container>
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