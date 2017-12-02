/**** React应用依赖组件 ****/
// react
import React from 'react'
// router
import { BrowserRouter as Router, Route, Switch, Redirect } from 'react-router-dom'
/******* 第三方 组件库 *****/
/**** 本地公用变量 公用函数 **/
/******* 本地 公用组件 *****/
/**** 当前组件的 子组件等 ***/
import AuthRoute from 'component/authroute/authroute'
import Login from 'container/login/login'
import Register from 'container/register/register'
import BossInfo from 'container/bossinfo/bossinfo'
import GeniusInfo from 'container/geniusinfo/geniusinfo'
import Dashboard from 'container/dashboard/dashboard'

class App extends React.Component {
  render() {
    return(
      <Router>
        <div>
          <AuthRoute></AuthRoute>
          <Switch>
            <Redirect path='/' exact to='/login'></Redirect>
            <Route path='/geniusinfo' component={GeniusInfo}></Route>
            <Route path='/bossinfo' component={BossInfo}></Route>
            <Route path='/login' component={Login}></Route>
            <Route path='/register' component={Register}></Route>
            <Route component={Dashboard}></Route>
          </Switch>
        </div>
      </Router>
    )
  }
}

export default App
