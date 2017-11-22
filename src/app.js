/**** React应用依赖组件 ****/
// react
import React from 'react'
// import ReactDom from 'react-dom'
// router
import { BrowserRouter as Router, Route, Redirect, Switch } from 'react-router-dom'
/******* 第三方 组件库 *****/
/**** 本地公用变量 公用函数 **/
/******* 本地 公用组件 *****/
/**** 当前组件的 子组件等 ***/
import Login from 'container/login/login'
import Register from 'container/register/register'

class App extends React.Component {
  render() {
    return(
      <Router>
        <Switch>
          <Route path='/login' component={Login}></Route>
          <Route path='/register' component={Register}></Route>
          <Redirect to='/login'></Redirect>
        </Switch>
      </Router>
    )
  }
}

export default App
