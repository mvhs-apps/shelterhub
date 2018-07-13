import React, { Component } from 'react';
export default class NavBar extends Component {
  render() {
    return(
      <div>
        <ul>
          <li className="nav-bar_title"><a href="/Home">ShelterHub</a></li>
          <li className="nav-bar_item"><a href="/Settings">Settings</a></li>
          <li className="nav-bar_item"><a href="/About">About</a></li>
          <li className="nav-bar_item"><a href="/ContactUs">Contact</a></li>
          <li className="nav-bar_item"><a href="/Profile">Profile</a></li>
          <li className="nav-bar_item"><a href="/Database">Inventory</a></li>
        </ul>
      </div>
    );
  }
}