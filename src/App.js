import React, { Component } from 'react';

import SignInPage from './components/sign-in-page';

import Fire from './firebase.js';

const database = Fire.database();
const auth = Fire.auth();

export default class App extends Component {

  createUser(email, password) {
    auth.createUserWithEmailAndPassword(email, password);
  }

  render() {
    return(
      <div className="page-body">
        <SignInPage createUser={this.createUser} />
      </div>
    );
  }
}
