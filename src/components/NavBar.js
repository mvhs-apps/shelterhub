import React, { Component } from 'react';

export default class NavBar extends Component {
  render() {
    return(
      <ul className="nav-bar">
        <li className="nav-bar_item" id="header-item"> <a className="nav-bar_header">Shelterhub</a> </li> 
        <li className="nav-bar_item"> <a className="nav-bar_button">About</a> </li> 
        <li className="nav-bar_item"> <a className="nav-bar_button">Sign Up</a> </li> 
        <li className="nav-bar_item"> <a className="nav-bar_button">Contact Us</a> </li> 
      </ul>
    );
  }
}