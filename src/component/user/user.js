/**** React应用依赖组件 ****/
// core
import React, { Component } from 'react'
import { connect } from 'react-redux'
/******* 第三方 组件库 *****/
import { Result, List, WhiteSpace } from 'antd-mobile';
/**** 本地公用变量 公用函数 **/
/******* 本地 公用组件 *****/
/**** 当前组件的 子组件等 ***/

@connect(
  state => state
)

class User extends Component {
  render() {
    const { user } = this.props
    const { Item } = List
    const { Brief } = Item
    return user.user ? (
      <div>
        <Result
          img={<img style={{width: 50}} src={require(`../img/${user.avatar}.png`)} alt=""/>}
          title={user.user}
          message={user.type === 'boss' ? user.company : null}
        ></Result>
        <List renderHeader={() => '简介'}>
          <Item>
            {user.title}{user.title}{user.title}{user.title}{user.title}{user.title}{user.title}{user.title}{user.title}{user.title}{user.title}{user.title}{user.title}{user.title}{user.title}
            {user.desc.split('\n').map(v => (
              <Brief key={v}>{v}</Brief>
            ))}
            {user.money ? <Brief>薪资：{user.money}</Brief> : null}
          </Item>
        </List>
        <WhiteSpace></WhiteSpace>
        <List>
          <Item>退出登录</Item>
        </List>
      </div>
    ) : null
  }
}

export default User
