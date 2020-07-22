import React from 'react';
import ReactDOM from 'react-dom';
import {BrowserRouter} from 'react-router-dom';
import {Provider} from 'react-redux';

import App from './components/App/App';
import ErrorBoundry from './components/UI/ErrorBoundry/ErrorBoundry'
import store from './redux/store';
import {Operation} from '../src/redux/blog/operations.js';

store.dispatch(Operation.loadPosts());

ReactDOM.render(
  <BrowserRouter>
    <Provider store={store}>
      <ErrorBoundry>
        <App />
      </ErrorBoundry>
    </Provider>
  </BrowserRouter>,
  document.getElementById('root')
);
