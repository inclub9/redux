// import React from 'react';
// import ReactDOM from 'react-dom';
// import './index.css';
// import App from './App';
// import * as serviceWorker from './serviceWorker';

// ReactDOM.render(
//   <React.StrictMode>
//     <App />
//   </React.StrictMode>,
//   document.getElementById('root')
// );

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
// serviceWorker.unregister();

import { createStore, combineReducers } from "redux";

const initialState = {
  result: 15000,
  value: []
}

const userReducer = (state = { name: "in", age: 25 }, action) => {
  switch (action.type) {
    case "setName":
      state = {
        name: action.payload
      }
      break;
    case "setAge":
      state = {
        age: action.payload
      }
      break;
    default:
      break;
  }
  return state
}
const employeeReducer = (state = initialState, action) => {
  switch (action.type) {
    case "ADD":
      state = {
        ...state,
        result: state.result += action.payload,
        value: [...state.value, action.payload]
      }
      break;
    case "SUBTRACT":
      state = {
        ...state,
        result: state.result -= action.payload,
        value: [...state.value, -action.payload]
      }
      break;
    default:
      break;
  }
  return state;
}

const store = createStore(combineReducers({employeeReducer, userReducer}));

store.subscribe(() => {
  console.log("Update store:", store.getState());
})
store.dispatch({
  type: "ADD",
  payload: 15000
});
store.dispatch({
  type: "setName",
  payload: "tester"
});
store.dispatch({
  type: "setAge",
  payload: 263
});

