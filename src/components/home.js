import React, { Component } from 'react';
import NavBar from './nav-bar';
import Fire from '../firebase.js';
import { Link } from 'react-router-dom';
export default class Home extends Component {
  constructor() {
    super();

    
  }
  render() {
    return (
      <div>
        <NavBar />

        <h1>Welcome to ShelterHub!</h1>
        <br />
        <p>ShelterHub is a nonprofit organization that strives to provide an easy, intuitive user interface for homeless shelters and others to communicate with each other.</p>
        <br />
        <p>Homeless shelters would create a ShelterHub account, thus granting them access to other shelters' contact information, inventory totals, and other relevant details.</p> 
        <br />
        <p>However, ShelterHub is not confined to purely homeless shelter accounts. Without signing up, you are free to read our up-to-date information about the various homeless shelters and programs currently on ShelterHub, including (but not limited to) pictures, reviews, and contact information.</p>
        <br />
        <br />
        <p>Learn more about ShelterHub on our {<Link to='/about'>About page</Link>}.</p>
        <br />
        <p>Feel free to {<Link to='/contactus'>contact us</Link>} here.</p>
      </div>
    );
  }
}
