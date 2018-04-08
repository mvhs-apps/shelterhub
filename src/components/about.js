import React, { Component } from 'react';
import NavBar from './nav-bar';

export default class About extends Component {
  render() {
    return(
      <div className="about" >
        <NavBar />
       <h1>
           About Us
       </h1>
       <br />
       <h2>Frequently Asked Questions</h2>
       <br />
       <ol>
         <li>How do I join ShelterHub?</li>
         <li>Why would I join ShelterHub?</li>
       </ol>
	     <br />
	     <br />
	     <p>Just trying to see if I can commit</p>
       <br />
       <br />
       <h3>Still have unanswered questions? Still want to learn more?</h3>
       <h3><a href="http://localhost:3000/contactus" >Shoot us an e-mail.</a></h3>
      </div>
    );
  }
}