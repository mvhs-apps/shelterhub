import React, { Component } from 'react';

export default class SignUpPanel extends Component {
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
        <div className='panel_left-side-bar'>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. 
          Donec congue at nisl quis pretium. Praesent euismod tempor magna vel accumsan. 
          Mauris a condimentum elit, vel fermentum sapien. 
          Mauris eu augue nec orci fermentum feugiat. 
          Nulla et eros sit amet erat aliquam accumsan quis id diam. 
          Suspendisse potenti. Nullam at rutrum turpis. </p>
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
           <button>Submit</button>
        </div>
      </div>
    );
  }
}