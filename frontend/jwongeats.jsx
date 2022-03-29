import React from "react";
import ReactDOM from "react-dom";
import Root from './components/Root';
import configureStore from './store/store';
import * as Util from "./util/util";
import merge from 'lodash.merge';

document.addEventListener("DOMContentLoaded", () => {
  const root = document.getElementById('root');
  let store;

  let localStorageState = Util.loadState();
  if (!localStorageState) localStorageState = {};
  
  if (window.currentUser) {
    const preloadedState = {
      entities: {
        users: { [window.currentUser.id]: window.currentUser },
        cart: {}
      },
      session: { id: window.currentUser.id }
    };

    let mergedState = merge(preloadedState, localStorageState);
    
    store = configureStore(mergedState);

    delete window.currentUser;
  } else {
    store = configureStore(localStorageState);
  };

  // state shape-getter
  // store.subscribe(throttle(() => {
  //   console.log(JSON.stringify(store.getState()))
  // }, 1000));

  ReactDOM.render(
    <Root store={store} />, root
  )
})