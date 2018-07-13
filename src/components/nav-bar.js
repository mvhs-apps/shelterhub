import React, { Component } from 'react';
import { Link } from "react-router-dom";
export default class NavBar extends Component {
  render() {
    return(
      <div>
        <ul>
          <li className="nav-bar_title"><Link to={""}>ShelterHub</Link></li>
          <li className="nav-bar_item"><Link to={"/settings"}>Settings</Link></li>
          <li className="nav-bar_item"><Link to={"/about"}>About</Link></li>
          <li className="nav-bar_item"><Link to={"/contactus"}>Contact</Link></li>
          <li className="nav-bar_item"><Link to={"/profile"}>Profile</Link></li>
          <li className="nav-bar_item"><Link to={"/database"}>Inventory</Link></li>
        </ul>
      </div>
    );
  }
}