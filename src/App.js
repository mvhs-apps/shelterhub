import React, { Component } from 'react';

import NavBar from './components/NavBar';

import Fire from './firebase.js';

const database = Fire.database();
const auth = Fire.auth();

export default class App extends Component {
  render() {
    return(
      <div class="page-body">
        <NavBar />
        <img class="half-width-image" src="http://www.pinknews.co.uk/images/foodchain.jpg" alt="Volunteers on Food Line" />
      </div>
    );
  }
}
