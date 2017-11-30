/**** React应用依赖组件 ****/
// core
import React, { Component } from 'react'
import { connect } from 'react-redux'
import { getUserList } from 'store/actions'
/******* 第三方 组件库 *****/
/**** 本地公用变量 公用函数 **/
/******* 本地 公用组件 *****/
import UserCard from 'component/usercard/usercard'
/**** 当前组件的 子组件等 ***/

@connect(
  state => state, { getUserList }
)

class boss extends Component {
  componentDidMount() {
    this.props.getUserList('boss')
  }
  render() {
    const userList = this.props.chatuser.userlist
    return (
      <UserCard userlist={userList}></UserCard>
    )
  }
}

export default boss
