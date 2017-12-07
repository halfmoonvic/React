/**** React应用依赖组件 ****/
// core
import React, { Component } from 'react'
import { connect } from 'react-redux'
/******* 第三方 组件库 *****/
import { List, Badge } from 'antd-mobile'
/**** 本地公用变量 公用函数 **/
/******* 本地 公用组件 *****/
/**** 当前组件的 子组件等 ***/

@connect(
  state => state
)

class Msg extends Component {
  getLast(arr) {
    return arr[arr.length - 1]
  }
  render() {
    // if (!this.props.chat.chatmsg.length) {
    //   return
    // }
    const userinfo = this.props.chat.users
    const msgGroup = {}
    this.props.chat.chatmsg.forEach((v) => {
      msgGroup[v.chatid] = msgGroup[v.chatid] || []
      msgGroup[v.chatid].push(v)
    })
    const chatList = Object.values(msgGroup).sort((a, b) => {
      const a_last = this.getLast(a)
      const b_last = this.getLast(b)
      return b_last - a_last
    })
    const { Item } = List
    const { Brief } = Item
    const userid = this.props.user._id
    return (
      <div>
        <List>
          {chatList.map(v => {
            const lastItem = this.getLast(v)
            const targetId = v[0].from === userid ? v[0].to : v[0].from
            const name = userinfo[targetId] && userinfo[targetId].name
            const avatar = userinfo[targetId] && userinfo[targetId].avatar
            const unreadNum = v.filter(v => !v.read && v.to === userid).length
            return (
              <Item
                key={lastItem._id}
                thumb={require(`../img/${avatar}.png`)}
                extra={<Badge text={unreadNum}></Badge>}
                arrow="horizontal"
                onClick={() => {
                  this.props.history.push(`/chat/${targetId}`)
                }}
              >
                {lastItem.content}
                <Brief>{name}</Brief>
              </Item>
            )
          })}
        </List>
      </div>
    )
  }
}

export default Msg
