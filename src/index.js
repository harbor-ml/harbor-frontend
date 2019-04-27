import React from 'react';
import ReactDOM from 'react-dom';
import {BrowserRouter} from 'react-router-dom';

// Redux Imports
import {createStore, applyMiddleware, compose} from 'redux';
import reducer from './redux/reducer';
import {Provider} from 'react-redux';
import thunk from 'redux-thunk'

import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';

// Redux Setup
const store = createStore(
  reducer,
  compose(
    applyMiddleware(thunk)
  )
);

ReactDOM.render(

  <Provider store={store}>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </Provider>

  , document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: http://bit.ly/CRA-PWA
serviceWorker.unregister();
