import React from 'react'
import ReactDom from 'react-dom'

import { createStore } from './mini-redux/mini-redux.js'
import { Provider } from './mini-redux/mini-react-redux.js'
import { counter } from './mini-redux/test-miniredux.js'

import App from './app'

const store = createStore(counter)

ReactDom.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('root')
)
