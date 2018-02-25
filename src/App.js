import React, { Component } from 'react';

<<<<<<< HEAD
import SignInPage from './components/sign-in-page';

=======
import NavBar from './components/nav-bar';
import SignInPanel from './components/sign-in-panel';
>>>>>>> f28a21b79a20ec7126828c92c32e28633965f3b3
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
        <SignInPage />
      </div>
    );
  }
}
