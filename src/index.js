import React from 'react';
import ReactDom from 'react-dom';
import App from './components/app';
import reducer from './reducer';

import {createStore} from 'redux';
import { Provider } from 'react-redux';

const store = createStore(reducer);

ReactDom.render(
  <Provider store={store}>
    <App/>
  </Provider>, 
  document.querySelector("#root")
);