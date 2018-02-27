import React, { Component } from 'react';
import { Link } from 'react-router-dom'

export default class SignInPanel extends Component {
  constructor(props) {
    super(props);
    this.state = {
      emailInputVal: '',
      passwordInputVal: ''
    };

    this.onEmailInputChange = this.onEmailInputChange.bind(this);
    this.onPasswordInputChange = this.onPasswordInputChange.bind(this);
  }

  onEmailInputChange(e) {
    this.setState({emailInputVal: e.target.value});
  }

  onPasswordInputChange(e) {
    this.setState({passwordInputVal: e.target.value});
  }

  render() {
    return(
      <div className='sign-in-panel'>
        <div className='panel_header'>
          <h1>Create an Account</h1>
        </div>
        <div className='panel_side-bar--left'>
          <p>Please sign with an existing account. If you do not have an account you can {<Link to='/contactus'>Contact Us</Link>} </p>
        </div>
        <div className='panel_side-bar--right'>
          <input 
           placeholder="Email"
           value={this.state.emailInputVal}
           onChange={this.onEmailInputChange}/>
          <input 
           placeholder="Password"
           value={this.state.passwordInputVal}
           onChange={this.onPasswordInputChange}/>
           <button>Submit</button>
        </div>
      </div>
    );
  }
}