import React, { Component } from 'react';

import NavBar from './components/NavBar';

import Fire from './firebase.js';

const database = Fire.database();
const auth = Fire.auth();

const variable = input => <h1>{input}</h1>;

export default class App extends Component {
  render() {
    return(
      <div>
        <NavBar />
        <div className='page-body'>
          {variable('Hello, world!')}
        </div>
      </div>
    );
  }
}
