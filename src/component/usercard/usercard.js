/**** React应用依赖组件 ****/
// core
import React, { Component } from 'react'
import propTypes from 'prop-types'
import { Card, WingBlank } from 'antd-mobile'
// router
import { withRouter } from 'react-router-dom'
/******* 第三方 组件库 *****/
/**** 本地公用变量 公用函数 **/
/******* 本地 公用组件 *****/
/**** 当前组件的 子组件等 ***/

@withRouter
class UserCard extends Component {
  static propTypes = {
    userlist: propTypes.array.isRequired
  }
  constructor(props) {
    super(props)
    this.jumpChat = this.jumpChat.bind(this)
  }
  jumpChat(user) {
    console.log(user)
    console.log(this.props)
    this.props.history.push(`/chat/${user.user}`)
  }
  render() {
    const { Header, Body } = Card
    return (
      <WingBlank>{
        this.props.userlist.map(v=>(
          v.avatar?(<Card
              key={v.user}
              onClick={() => {
                this.jumpChat(v)
              }}>
            <Header
              title={v.user}
              thumb={require(`../img/${v.avatar}.png`)}
              extra={<span>{v.title}</span>}
            ></Header>
            <Body>
              {v.type === 'boss'?<div>公司:{v.company}</div>:null}
              {v.desc.split('\n').map(v=>(
                <div key={v}>{v}</div>
              ))}
              {v.type === 'boss'?<div>薪资:{v.money}</div>:null}
            </Body>
          </Card>):null
        ))
      }</WingBlank>
    )
  }
}

export default UserCard
