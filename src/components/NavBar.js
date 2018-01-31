import React, { Component } from 'react';

export default class NavBar extends Component {
  render() {
    return(
      <div className="nav-bar">
        <a className="nav-bar_header">Shelterhub</a>
        <a className="nav-bar_button">About</a>
        <a className="nav-bar_button">Contact Us</a>
      </div>
    );
  }
}