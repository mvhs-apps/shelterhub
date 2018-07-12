import React, { Component } from 'react';
import NavBar from '../nav-bar';

export default class ContactUs extends Component {
  render() {
    return(
      <div>
        <NavBar />
        <div className="page-content">
          <h1 className="title-head">Contact Us</h1>
          <p>E-mail: shelterhub.contact@gmail.com</p> 
        </div>
      </div>
    );
  }
}