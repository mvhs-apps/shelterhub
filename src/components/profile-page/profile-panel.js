import React, { Component } from 'react';
import NavBar from "../nav-bar.js"
import { Link } from 'react-router-dom'
import Fire from '../../firebase.js';
import SignInPage from "../sign-in-page/sign-in-page.js";

const database = Fire.database();
const auth = Fire.auth();

export default class ProfilePanel extends Component {
  constructor(props) {
    super(props);
    this.state = {
      user: auth.currentUser
    };

    this.UserRender = this.UserRender.bind(this);
    this.GuestRender = this.GuestRender.bind(this);
  }

  UserRender() {
    return (
      <div className="page-content">
        <h1>My Profile</h1>
        <p>Welcome back!</p>
      </div>
    ); 
  }

  GuestRender() {
    return <SignInPage />;
  }

  render() {
    return (
      <div>
        <div className="page-content">
          {this.state.user ? (
            this.UserRender()
          ) : (
            this.GuestRender()
          )}
        </div>
      </div>
    );
  }
}