import React from 'react';
import ReactDOM from 'react-dom';
import { createStore, combineReducers } from 'redux';
import { Provider } from 'react-redux';

import App from './App';
import reducerDays from './store/reducers/days';
import reducerAuth from './store/reducers/auth';

const rootReducer = combineReducers({ days: reducerDays, auth: reducerAuth });

const store = createStore(rootReducer);

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById("root")
);
