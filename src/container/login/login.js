/**** React应用依赖组件 ****/
// core
import React from 'react'
import { Redirect } from 'react-router-dom'
import { connect } from 'react-redux'
/******* 第三方 组件库 *****/
import { List, InputItem, WingBlank, WhiteSpace, Button } from 'antd-mobile'
/**** 本地公用变量 公用函数 **/
import imoocForm from '../../component/imooc-form/imooc-form'
/******* 本地 公用组件 *****/
import { login } from '../../redux/user.redux'
import Logo from 'component/logo/logo'
/**** 当前组件的 子组件等 ***/





// function WrapperHello(Comp) {
//   class WrapComp extends React.Component {
//     componentDidMount() {
//       console.log('高阶组件新增的生命周期，加载完成')
//     }
//     render() {
//       return <Comp></Comp>
//     }
//   }
//   return WrapComp
// }

// @WrapperHello
// class Hello extends React.Component {
//   render() {
//     return <h2>Hello Imooc I lova React</h2>
//   }
// }
// Hello = WrapperHello(Hello)


@connect(
  state => state.user, { login }
)
@imoocForm
class Login extends React.Component {
  constructor(props) {
    super(props)
    // this.state = {
    //   user: '',
    //   pwd: ''
    // }
    this.register = this.register.bind(this)
    this.handleLogin = this.handleLogin.bind(this)
  }
  register() {
    this.props.history.push('/register')
  }
  // handleChange(key, val) {
  //   this.setState({
  //     [key]: val
  //   })
  // }
  handleLogin() {
    this.props.login(this.props.state)
  }
  render() {
    return (
      <div>
        {this.props.redirectTo && this.props.redirectTo !== '/login' ? <Redirect to={this.props.redirectTo} /> : null}
        <Logo></Logo>
        <h2>我是登录页</h2>
        <WingBlank>
          <List>
            {this.props.msg ? <p className="err-msg">{this.props.msg}</p> : null}
            <InputItem
              onChange={v=>this.props.handleChange('user', v)}
            >用户</InputItem>
            <WhiteSpace />
            <InputItem
              onChange={v=>this.props.handleChange('pwd', v)}
            >密码</InputItem>
          </List>
          <WhiteSpace />
          <Button onClick={this.handleLogin} type='primary'>登录</Button>
          <WhiteSpace />
          <Button onClick={this.register} type='primary'>注册</Button>
        </WingBlank>
      </div>
    )
  }
}

export default Login
