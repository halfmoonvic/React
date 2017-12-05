/**** React应用依赖组件 ****/
// core
import React, { Component } from 'react'
import { connect } from 'react-redux'
import { getMsgList, getSendMsg, getRecvMsg } from '../../redux/chat.redux'
/******* 第三方 组件库 *****/
import io from 'socket.io-client'
import { List, InputItem, NavBar } from 'antd-mobile'
/**** 本地公用变量 公用函数 **/
/******* 本地 公用组件 *****/
/**** 当前组件的 子组件等 ***/
const socket = io('ws://localhost:9093')

@connect(
  state => state, { getMsgList, getSendMsg, getRecvMsg }
)
class Chat extends Component {
  constructor(props) {
    super(props)
    this.state = {
      text: '',
      msg: []
    }
  }
  componentDidMount() {
    this.props.getMsgList()
    this.props.getRecvMsg()
      // socket.on('recvmsg', (data) => {
      //   this.setState({
      //     msg: [...this.state.msg, data.text]
      //   })
      //   console.log(this.state.msg)
      // })
  }
  handleSubmit() {
    // socket.emit('sendmsg', { text: this.state.text })
    // this.setState({ text: '' })
    const from = this.props.user._id
    const to = this.props.match.params.user
    const msg = this.state.text
    this.props.getSendMsg({ from, to, msg })
    this.setState({ text: '' })
  }
  render() {
    const user = this.props.match.params.user
    const { Item } = List
    return (
      <div id="chat-page">
        <NavBar mode="dark">
          {this.props.match.params.user}
        </NavBar>

        {this.props.chat.chatmsg.map(v => {
          // return v.from === user ? (
          //   <p key={v._id}>对方发来的：{v.content}</p>
          // ) : (
          //   <p key={v._id}>我发的：{v.content}</p>
          // )
          console.log(this.props.match.params.user)
          return v.from === user ? (
            <List key={v._id}>
              <Item
              >{v.content}</Item>
            </List>
          ) : (
            <List key={v._id}>
              <Item
                className='chat-me'
                extra={'avatar'}
              >{v.content}</Item>
            </List>
          )
        })}
        <div className="stick-footer">
          <List>
            <InputItem
              placeholder="请输入"
              value={this.state.text}
              onChange={ v => {
                this.setState({ text: v })
              }}
              extra={<span onClick={() => this.handleSubmit()}>发送</span>}
            ></InputItem>
          </List>
        </div>
      </div>
    )
  }
}

export default Chat
