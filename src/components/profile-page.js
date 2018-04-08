import React, { Component } from 'react';
import NavBar from './nav-bar';
import ProfilePanel from './profile-panel';
import SignInPanel from './sign-in-panel';

export default class ProfilePage extends Component {
  render() {
    return(
      <div>
        <NavBar />
        <ProfilePanel createUser={this.props.createUser} />
      </div>
    );
  }
}