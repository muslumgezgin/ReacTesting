import React from "react"
import { createStore, applyMiddleware } from 'redux';
import reducers from 'reducers';
import async from 'middlewares/async';
import { Provider } from 'react-redux';
import stateValidator from "middlewares/stateValidator";

export default ({ children, initialState = {} }) => {
  const store = createStore(
    reducers,
    initialState,
    applyMiddleware(async, stateValidator)
  );
  return (
    <Provider store={store}>
      {children}
    </Provider>
  )
}
