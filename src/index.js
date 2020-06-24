import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware  } from 'redux'

import rootReducer from './store/reducers'
import { localSaver } from './store/middleware/saver';

const store = createStore(rootReducer, 
  applyMiddleware(localSaver));

ReactDOM.render(
  <Provider store={store}>
    <React.StrictMode>
      <App />
    </React.StrictMode>
  </Provider>,
  document.getElementById('root')
);
