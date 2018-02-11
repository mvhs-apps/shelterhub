import React, { Component } from 'react';

import NavBar from './components/NavBar';

import Fire from './firebase.js';

const database = Fire.database();
const auth = Fire.auth();

export default class App extends Component {
  render() {
    return(
      <div className="page-body">
        <NavBar />
        <h1>Hello</h1>
      </div>
    );
  }
}
