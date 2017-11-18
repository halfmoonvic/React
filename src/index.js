import './config'
import React from 'react'
import ReactDom from 'react-dom'

import { createStore, applyMiddleware, compose } from 'redux'
import thunk from 'redux-thunk'
import { Provider } from 'react-redux'

import { BrowserRouter, Route, Redirect, Switch } from 'react-router-dom'

// import { counter } from './index.redux'
import reducers from './reducer'

import Auth from './auth.js'
import Dashboard from './dashboard.js'


const store = createStore(reducers, compose(
  applyMiddleware(thunk),
  window.devToolsExtension ? window.devToolsExtension() : ()=>{}
))

// console.log(store.getState())


// 登录
// 没有登录信息 统一跳转login
// 页面 导航+显示+注销
// 一营
// 二营
// 骑兵连

ReactDom.render(
  <Provider store={store}>
    <BrowserRouter>
      <Switch>
        {/*只渲染第一个Route*/}
        <Route path='/login' exact component={Auth}></Route>
        <Route path='/dashboard' component={Dashboard}></Route>
        <Redirect to='/dashboard'></Redirect>
      </Switch>
    </BrowserRouter>
  </Provider>,
  document.getElementById('root')
)

