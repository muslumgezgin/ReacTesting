import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter, Route } from "react-router-dom";
import { Provider } from "react-redux";
import { createStore, applyMiddleware } from "redux";
import reduxThunk from 'redux-thunk';

import App from "./App";
import Welcome from "./Welcome";
import Signup from "./auth/Signup";
import reducers from "./reducers";

const store = createStore(
    reducers,
    {},
    applyMiddleware(reduxThunk)
)

ReactDOM.render(
    <Provider store={store}>
        <BrowserRouter>
            <App>
                <Route path='/' exact component={Welcome} />
                <Route path='/signup' component={Signup} />
            </App>
        </BrowserRouter>
    </Provider>
    , document.querySelector('#root')
);