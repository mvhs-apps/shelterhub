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
      <div className='panel-container'>
        <label for='email-input'>Email</label>
        <input id='email-input'/>
        <label for='password-input'>Password</label>
        <input id='password-input'/>
      </div>
    );
  }
}