import React, { Component } from 'react';
import Fire from '../../firebase.js';

const database = Fire.database();
const auth = Fire.auth();

export default class SignUpPanel extends Component {
  constructor(props) {
    super(props);
    this.state = {
      emailInputVal: '',
      passwordInputVal: ''
    };

    this.onEmailInputChange = this.onEmailInputChange.bind(this);
    this.onPasswordInputChange = this.onPasswordInputChange.bind(this);
    this.createUser = this.createUser.bind(this);
  }

  onEmailInputChange(e) {
    this.setState({emailInputVal: e.target.value});
  }

  onPasswordInputChange(e) {
    this.setState({passwordInputVal: e.target.value});
  }

  createUser() {
    auth.createUserWithEmailAndPassword(this.state.emailInputVal, this.state.passwordInputVal);
    console.log('Created User with Credentials')
  }

  render() {
    return(
      <div className='sign-in-panel'>
        <div className='panel_header'>
          <h1>Create an Account</h1>
        </div>
        <div className='panel_left-side-bar'>
        </div>
        <div className='panel_right-side-bar'>
          <input 
           placeholder="Email"
           value={this.state.emailInputVal}
           onChange={this.onEmailInputChange}/>
          <input 
           placeholder="Password"
           value={this.state.passwordInputVal}
           onChange={this.onPasswordInputChange}/>
           <button onClick={this.createUser} >Submit</button>
        </div>
      </div>
    );
  }
}