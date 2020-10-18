import React from 'react';
import ReactDOM from 'react-dom';
import { applyMiddleware, createStore} from 'redux'
import { Provider } from 'react-redux';
import thunk from 'redux-thunk';

import Reducers from './reducers';
import App from './components/App';

const store = createStore(Reducers, applyMiddleware(thunk));

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('root')
);