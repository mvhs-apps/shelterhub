import React, { Component } from 'react';
import NavBar from './nav-bar';
import Fire from '../firebase.js';
export default class Database extends Component {
  constructor() {
    super();


    this.state = {
      itemList: [],
      isLoading: true,
      newName: "",
    };

    
  }
  //Gets call once when loading the page
  componentWillMount() {

    
    //allow your app to sign in anonomously
    Fire.auth().signInAnonymously().catch(function(error) {
        // Handle Errors here.
        var errorCode = error.code;
        var errorMessage = error.message;
        // ...
    });
    

    //Get the Shopping List table of firebase
    const shoppingsDB = Fire.database().ref("ItemList");

    const tempshoppingList = [];
    shoppingsDB.on('value',snapshot => {
      //Read each item in shoppings
      //Store it in a temporary array
      snapshot.forEach(childSnapShot => {
        //childSnapShot.key is the name of the data
        //childSnapShot.val() is the value of the data
        tempshoppingList.push(childSnapShot.val());
        
      });

      this.setState({itemList: tempshoppingList, isLoading: false });
      
    });

    
    
}
  render() {
    return(
      
      <div>
        <NavBar />
        <h1>Database</h1>
        <br />
        <br />List:
        { this.state.itemList.map( (item) => <li>{item}</li> ) }
      </div>
    );
  }
}