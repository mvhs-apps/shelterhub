import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import registerServiceWorker from './registerServiceWorker';
import './stylesheets/style.css';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import SignUpPage from './components/sign-up-page/sign-up-page';
import SignInPage from './components/sign-in-page/sign-in-page';
import ProfilePage from './components/profile-page/profile-page';
import About from './components/about';
import ContactUs from './components/contact-page/contact-us';
import Home from './components/home';
import Database from './components/database';

ReactDOM.render(
 <BrowserRouter> 
    <Switch>
        <Route path="/profile" exact component ={ProfilePage} />
        <Route path="/signin" exact component = {SignInPage} />
        <Route path="/signup" exact component = {SignUpPage} />
        <Route path="/about" exact component ={About} />
        <Route path="/contactus" exact component ={ContactUs} />
        <Route path="/database" exact component ={Database} />
        <Route path="" exact component ={Home} />
    </Switch>
</BrowserRouter>
,document.getElementById('root'));

registerServiceWorker();
