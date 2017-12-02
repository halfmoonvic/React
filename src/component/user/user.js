/**** React应用依赖组件 ****/
// core
import React, { Component } from 'react'
import { connect } from 'react-redux'
import { setLogout } from 'store/actions'
import { Redirect } from 'react-router-dom'
/******* 第三方 组件库 *****/
import browserCookies from 'browser-cookies'
import { Result, List, WhiteSpace, Modal } from 'antd-mobile';
/**** 本地公用变量 公用函数 **/
/******* 本地 公用组件 *****/
/**** 当前组件的 子组件等 ***/

@connect(
  state => state, { setLogout }
)

class User extends Component {
  constructor(props) {
    super(props)
    this.logout = this.logout.bind(this)
  }
  logout() {
    const { alert } = Modal
    alert('注销登录', '', [
      { text: 'Cancel', onPress: () => console.log('cancel'), style: 'default' }, {
        text: 'OK', onPress: () => {
          browserCookies.erase('userid')
          this.props.setLogout()
        }
      }
    ])
  }
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
            {user.title}
            {user.desc.split('\n').map(v => (
              <Brief key={v}>{v}</Brief>
            ))}
            {user.money ? <Brief>薪资：{user.money}</Brief> : null}
          </Item>
        </List>
        <WhiteSpace></WhiteSpace>
        <List>
          <Item onClick={this.logout}>退出登录</Item>
        </List>
      </div>
    ) : <Redirect to={user.redirectTo} />
  }
}

export default User
