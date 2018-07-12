import React, { Component } from 'react';
import NavBar from '../nav-bar';
import { Link } from 'react-router-dom'; 
export default class Home extends Component {
  constructor() {
    super();
  }

  render() {
    return (
      <div>
        <NavBar />

        <div className="page-content">
          <h1 className="titleHead">Welcome to ShelterHub!</h1>
          <p>ShelterHub is a nonprofit organization that strives 
            to provide an easy, intuitive user interface for homeless 
            shelters and others to communicate with each other.</p>
          <p>Homeless shelters would create a ShelterHub account, 
            thus granting them access to the contact information of other shelters, 
            inventory totals, and other relevant details.</p> 
          <p>However, ShelterHub is not confined to purely homeless 
            shelter accounts. Without signing up, you are free to 
            read our up-to-date information about the various homeless 
            shelters and programs currently on ShelterHub, including 
            (but not limited to) pictures, reviews, and contact 
            information.</p>
          <p>Learn more about ShelterHub {<Link to='/about'>here</Link>}.</p>
          <p>Contact us {<Link to='contactus'>here</Link>}.</p>
        </div>
      </div>
    );
  }
}
