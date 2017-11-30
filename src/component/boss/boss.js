/**** React应用依赖组件 ****/
// core
import React, { Component } from 'react'
import { connect } from 'react-redux'
import { getUserList } from 'store/actions'
/******* 第三方 组件库 *****/
import { Card, WingBlank } from 'antd-mobile'
/**** 本地公用变量 公用函数 **/
/******* 本地 公用组件 *****/
/**** 当前组件的 子组件等 ***/

@connect(
  state => state, { getUserList }
)

class boss extends Component {
  constructor(props) {
    super(props)
    this.state = {
      data: []
    }
  }
  componentDidMount() {
    this.props.getUserList('boss')
  }
  render() {
    const { Header, Body } = Card
    const userList = this.props.chatuser.userlist
    return (
      <WingBlank>{
        userList.map(v=>(
          v.avatar?(<Card key={v.user}>
            <Header
              title={v.user}
              thumb={require(`../img/${v.avatar}.png`)}
              extra={<span>{v.title}</span>}
            ></Header>
            <Body>{
              v.desc.split('\n').map(v=>(
                <div key={v}>{v}</div>
              ))
            }</Body>
          </Card>):null
        ))
      }</WingBlank>
    )
  }
}

export default boss
