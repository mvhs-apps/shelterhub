import React, { Component } from 'react';

import NavBar from './components/nav-bar';
import SignInPanel from './components/sign-in-panel';

import Fire from './firebase.js';

const database = Fire.database();
const auth = Fire.auth();

export default class App extends Component {
  render() {
    return(
      <div className="page-body">
        <NavBar />
        <SignInPanel />
      </div>
    );
  }
}
