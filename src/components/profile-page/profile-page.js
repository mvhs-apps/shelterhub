import React, { Component } from 'react';
import NavBar from '../nav-bar';
import ProfilePanel from './profile-panel';
import SignInPanel from '../sign-in-page/sign-in-panel';

export default class ProfilePage extends Component {
  render() {
    return(
      <div>
          <ProfilePanel createUser={this.props.createUser} />
      </div>
    );
  }
}