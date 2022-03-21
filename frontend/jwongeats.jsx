import React from "react";
import ReactDOM from "react-dom";
import Root from './components/Root';
import configureStore from './store/store';

document.addEventListener("DOMContentLoaded", () => {
  const root = document.getElementById('root');
  if (window.currentUser) {
    const preloadedState = {
      entities: {
        users: { [window.currentUser.id]: window.currentUser }
      },
      session: { id: window.currentUser.id }
    };
    window.store = configureStore(preloadedState);
    delete window.currentUser;
  } else {
    window.store = configureStore();
  };

  ReactDOM.render(
    <Root store={store} />, root
  )
})