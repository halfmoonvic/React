import React from 'react'
import ReactDOM from 'react-dom'
// redux 相关
import { createStore, applyMiddleware, compose } from 'redux'
import thunk from 'redux-thunk'     // 谷歌控制台工具
import { Provider } from 'react-redux'  // redux 状态管理

import App from './app'
import { calc } from './index.redux'


// const store = createStore(calc)
const store = createStore(calc, compose(
  applyMiddleware(thunk),
  window.devToolsExtension ? window.devToolsExtension() : ()=>{}
))

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('root')
)
