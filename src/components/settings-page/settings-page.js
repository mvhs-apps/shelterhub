import React, { Component } from 'react';
import NavBar from '../nav-bar';

export default class Settings extends Component {
  render() {
    return(
      <div>
        <NavBar />
        <div className="page-content">
          <h1 className="title-head">Settings</h1>
        </div>
      </div>
    );
  }
}