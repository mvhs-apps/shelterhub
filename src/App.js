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
//<<<<<<< HEAD
        <div>
            my name is jeff
        </div>

        <SignInPanel />
//>>>>>>> 33fe284c03b577fe5b4a0091789539b088e909cf
      </div>
    );
  }
}
