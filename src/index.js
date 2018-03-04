import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import registerServiceWorker from './registerServiceWorker';
import './stylesheets/style.css';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import SignUpPage from './components/sign-up-page';
import SignInPage from './components/sign-in-page';
import About from './components/about';
import ContactUs from './components/contactUs';
import Home from './components/home';

ReactDOM.render(
 <BrowserRouter> 
    <Switch>
        <Route path="/signin" exact component = {SignInPage} />
        <Route path="/signup" exact component = {SignUpPage} />
        <Route path="/about" exact component ={About} />
        <Route path="/contactus" exact component ={ContactUs} />
        <Route path="/home" exact component ={Home} />
    </Switch>
</BrowserRouter>
,document.getElementById('root'));

registerServiceWorker();
