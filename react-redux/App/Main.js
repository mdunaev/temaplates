import App from './App.jsx';
import React from 'react';
import ReactDOM from 'react-dom';

import { createStore } from 'redux';
import { Provider } from 'react-redux';
import reducer from './reducer.jsx';

var initialState = {
  items: [
    {
      text: "Item 1",
      isDone: false
    },
    {
      text: "Item 2",
      isDone: true
    },
    {
      text: "Item 3",
      isDone: false
    },
    {
      text: "Item 4",
      isDone: false
    },
    {
      text: "Item 5",
      isDone: false
    }
  ],
  filter: 'todo' //'todo', 'all', 'done'
};

var store = createStore(reducer, initialState);
ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('content'));
