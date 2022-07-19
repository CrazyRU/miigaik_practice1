import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { NavbarBrand } from 'react-bootstrap';

import logo from '../Assets/logo1.png';

export default class Header extends Component {
  render() {
    return (
        <>
        <div id="rectangle"></div>
        <div class="header">
          <NavbarBrand href='/'>
            <img class='logo'
              src={logo}
              alt='Logo' 
            />
          </NavbarBrand>
          <div class="nav-menu">
              <div class="nav-item"><Link to='/'>Home</Link></div>
              <div class="nav-item"><Link to='/articles'>Articles</Link></div>
              <div class="nav-item"><Link to='/stories'>Stories</Link></div>
              <div class="nav-item"><Link to='/account'>Account</Link></div>
          </div>
        </div>
        </>
    )
  }
}
