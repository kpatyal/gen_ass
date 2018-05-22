import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import promise from 'redux-promise-middleware';
import './index.css';
import App from './components/App';
import registerServiceWorker from './registerServiceWorker';
import { createStore, applyMiddleware } from 'redux';
import reducers from './reducers';
const store = createStore(reducers, {}, applyMiddleware(promise()));
//const createStoreWithMiddleware = applyMiddleware(promise())(createStore);


ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>, document.getElementById('root'));
registerServiceWorker();
