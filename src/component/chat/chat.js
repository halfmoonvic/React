/**** React应用依赖组件 ****/
// core
import React, { Component } from 'react'
/******* 第三方 组件库 *****/
import io from 'socket.io-client'
import { List, InputItem } from 'antd-mobile'
/**** 本地公用变量 公用函数 **/
/******* 本地 公用组件 *****/
/**** 当前组件的 子组件等 ***/

const socket = io('ws://localhost:9093')

class Chat extends Component {
  constructor(props) {
    super(props)

    this.state = {
      text: '',
      msg: []
    }

    this.handleSubmit = this.handleSubmit.bind(this)
  }
  componentDidMount() {
    socket.on('recvmsg', (data) => {
      // console.log(data)
      this.setState({
        msg: [...this.state.msg, data.text]
      })
    })
  }
  handleSubmit() {
    // 当前用户发送信息
    socket.emit('sendmsg', {text: this.state.text})
    this.setState({text: ''})
  }
  render() {
    return (
      <div>
        {this.state.msg.map(v => {
          return <p key={v}>{v}</p>
        })}
        <div className="stick-footer">
          <List>
            <InputItem
              placeholder='请输入'
              value={this.state.text}
              onChange={(v) => {
                this.setState({text: v})
              }}
              extra={<span onClick={this.handleSubmit}>发送</span>}
            >信息</InputItem>
          </List>
        </div>
      </div>
    )
  }
}

export default Chat
