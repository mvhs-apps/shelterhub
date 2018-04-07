import React, { Component } from 'react';
import { Link } from 'react-router-dom'
import Fire from '../firebase.js';

const database = Fire.database();
const auth = Fire.auth();
export default class ProfilePanel extends Component {
  constructor(props) {
    super(props);
    this.state = {
        user:auth.currentUser,
        email:'',
        username:''
    };
  }
  render() {
    return(
      <div className='profile-panel'>
        <div className='panel_header'>
          <h1>Profile</h1>
        </div>
       {/*<div className='panel_body'>
            Email: {this.state.user.username}
        </div>*/}
      </div>
    );
  }
}
