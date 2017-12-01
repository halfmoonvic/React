/**** React应用依赖组件 ****/
// core
import React, { Component } from 'react'
import { Redirect } from 'react-router-dom'
import { connect } from 'react-redux'
import { setLogout } from '../../redux/user.redux'
/******* 第三方 组件库 *****/
import browserCookie from 'browser-cookies'
import { Result, List, WhiteSpace, Modal } from 'antd-mobile'
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
    alert('注销', '确认退出登录吗？', [
      { text: '取消', onPress: () => null }, {
        text: '确认',
        onPress: () => {
          browserCookie.erase('userid')
          this.props.setLogout()
        }
      },
    ])
  }
  render() {
    const props = this.props.user
    const { Item } = List
    const { Brief } = Item
    return props.user ? (
      <div>
        <Result
           img={<img style={{width: 50}} src={require(`../img/${props.avatar}.png`)} alt=""/>}
           title={props.user}
           message={props.type === 'boss' ? props.company : null}
         />
         <List renderHeader={()=>'简介'}>
          <Item>
            {props.title}
            {props.desc.split('\n').map(v=>(
              <Brief key={v}>{v}</Brief>
            ))}
            {props.money?(<Brief>薪资{props.money}</Brief>):null}
          </Item>
         </List>
         <WhiteSpace></WhiteSpace>
         <List>
           <Item onClick={this.logout}>退出登录</Item>
         </List>
        }
      </div>
    ) : <Redirect to={props.redirectTo}></Redirect>
  }
}

export default User
