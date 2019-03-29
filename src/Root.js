import React from "react"
import { createStore } from 'redux';
import reducers from 'reducers';
import { Provider } from 'react-redux';

export default ({ children, initialState = {} }) => {
  return (
    <Provider store={createStore(reducers, initialState)}>
      {children}
    </Provider>
  )
}
