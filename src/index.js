import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
// import registerServiceWorker from './registerServiceWorker';
import { Provider } from 'react-redux';
import GamesReducer from './reducers/games';
import { createStore } from 'redux';
// import reducers from './reducers'
// import store from './store'

const store = createStore(
  GamesReducer
)

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('root')
)