/**** React应用依赖组件 ****/
// core
import React, { Component } from 'react'
import { withRouter } from 'react-router-dom'
import { connect } from 'react-redux'
import { loadData } from 'store/actions'
/******* 第三方 组件库 *****/
import xhr from 'api/api'
/**** 本地公用变量 公用函数 **/
/******* 本地 公用组件 *****/
/**** 当前组件的 子组件等 ***/
@withRouter

@connect(
  null,
  { loadData }
)

class AuthRoute extends Component {
  componentDidMount() {
    // const publicList = ['/login', '/register']
    // const pathname = this.props.location.pathname
    // 获取用户信息
    xhr.get('/user/info')
      .then(res => {
        let code = res.data.code
        if (code === 0) {
          // 有登录信息的
          this.props.loadData(res.data.data)
        } else {
          this.props.history.push('/login')
        }
      })
  }
  render() {
    return <span>用户身份信息获取，以进行相应的路由跳转</span>
  }
}

export default AuthRoute
