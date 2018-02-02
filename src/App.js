import React, { Component } from 'react';

import NavBar from './components/NavBar';

const colliePhoto = {
  url: "http://www.petwave.com/-/media/Images/Center/Breed/Dogs/Herding-Group/Collie/Collie-Face.ashx",
  alt: "Collie Photo"
}

export default class App extends Component {
  render() {
    return(
      <div>
        <NavBar />
        <div className='page-body'>
          I need your love.<br/>
          <img src={colliePhoto.url} alt={colliePhoto.alt} />
          look at this fine lad
        </div>
      </div>
    );
  }
}
