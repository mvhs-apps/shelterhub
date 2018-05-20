import React, { Component } from 'react';
import { Link } from 'react-router-dom'
import Fire from '../../firebase.js';

const database = Fire.database();
const auth = Fire.auth();
export default class ProfilePanel extends Component {
  constructor(props) {
    super(props);
    this.state = {
        user:auth.currentUser
    };
    this.UserRender = this.UserRender.bind(this);
    this.GuestRender = this.GuestRender.bind(this);
  }
  UserRender() {
    return <div className='panel_body'>Welcome back!</div>;
  }

  GuestRender() {
    return <div className='panel_body'>Please sign up.</div>;
  }
  render() {
    return(
      <div className='profile-panel'>
        <div className='panel_header'>
          <h1>Profile</h1>
        </div>  
        {this.state.user ? (
          this.UserRender()
        ) : (
          this.GuestRender()
        )}
      </div>
    );
  }
}
