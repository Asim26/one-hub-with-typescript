import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
// 
import {createStore,applyMiddleware, compose} from 'redux'
import {Provider} from 'react-redux'
import rootReducer from './redux/reducers/index'

declare global {
  interface Window{
    __REDUX_DEVTOOLS_EXTENSION_COMPOSE__?:typeof compose;
  }
}
const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
const store=createStore(rootReducer,composeEnhancers())

console.log("store=> ",store.getState());

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals

