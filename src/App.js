import React, { Component } from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import SignUpPage from './components/sign-up-page/sign-up-page';
import SignInPage from './components/sign-in-page/sign-in-page';
import ProfilePage from './components/profile-page/profile-page';
import About from './components/about';
import ContactUs from './components/contact-page/contact-us';
import Home from './components/home-page/home';
import Database from './components/database';
import Settings from './components/settings-page/settings-page';


export default class App extends Component {
  render() {
    return(
      <BrowserRouter> 
       <Switch>
          <Route path="/profile" exact component ={ProfilePage} />
          <Route path="/signin" exact component = {SignInPage} />
          <Route path="/signup" exact component = {SignUpPage} />
          <Route path="/about" exact component ={About} />
          <Route path="/contactus" exact component ={ContactUs} />
          <Route path="/database" exact component ={Database} />
          <Route path="/settings" exact component ={Settings} />
          <Route path="" exact component ={Home} />
       </Switch>
      </BrowserRouter>
    );
  }
}
