require('./bootstrap');

require('alpinejs');
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
import Success from './components/Pages/Succes'

import { auth,createUserProfileDocument } from './components/firebase/firebase.utils'
import { onSnapshot } from '@firebase/firestore';
import { Provider } from 'react-redux';
import { PersistGate } from 'redux-persist/integration/react';
import {store, persistor} from './redux/store'
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
                    <Switch>
                        <Route exact path="/"><LandingPage /></Route>
                        <Route exact path="/product"><ProductPage /></Route>
                        <Route path="/shop" render={({match,location}) => <ShopPage match={match} location={location} /> } />
                        <Route exact path="/checkout" render={({history}) => <CheckoutPage history={history} />}/>
                        {/* <Route exact path="/login">{ this.state.isLoggedIn !== null ? <Redirect to="/"/> : <LoginPage />} </Route> */}
                        <Route exact path="/signin"><LoginPage /></Route>
                        <Route exact path="/signup"><SignUpPage /></Route>
                        <Route exact path="/success"><Success /></Route>
                        
                    </Switch>
                </Router>
        </div>
        )
    }
}

if (document.getElementById("root")) {
    ReactDOM.render(
    <Provider store={store}>
        <PersistGate persistor={persistor}>
            <App />
        </PersistGate>
    </Provider>, document.getElementById("root")
    );
} 