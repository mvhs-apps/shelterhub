import React, { Component } from 'react';

export default class SignInPanel extends Component {
  constructor(props) {
    super(props);
    this.state = {
      emailInputVal: '',
      passwordInputVal: ''
    };
  }

  render() {
    return(
      <div className='sign-in-panel'>
        <div className='panel_header'>
          <h1>Create an Account</h1>
        </div>
        <div className='panel_side-bar--left'>
          
        </div>
        <div className='panel_side-bar--right'>
          <input placeholder="Email"/>
          <input placeholder="Password"/>
        </div>
      </div>
    );
  }
}