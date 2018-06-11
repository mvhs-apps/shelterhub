import React, { Component } from 'react';
import NavBar from '../nav-bar';
export default class Home extends Component {
  constructor() {
    super();

    
  }
  render() {
    return(
      
      <div>
        <NavBar />
        <h1>Welcome to ShelterHub!</h1>
        <br />
        <h2>Our mission</h2>
        <br /> 
        <h3>Want to learn more? Have any questions? Interested in joining?</h3>
        <h3><a href="http://localhost:3000/about" >Venture here.</a></h3>

        <pre id="object"></pre>
      </div>
    );
  }
}