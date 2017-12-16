/**** React应用依赖组件 ****/
// core
import React, { Component } from 'react'
/******* 第三方 组件库 *****/
import io from 'socket.io-client'
/**** 本地公用变量 公用函数 **/
/******* 本地 公用组件 *****/
/**** 当前组件的 子组件等 ***/

class Chat extends Component {
  componentDidMount() {
    const socket = io('ws://localhost:9093')
  }
  render() {
    return (
      <div>Chat-页面 {this.props.match.params.user}</div>
    )
  }
}

export default Chat
