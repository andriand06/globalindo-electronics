import React from 'react'
import ReactDOM from 'react-dom'
// import App from './app'
//redux
import { Provider } from 'react-redux'
import store from './redux/store'
if (document.getElementById("root")) {
    ReactDOM.render(
    <Provider store={store}>
    <App />
    </Provider>, document.getElementById("root")
    );
} 