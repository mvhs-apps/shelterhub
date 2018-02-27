import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import registerServiceWorker from './registerServiceWorker';
import './stylesheets/style.css';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import SignInPage from './components/sign-in-page';
import About from './components/about';
import ContactUs from './components/contactUs';

ReactDOM.render(
 <BrowserRouter> 
    <Switch>
        <Route path="/signin" exact component = {SignInPage} />
        <Route path="/about" exact component ={About} />
        <Route path="/contactus" exact component ={ContactUs} />
    </Switch>
</BrowserRouter>
,document.getElementById('root'));

registerServiceWorker();
