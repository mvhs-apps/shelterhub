import React, { Component } from 'react';
import { Link } from 'react-router-dom';
export default class NavBar extends Component {
  render() {
    return(
      <ul className="nav-bar">
        <li className="nav-bar_item" id="header-item"> <a className="nav-bar_header">Shelterhub</a> </li> 
        <li className="nav-bar_item"> <Link className="nav-bar_button" to='/about'>About</Link> </li> 
        <li className="nav-bar_item"> <Link className="nav-bar_button" to='/signin'>Sign In</Link></li> 
        <li className="nav-bar_item"> <Link className="nav-bar_button" to='/contactus'>Contact Us</Link> </li> 

        
        
      </ul>
    );
  }
}