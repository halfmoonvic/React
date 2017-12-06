/**** React应用依赖组件 ****/
// core
import React, { Component } from 'react'
import { connect } from 'react-redux'
import { getMsgList, getSendMsg, getRecvMsg } from '../../redux/chat.redux'
/******* 第三方 组件库 *****/
import io from 'socket.io-client'
import { List, InputItem, NavBar, Icon, Grid } from 'antd-mobile'
/**** 本地公用变量 公用函数 **/
import { getChatId } from './../../util'
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
      showEmojg: false,
      msg: []
    }
  }
  componentDidMount() {
    // if (!this.props.chat.chatmsg.length) {
    this.props.getMsgList()
    this.props.getRecvMsg()
      // }
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
    const emoji = '😀 😃 😄 😁 😆 😅 😂 😊 😇 🙂 🙃 😉 😌 😍 😘 😗 😙 😚 😋 😜 😝 😛 🤑 🤗 🤓 😎 😏 😒 😞 😔 😟 😕 🙁 😣 😖 😫 😩 😤 😠 😡 😶 😐 😑 😯 😦 😧 😮 😲 😵 😳 😱 😨 😰 😢 😥 😭 😓 😪 😴 🙄 🤔 😬 🤐 😷 🤒 🤕 😈 👿 👹 👺 💩 👻 💀 ☠️ 👽 👾 🤖 🎃 😺 😸 😹 😻 😼 😽 🙀 😿 😾 👐 🙌 👏 🙏 👍 👎 👊 ✊ 🤘 👌 👈 👉 👆 👇 ✋  🖐 🖖 👋  💪 🖕 ✍️  💅 🖖 💄 💋 👄 👅 👂 👃 👁 👀 '
      .split(' ')
      .filter(v => v)
      .map(v => ({ text: v }))

    const userid = this.props.match.params.user
    const { Item } = List
    const users = this.props.chat.users
    if (!users[userid]) {
      return null
    }
    const chatid = getChatId(userid, this.props.user._id)
    const chatmsgs = this.props.chat.chatmsg.filter(v => v.chatid === chatid)
    return (
      <div id="chat-page">
        <NavBar
          mode="dark"
          icon={<Icon type="left"
            onClick={() => {this.props.history.goBack()}
            }
          ></Icon>}
        >
          {users[userid].name}
        </NavBar>

        {chatmsgs.map(v => {
          const avatar = require(`../img/${users[v.from].avatar}.png`)
          return v.from === userid ? (
            <List key={v._id}>
              <Item
                thumb={avatar}
              >{v.content}</Item>
            </List>
          ) : (
            <List key={v._id}>
              <Item
                className='chat-me'
                extra={<img src={avatar} alt=""/>}
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
              extra={
                <div>
                  <span
                  style={{marginRight: 15}}
                  onClick={() => {
                    this.setState({showEmojg: !this.state.showEmojg})
                  }}
                  >😀</span>
                  <span onClick={() => this.handleSubmit()}>发送</span>
                </div>
              }
            ></InputItem>
            {this.state.showEmojg ? <Grid
               data={emoji}
               columnNum={9}
               carouselMaxRow={4}
               isCarousel={true}
               onClick={el => {
                this.setState({
                  text: this.state.text + el.text
                })
               }}
            /> : null}
          </List>
        </div>
      </div>
    )
  }
}

export default Chat
