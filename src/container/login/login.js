/**** React应用依赖组件 ****/
// core
import React, { Component } from 'react'
// redux
import { connect } from 'react-redux'
import { login } from 'store/actions'
// router
import { Redirect } from 'react-router'
/******* 第三方 组件库 *****/
// antd
import { Button, List, InputItem, WingBlank, WhiteSpace } from 'antd-mobile'
/**** 本地公用变量 公用函数 **/
import handleForm from 'common/js/mixin'
/******* 本地 公用组件 *****/
import Logo from 'component/logo/logo'
/**** 当前组件的 子组件等 ***/

@connect(
  state => state.user,
  { login }
)
@handleForm
class Login extends Component {
  constructor(props) {
    super(props)
    // this.state = {
    //   user: '',
    //   pwd: ''
    // }

    this.handleLogin = this.handleLogin.bind(this)
    this.handleRegister = this.handleRegister.bind(this)
  }
  // handleChange(key, v) {
  //   this.setState({
  //     [key]: v
  //   })
  // }
  handleLogin() {
    this.props.login(this.props.state)
  }
  handleRegister() {
    this.props.history.push('/register')
  }
  render() {
    return (
      <div>
        {this.props.redirectTo && this.props.redirectTo !== '/login' ? <Redirect to={this.props.redirectTo} /> : null}
        <Logo />
        {this.props.msg ? <div className='err-msg'>{this.props.msg}</div> : null}
        <WingBlank>
          <List>
            <InputItem
              onChange={v=>this.props.handleChange('user', v)}
            >用户名</InputItem>
            <WhiteSpace />
            <InputItem
              onChange={v=>this.props.handleChange('pwd', v)}
            >密码</InputItem>
            <Button type="primary" onClick={this.handleLogin}>登录</Button>
            <WhiteSpace />
            <Button type="primary" onClick={this.handleRegister}>注册</Button>
          </List>
        </WingBlank>
      </div>
    )
  }
}

export default Login
