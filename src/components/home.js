import React, { Component } from 'react';
import NavBar from './nav-bar';

export default class Home extends Component {
  render() {
    return(
      <div>
        <NavBar />
       <p>
            Home page
       </p>
      </div>
    );
  }
}