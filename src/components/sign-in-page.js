import React, { Component } from 'react';
import NavBar from './nav-bar';
import SignInPanel from './sign-in-panel';

export default class SignInPage extends Component {
  render() {
    return(
      <div>
        <NavBar />
        <SignInPanel createUser={this.props.createUser} />
      </div>
    );
  }
}