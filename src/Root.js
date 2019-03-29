import React from "react"
import { createStore, applyMiddleware } from 'redux';
import reducers from 'reducers';
import reduxPromise from 'redux-promise'
import { Provider } from 'react-redux';

export default ({ children, initialState = {} }) => {
  const store = createStore(
    reducers,
    initialState,
    applyMiddleware(reduxPromise)
  );
  return (
    <Provider store={store}>
      {children}
    </Provider>
  )
}
