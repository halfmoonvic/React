import React from 'react'
import Logo from 'component/logo/logo'
// eslint-disable-next-line
import { List, InputItem, WingBlank, WhiteSpace, Button, Radio } from 'antd-mobile'

class Register extends React.Component{
  constructor(props) {
    super(props)
    this.state = {
      type: 'genius' // 或者 boss
    }

    this.handleRegister = this.handleRegister.bind(this)
  }
  handleChange(key, val) {
    this.setState({
      [key]: val
    })
  }
  handleRegister() {
    console.log(this.state)
  }
  render() {
    const RadioItem = Radio.RadioItem
    return(
      <div>
        <Logo></Logo>
        <List>
          <InputItem onChange={v=>this.handleChange('user', v)}>用户名</InputItem>
          <WhiteSpace />
          <InputItem type="password" onChange={v=>this.handleChange('pwd', v)}>密码</InputItem>
          <WhiteSpace />
          <InputItem type="password" onChange={v=>this.handleChange('repeatpwd', v)}>确认密码</InputItem>
          <WhiteSpace />
          <RadioItem
            checked={this.state.type==='genius'}
            onChange={()=>this.handleChange('type', 'boss')}
            >牛人</RadioItem>
          <WhiteSpace />
          <RadioItem checked={this.state.type==='boss'}>boss</RadioItem>
        </List>
        <Button type='primary' onClick={this.handleRegister}>注册</Button>
      </div>
    )
  }
}

export default Register
