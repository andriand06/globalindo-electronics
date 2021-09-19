/**
 * First we will load all of this project's JavaScript dependencies which
 * includes React and other helpers. It's a great starting point while
 * building robust, powerful web applications using React + Laravel.
 */

require('./bootstrap');

/**
 * Next, we will create a fresh React component instance and attach it to
 * the page. Then, you may begin adding components to this application
 * or customize the JavaScript scaffolding to fit your unique needs.
 */

require('./components/Example');

import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
//Components
import LandingPage from './components/Pages/LandingPage'
import ProductPage from './components/Pages/ProductPage'
import ShopPage from './components/Pages/ShopPage'
import LoginPage from './components/Pages/LoginPage'
import SignUpPage from './components/Pages/SignUpPage'
import NotFound from './components/Pages/NotFound'
const App = () => {
    return (
        <Router>
            <Switch>
                <Route exact path="/"><LandingPage /></Route>
                <Route exact path="/product"><ProductPage /></Route>
                <Route exact path="/shop"><ShopPage /></Route>
                <Route exact path="/login"><LoginPage /></Route>
                <Route exact path="/signup"><SignUpPage /></Route>
                <Route exact path="/*/*"><NotFound /></Route>
                
            </Switch>
        </Router>
    );
}

if (document.getElementById("app")) {
    ReactDOM.render(<App />, document.getElementById("app"));
}