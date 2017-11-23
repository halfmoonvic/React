/**** React应用依赖组件 ****/
// core
import React, { Component } from 'react'
/******* 第三方 组件库 *****/
// antd
import { Button, List, InputItem, WingBlank, WhiteSpace } from 'antd-mobile'
/**** 本地公用变量 公用函数 **/
/******* 本地 公用组件 *****/
import Logo from 'component/logo/logo'
/**** 当前组件的 子组件等 ***/


class Login extends Component {
  constructor(props) {
    super(props)
    this.register = this.register.bind(this)
  }
  register() {
    this.props.history.push('/register')
  }
  render() {
    return (
      <div>
        <Logo />
        <WingBlank>
          <List>
            <InputItem>用户名</InputItem>
            <WhiteSpace />
            <InputItem>密码</InputItem>
            <Button type="primary">登录</Button>
            <WhiteSpace />
            <Button onClick={this.register} type="primary">注册</Button>
          </List>
        </WingBlank>
      </div>
    )
  }
}

export default Login
