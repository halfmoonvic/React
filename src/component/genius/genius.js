/**** React应用依赖组件 ****/
// core
import React, { Component } from 'react'
// redux
import { connect } from 'react-redux'
import { getUserList } from './../../redux/chatuser.redux'
/******* 第三方 组件库 *****/
/**** 本地公用变量 公用函数 **/
/******* 本地 公用组件 *****/
import UserCard from 'component/usercard/usercard'
/**** 当前组件的 子组件等 ***/

@connect(
  state => state.chatuser, { getUserList }
)

class Genius extends Component {
  componentDidMount() {
    this.props.getUserList('boss')
  }
  render() {
    return (
      <UserCard userlist={this.props.userList}></UserCard>
    )
  }
}

export default Genius
