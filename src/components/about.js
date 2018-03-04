import React, { Component } from 'react';
import NavBar from './nav-bar';

export default class About extends Component {
  render() {
    return(
      <div>
        <NavBar />
       <h1>
           About Us
       </h1>
       <br />
       <h3>ShelterHub strives to bring homeless shelters closer together through the integrated use of technology.</h3>
       <h3>Here, you will be able to communicate and connect with many other shelters in your local community.</h3>
      </div>
    );
  }
}