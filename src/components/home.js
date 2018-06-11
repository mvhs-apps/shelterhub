import React, { Component } from 'react';
import NavBar from './nav-bar';
import Fire from '../firebase.js';
export default class Home extends Component {
  constructor() {
    super();
  }

  render() {
    return (
      <div className='home-page'>
        <NavBar />

        <h1>Welcome to ShelterHub!</h1>
        <br />
        <h2>Our Mission</h2>
        <p>ShelterHub is a nonprofit organization that strives to provide an easy, intuitive user interface for homeless shelters and others to communicate with each other.</p>
        <p>Homeless shelters would create a ShelterHub account, thus granting them access to other shelters' contact information, inventory totals, and other relevant details.</p> 
        <p>However, ShelterHub is not confined to purely homeless shelter accounts. Without signing up, you are free to read our up-to-date information about the various homeless shelters and programs currently on ShelterHub, including (but not limited to) pictures, reviews, and contact information.</p>
      </div>
    );
  }
}

//{<Link to='/signin'>sign up here</Link>}