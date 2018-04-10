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
      ItemName:"",
      ItemQuantityNum: ""
    };

    this.handleItemNameInput= this.handleItemNameInput.bind(this);
    this.handleItemQuantityNumInput= this.handleItemQuantityNumInput.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleReset = this.handleReset.bind(this);
  }
  //Gets call once when loading the page
  componentWillMount() { 

    
    //allow your app to sign in anonomously //JOSH NOTE: Implement firebase sign in. Currently, there is no need to sign in to operate database
    Fire.auth().signInAnonymously().catch(function(error) {
        // Handle Errors here.
        var errorCode = error.code;
        var errorMessage = error.message;
        // ...
    });

    //call update itemList
    this.updateItemList();
    
}
updateItemList() {
    //The following code get a particular table
    const itemsDB = Fire.database().ref("ItemList");

    //Store content of the database into an array to be used
    //to set the state later.
    const tempItemList = [];

    //Get StudentList from the DB and add it to the local list.
    itemsDB.on('value',snapshot => {
      //Read each item in itemList
      //Store it in a temporary array
      snapshot.forEach(childSnapShot => {
        //childSnapShot.key is the name of the data
        //childSnapShot.val() is the value of the data

        const anItem = { 
          ItemName : childSnapShot.val().ItemName,
          ItemQuantityNum : childSnapShot.val().ItemQuantityNum
        }

        tempItemList.push(childSnapShot.val());
        
      });

      this.setState({itemList: tempItemList, isLoading: false });
      
    });
  }

  handleItemNameInput(event) {
    this.setState({ ItemName : event.target.value});
  }

  handleItemQuantityNumInput(event) {
    this.setState({ ItemQuantityNum : event.target.value});
  }

  handleSubmit(event) {
    

    //To add an item, you need to specify the key.
    //In this case, it is new unique number.  We can use the length of the Student list as it is the next number in our list.
    const itemNumber = this.state.itemList.length;

    //Add a new key to Student Lists. It will return the new item of that key
    const itemsDB = Fire.database().ref("ItemList/" + itemNumber);

    //This has to match your firebase database
    const anItem = { 
        ItemName : this.state.ItemName,
        ItemQuantityNum : this.state.ItemQuantityNum
    }
    
    
    //Add a value to the new student to firebase
    itemsDB.set(
      anItem
    );

    //update the screen, and clear out the form
    this.setState({
      isLoading : true, 
      ItemName: "", 
      ItemQuantityNum: "",
    });

    //this will download the Student list from firebase with the update value
    this.updateItemList();
    
    //prevent the page from reloading
    event.preventDefault();
  }
handleReset() {
    
    //reset Student list.
    //console.log("reset");
    //Get StudentList from the DB and remove it
    const ItemListDB = Fire.database().ref("ItemList");
    ItemListDB.remove();


    const anItem1 = {
        ItemName : "Toothbrush",
        ItemQuantityNum : "23"
    }

    const anItem2 = {
        ItemName : "Toothpaste",
        ItemQuantityNum : "77"
    }

    const items = {
       0 : anItem1,
       1 : anItem2
    }

    ItemListDB.set(
      items
    );

    this.setState({ isLoading: false });
    this.updateItemList();
    

  }
  render() {
    //when date is being loaded
    if (this.state.isLoading) {
      return (
        <div>
        Loading Database...
        </div>
      );
    }
    return(
      
      <div>
      <NavBar />
      <h1>Database</h1><button onClick={this.handleReset}>Reset List</button>
      <br /><br />
      <form onSubmit={this.handleSubmit}>
          <input 
           placeholder="Item Name"
           value={this.state.ItemName}
           onChange={this.handleItemNameInput}/>
          
          <br />

           <input 
           placeholder="Item Quantity"
           value={this.state.ItemQuantityNum}
           onChange={this.handleItemQuantityNumInput}/>
            <br />
            <button type="submit" value="Submit">Add Item</button>
      </form>
      <br /><br />
      List:
      { 
        this.state.itemList.map( (item) => 
          <div>
            Item Name : {item.ItemName} <br/>
            Item Quantity : {item.ItemQuantityNum} <br/>
            <br/>
          </div>
        ) 
      }
    </div>
    );
  }
}
