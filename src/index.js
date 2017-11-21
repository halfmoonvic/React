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
import Login from 'container/login/login'
import Register from 'container/register/register'
import AuthRoute from 'component/authroute/authroute'

import './index.css'

const store = createStore(reducers, compose(
  applyMiddleware(thunk),
  window.devToolsExtension ? window.devToolsExtension() : ()=>{}
))

// console.log(store.getState())

function Boss() {
  return <h2>BOSS 页面</h2>
}

ReactDom.render(
  <Provider store={store}>
    <BrowserRouter>
      <div>
        <AuthRoute></AuthRoute>
        <Route path='/boss' component={Boss}></Route>
        <Route path="/login" component={Login}></Route>
        <Route path="/register" component={Register}></Route>
      </div>
    </BrowserRouter>
  </Provider>,
  document.getElementById('root')
)

