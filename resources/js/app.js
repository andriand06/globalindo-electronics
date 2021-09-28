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
import ReactDOM from 'react-dom'

import { BrowserRouter as Router, Route, Switch, Redirect    } from 'react-router-dom';
//Components
import Header from './components/Parts/Header'
import Footer from './components/Parts/Footer'
import LandingPage from './components/Pages/LandingPage'
import ProductPage from './components/Pages/ProductPage'
import ShopPage from './components/Pages/ShopPage'
import CheckoutPage from './components/Pages/CheckoutPage'
import LoginPage from './components/Pages/LoginPage'
import SignUpPage from './components/Pages/SignUpPage'
import NotFound from './components/Pages/NotFound'

import { auth,createUserProfileDocument } from './components/firebase/firebase.utils'
import { onSnapshot } from '@firebase/firestore';
import { Provider } from 'react-redux';
import store from './redux/store'
import  setCurrentUser  from './redux/user/user.actions'
class App extends React.Component {
    constructor(){
        super();
        this.state = {
            isLoggedIn : {}
        }
    }
    unsubscribeFromAuth = null;
    componentDidMount() {
        
        //if auth state changedthen get thedata and call createUserProfileDocument method
        this.unsubscribeFromAuth  = auth.onAuthStateChanged(async userAuth => {
            if(userAuth){
                const userRef = await createUserProfileDocument(userAuth);
                onSnapshot(userRef, (snapshot) => {
                   store.dispatch(setCurrentUser({
                            id : snapshot.id,
                            ...snapshot.data()
                        }));
                });
            }
            store.dispatch(setCurrentUser(userAuth));
            // this.setState({isLoggedIn : store.getState()});
        });
        
    }

    componentWillUnmount(){
        this.unsubscribeFromAuth();
    }
    render() {
        // console.log(this.state.isLoggedIn);
        return (
            <div>

                <Router>
                <Header/>
                    <Switch>
                        <Route exact path="/"><LandingPage /></Route>
                        <Route exact path="/product"><ProductPage /></Route>
                        <Route path="/shop"><ShopPage /></Route>
                        <Route exact path="/checkout"><CheckoutPage /></Route>
                        {/* <Route exact path="/login">{ this.state.isLoggedIn !== null ? <Redirect to="/"/> : <LoginPage />} </Route> */}
                        <Route exact path="/login"><LoginPage /></Route>
                        <Route exact path="/signup"><SignUpPage /></Route>
                        <Route path="/*"><NotFound /></Route>
                        <Route path="/*/*"><NotFound /></Route>
                        
                    </Switch>
                </Router>
                <Footer />
        </div>
        )
    }
}

if (document.getElementById("root")) {
    ReactDOM.render(
    <Provider store={store}>
    <App />
    </Provider>, document.getElementById("root")
    );
} 