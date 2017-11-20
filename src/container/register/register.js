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
  }
  render() {
    const RadioItem = Radio.RadioItem
    return(
      <div>
        <Logo></Logo>
        <List>
          <InputItem>用户名</InputItem>
          <WhiteSpace />
          <InputItem>密码</InputItem>
          <WhiteSpace />
          <InputItem>确认密码</InputItem>
          <WhiteSpace />
          <RadioItem checked={this.state.type==='genius'}>牛人</RadioItem>
          <WhiteSpace />
          <RadioItem checked={this.state.type==='boss'}>boss</RadioItem>
        </List>
        <Button type='primary'>注册</Button>
      </div>
    )
  }
}

export default Register
