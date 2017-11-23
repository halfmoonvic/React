/**** React应用依赖组件 ****/
// core
import React from 'react'
// redux
import { connect } from 'react-redux'
import { register } from 'store/actions.js'
// router
import { Redirect } from 'react-router-dom'
// import ReactDom from 'react-dom'
/******* 第三方 组件库 *****/
// antd
import { Button, Radio, List, InputItem, WhiteSpace } from 'antd-mobile'
/**** 本地公用变量 公用函数 **/
/******* 本地 公用组件 *****/
import Logo from 'component/logo/logo'
/**** 当前组件的 子组件等 ***/

@connect(
  state => state.user,
  {register}
)

class Register extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      user: '',
      type: 'boss',
      pwd: '',
      repeatpwd: '',
    }

    this.handleRegister = this.handleRegister.bind(this)
  }
  handleChange(key, v) {
    this.setState({
      [key]: v
    })
  }
  handleRegister() {
    this.props.register(this.state)
  }
  render() {
    const {RadioItem} = Radio
    return (
      <div>
        {this.props.redirectTo ? <Redirect to={this.props.redirectTo} /> : null}
        <Logo></Logo>
        {this.props.msg ? <div className='err-msg'>{this.props.msg}</div> : null}
        <List>
          <InputItem
            onChange={v=>this.handleChange('user', v)}
          >用户名</InputItem>
          <InputItem
            type='password'
            onChange={v=>this.handleChange('pwd', v)}
          >密码</InputItem>
          <InputItem
            type='password'
            onChange={v=>this.handleChange('repeatpwd', v)}
          >确认密码</InputItem>
          <WhiteSpace></WhiteSpace>
          <RadioItem
          onChange={() => this.handleChange('type', 'genius')}
          checked={this.state.type === 'genius'}>牛人</RadioItem>
          <RadioItem
          onChange={() => this.handleChange('type', 'boss')}
          checked={this.state.type === 'boss'}>Boss</RadioItem>
          <Button type="primary" onClick={this.handleRegister}>注册</Button>
        </List>
      </div>
    )
  }
}

export default Register
