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

import { createStore } from "redux";

const reducer = (state, action) => {
  switch (action.type) {
    case "ADD":
      state += action.payload;
      break;
    case "SUBTRACT":
      state -= action.payload;
      break;
    default:
      break;
  }
  return state;
}

const store = createStore(reducer, 15000);

store.subscribe(()=>{
  console.log("Update store:", store.getState());
})
store.dispatch({
  type: "ADD",
  payload: 500
});

store.dispatch({
  type: "SUBTRACT",
  payload: 10000
});