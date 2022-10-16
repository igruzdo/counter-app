import React from 'react';
import ReactDOM from 'react-dom/client';
import { legacy_createStore, bindActionCreators } from 'redux';
import './index.css';
import { reducer } from './reducer';
import * as actions from './action';

const store = legacy_createStore(reducer)

const { dispatch, subscribe, getState } = store

// const bindActionCreator = (creator, dispatch) => (...args) => {
//   dispatch(creator(...args))
// }

const { inc, dec, rnd } = bindActionCreators(actions, dispatch)

document.querySelector('#inc').addEventListener('click', inc);
document.querySelector('#dec').addEventListener('click', dec);
document.querySelector('#rnd').addEventListener('click', () => {
  const value = Math.floor(Math.random() * 10);
  rnd(value);
});

const update = () => {
  document.querySelector('#counter').textContent = getState().value
}

subscribe(update)

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
  </React.StrictMode>
);
