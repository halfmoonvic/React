import React from 'react'
import ReactDom from 'react-dom'
import { thunk, arrThunk } from './mini-redux/mini-redux-thunk.js'

import { createStore, applyMiddleware } from './mini-redux/mini-redux.js'
import { Provider } from './mini-redux/mini-react-redux.js'
import { counter } from './mini-redux/test-miniredux.js'

import App from './app'

import Performance from './test-performance.js'

const store = createStore(counter, applyMiddleware(thunk, arrThunk))

ReactDom.render(
  <Provider store={store}>
    <Performance></Performance>
  </Provider>,
  document.getElementById('root')
)
