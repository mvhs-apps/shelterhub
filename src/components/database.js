import React, { Component } from 'react';
import NavBar from './nav-bar';
import Fire from '../firebase.js';
export default class Database extends Component {
  constructor() {
    super();


    this.state = {
      itemList: [],
      displayList: [],
      isLoading: true,
      newName: "",
      ItemName:"",
      searchItem:"",
      ItemQuantityNum: ""
    };

    this.handleItemNameInput= this.handleItemNameInput.bind(this);
    this.handleItemQuantityNumInput= this.handleItemQuantityNumInput.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleReset = this.handleReset.bind(this);
    this.handleSearch = this.handleSearch.bind(this);
    this.handleSearchItem = this.handleSearchItem.bind(this);
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

      this.setState({itemList: tempItemList, displayList: tempItemList, isLoading: false });
      
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
        ItemQuantityNum : "EXCESS"
    }

    const anItem2 = {
        ItemName : "Toothpaste",
        ItemQuantityNum : "DEFICIT"
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

  handleSearchItem(event){
    console.log("HandleSearchItem")
    this.setState({ searchItem : event.target.value});
  }
  
  handleSearch(event){
    event.preventDefault();
    console.log("HandleSearch")
    //Very Inefficient Search (Not sure how to make it more efficient) -Patrick
    //Gets a list of all items through FireBase
    //Compares the names of each item to the search term
    //If any part of the word matches, add to the Display List
    //Display list is now the list shown, not item list

    //The following code get a particular table
    const itemsDB = Fire.database().ref("ItemList");

    //Store content of the database into an array to be used
    //to set the state later.
    const tempItemList = [];

    //Get ItemList from the DB and add it to the local list.
    itemsDB.on('value',snapshot => {
      //Read each item in itemList
      //Store it in a temporary array
      snapshot.forEach(childSnapShot => {
        //childSnapShot.key is the name of the data
        //childSnapShot.val() is the value of the data

        const fullItemName = childSnapShot.val().ItemName;
        if (fullItemName.includes(this.state.searchItem)){
          tempItemList.push(childSnapShot.val());
        }
        
      });

      this.setState({displayList: tempItemList});
    });
  }

  render() {
    //when date is being loaded
    if (this.state.isLoading) {
      return (
        <div>
          <NavBar />
          <div className="page-content">
          Loading Database...
          </div>
        </div>
      );
    }
    return(
      
      <div>
        <NavBar />

        <div className="page-content">
          <h1>Database</h1>
          <br />
          <h3>Add</h3>
          <form onSubmit={this.handleSubmit}>
            <input class="textfield-test"
              placeholder="Item Name"
              value={this.state.ItemName}
              onChange={this.handleItemNameInput}/>
            <input class="textfield-test"
              placeholder="Item Quantity"
              value={this.state.ItemQuantityNum}
              onChange={this.handleItemQuantityNumInput}/>
            <button class="button-test" type="submit" value="Submit">Add Item</button>
            <button class="button-test" onClick={this.handleReset}>Reset List</button>
          </form>

          <br />

          <h3>Search</h3>
          <form onSubmit={this.handleSearch}>
              <input 
              placeholder="Name of Item"
              value={this.state.searchItem}
              onChange={this.handleSearchItem}/>
              <button value="Submit">Search</button>
          </form>

          <h1>Inventory List</h1>
          <table BORDER="5"    WIDTH="40%"   CELLPADDING="4" CELLSPACING="3">
            <th>Item Name</th>
            <th>Quantity</th>
            {
              this.state.displayList.map( (item) => 
                <tr ALIGN="CENTER">
                  <td> {item.ItemName} </td>
                  <td> {item.ItemQuantityNum} </td>
                    
                </tr>
              )
            }
          </table>
          <div>
            <p>Include a table with item name and status (deficit/excess). </p>
            <p>Pair up items in excess with other inventories and update shelters weekly. </p>
            <p>Make sure each shelter updates their status weekly. </p>
          </div> 
        </div>
      </div>
    );
  }
}
