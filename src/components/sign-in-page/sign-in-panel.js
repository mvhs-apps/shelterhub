import React, { Component } from 'react';
import Fire from '../../firebase.js';
import { Link } from 'react-router-dom';
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

  /* /////////remove this soon
  firebase.auth().getRedirectResult().then( function (result){
      // This gives you a Google Access Token. You can use it to access the Google API.
      const token = result.credential.accessToken;
      // The signed-in user info.
      const user = result.user;

      //Set the state user variable
      this.setState({ user });
      // ...
      }).catch(function(error) {
        // Handle Errors here.
        const errorCode = error.code;
        const errorMessage = error.message;
        // The email of the user's account used.
        const email = error.email;
        // The firebase.auth.AuthCredential type that was used.
        const credential = error.credential;
        // ...
        
  });
  /*
  componentDidMount() {
    

    //when you hit reload, this will check if you already logged in
    //and will set the user variable accordingly.
    firebase.auth().onAuthStateChanged((user) => {
      if (user) {
        this.setState({ user });
      } 
      
      this.setState({ loading: false });
    });

    firebase.auth().getRedirectResult().then( function (result){
      // This gives you a Google Access Token. You can use it to access the Google API.
      const token = result.credential.accessToken;
      // The signed-in user info.
      const user = result.user;

      //Set the state user variable
      this.setState({ user });
      // ...
      }).catch(function(error) {
        // Handle Errors here.
        const errorCode = error.code;
        const errorMessage = error.message;
        // The email of the user's account used.
        const email = error.email;
        // The firebase.auth.AuthCredential type that was used.
        const credential = error.credential;
        // ...
        
    });
  }

  login(){
    //console.log("sign-in");
    //This code will setup the Google login page
    const provider = new firebase.auth.GoogleAuthProvider();
    firebase.auth().signInWithRedirect(provider);
  }

  logout() {
    //This will sign out of firebase authentication and set
    //the user variable to null
    firebase.auth().signOut()
    .then(() => {
      this.setState({
        user: null
      });
    });
  }*/

  render() {
    return (
      <div className="page-content">
        <h1>Sign In</h1>
        <p>Please sign in with an existing account to view your profile. 
           If you do not have an account, you may {<Link to='/signup'>sign 
           up here</Link>}! </p>
        <form>
          <p className="label">Email</p>
          <input 
           placeholder="Email"
           value={this.state.emailInputVal}
           onChange={this.onEmailInputChange}/>
          <p className="label">Password</p>
          <input 
           type="password"
           placeholder="Password"
           value={this.state.passwordInputVal}
           onChange={this.onPasswordInputChange}/>
           <button onClick={this.props.signInUser}>Sign In</button>
        </form> 
      </div>
    );
  }
}
