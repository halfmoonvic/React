// React 相关
import './config'
import React from 'react'
import ReactDom from 'react-dom'

// Redux 相关
import { createStore, applyMiddleware, compose } from 'redux'
import thunk from 'redux-thunk'
import { Provider } from 'react-redux'
import reducers from './reducer'

// Router相关
// eslint-disable-next-line
import { BrowserRouter, Route, Redirect, Switch } from 'react-router-dom'

// 页面组件引入
import Login from './containter/login/login'
import Register from './containter/register/register'

const store = createStore(reducers, compose(
  applyMiddleware(thunk),
  window.devToolsExtension ? window.devToolsExtension() : ()=>{}
))

// console.log(store.getState())

ReactDom.render(
  <Provider store={store}>
    <BrowserRouter>
      <div>
        <Route path="/login" component={Login}></Route>
        <Route path="/register" component={Register}></Route>
      </div>
    </BrowserRouter>
  </Provider>,
  document.getElementById('root')
)

