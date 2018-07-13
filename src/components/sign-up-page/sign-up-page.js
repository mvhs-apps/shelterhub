import React, { Component } from 'react';
import NavBar from '../nav-bar';
import SignUpPanel from './sign-up-panel';

export default class SignUpPage extends Component {
  render() {
    return(
      <div>
        <NavBar />
        <div className="page-content">
          <SignUpPanel createUser={this.props.createUser} />
        </div>
      </div>
    );
  }
}