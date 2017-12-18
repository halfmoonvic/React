/**** React应用依赖组件 ****/
// core
import React, { Component } from 'react'
import { connect } from 'react-redux'
import { getMsgList, getSendMsg, getMsgRecv } from './../../store/actions.js'
/******* 第三方 组件库 *****/
import { List, InputItem, NavBar, Icon, Grid } from 'antd-mobile'
/**** 本地公用变量 公用函数 **/
import { getChatId } from 'common/js/util'
/******* 本地 公用组件 *****/
/**** 当前组件的 子组件等 ***/


@connect(
  state => state, { getMsgList, getSendMsg, getMsgRecv }
)
class Chat extends Component {
  constructor(props) {
    super(props)

    this.state = {
      text: '',
      msg: [],
      setEmoji: false
    }

    this.handleSubmit = this.handleSubmit.bind(this)
  }
  componentDidMount() {
    this.props.getMsgList()
    this.props.getMsgRecv()
  }
  handleSubmit() {
    // 当前用户发送信息
    // socket.emit('sendmsg', {text: this.state.text})
    const from = this.props.user._id
    const to = this.props.match.params.user
    const msg = this.state.text
    this.props.getSendMsg({ from, to, msg })
    this.setState({ text: '' })
  }
  render() {
    const userid = this.props.match.params.user
    const { Item } = List
    const users = this.props.chat.users
    const chatid = getChatId(userid, this.props.user._id)
    const chatmsgs = this.props.chat.chatmsg.filter(v=>v.chatid==chatid)
    if (!users[userid]) {
      return null
    }
    const emoji = '😀 😃 😄 😁 😆 😅 😂 😊 😇 🙂 🙃 😉 😌 😍 😘 😗 😙 😚 😋 😜 😝 😛 🤑 🤗 🤓 😎 😏 😒 😞 😔 😟 😕 🙁 😣 😖 😫 😩 😤 😠 😡 😶 😐 😑 😯 😦 😧 😮 😲 😵 😳 😱 😨 😰 😢 😥 😭 😓 😪 😴 🙄 🤔 😬 🤐 😷 🤒 🤕 😈 👿 👹 👺 💩 👻 💀 ☠️ 👽 👾 🤖 🎃 😺 😸 😹 😻 😼 😽 🙀 😿 😾 👐 🙌 👏 🙏 👍 👎 👊 ✊ 🤘 👌 👈 👉 👆 👇 ✋  🖐 🖖 👋  💪 🖕 ✍️  💅 🖖 💄 💋 👄 👅 👂 👃 👁 👀 '
                    .split(' ')
                    .filter(v=>v)
                    .map(v=>({text:v}))
    return (
      <div id='chat-page'>
        <NavBar
        mode='dark'
        icon={<Icon type="left"></Icon>}
        onClick={() => {
          this.props.history.goBack()
        }}
        >
          {users[userid].name}
        </NavBar>

        {chatmsgs.map(v => {
          const avatar = require(`./../img/${users[v.from].avatar}.png`)
          return v.from === userid ? (
            <List key={v._id}>
              <Item
                thumb={avatar}
              >{v.content}</Item>
            </List>
          ) : (
            <List key={v._id}>
              <Item
                extra={<img src={avatar} alt=""/>}
                className="chat-me"
              >{v.content}</Item>
            </List>
          )
        })}
        <div className="stick-footer">
          <List>
            <InputItem
              placeholder='请输入'
              value={this.state.text}
              onChange={(v) => {
                this.setState({text: v})
              }}
              extra={<div>
                <span
                  style={{marginRight: 15}}
                  onClick={() => {
                    this.setState({
                      setEmoji: !this.state.setEmoji
                    })
                  }}
                >😃</span>
                <span onClick={this.handleSubmit}>发送</span>
              </div>}
            >信息</InputItem>
          </List>
          {this.state.setEmoji ? <Grid
            data={emoji}
            columnNum={9}
            carouseMaxRow={4}
            isCarousel={true}
            onClick={el => {
              this.setState({
                text: this.state.text + el.text
              })
            }}
          /> : null}
        </div>
      </div>
    )
  }
}

export default Chat
