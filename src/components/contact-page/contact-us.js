import React, { Component } from 'react';
import NavBar from '../nav-bar';

export default class ContactUs extends Component {
  render() {
    return(
      <div>
        <NavBar />
        <h1>Contact Us</h1>
        <br />
        <p>E-mail: shelterhub.contact@gmail.com</p> 
      </div>
    );
  }
}