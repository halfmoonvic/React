/**** React应用依赖组件 ****/
// core
import React, { Component } from 'react'
import { Route, Switch } from 'react-router-dom'
import { connect } from 'react-redux'
import { getMsgList, getMsgRecv } from './../../store/actions.js'
/******* 第三方 组件库 *****/
import { NavBar } from 'antd-mobile'
/**** 本地公用变量 公用函数 **/
/******* 本地 公用组件 *****/
import NavLinkBar from 'component/navlink/navlink'
/**** 当前组件的 子组件等 ***/
import Boss from 'component/boss/boss'
import Genius from 'component/genius/genius'
import User from 'component/user/user'

function Msg() {
  return <h2>消息列表</h2>
}

@connect(
  state => state,
  { getMsgList, getMsgRecv }
)
class Dashboard extends Component {
  componentDidMount() {
    if (!this.props.chat.chatmsg.length) {
      this.props.getMsgList()
      this.props.getMsgRecv()
    }
  }
  render() {
    const user = this.props.user
    const pathname = this.props.location.pathname
    const navList = [{
      path: '/boss',
      text: '牛人',
      icon: 'boss',
      title: '牛人列表',
      component: Boss,
      hide: user.type === 'genius'
    }, {
      path: '/genius',
      text: 'boss',
      icon: 'job',
      title: 'BOSS列表',
      component: Genius,
      hide: user.type === 'boss'
    }, {
      path: '/msg',
      text: '消息',
      icon: 'msg',
      title: '消息列表',
      component: Msg
    }, {
      path: '/me',
      text: '我',
      icon: 'user',
      title: '个人中心',
      component: User
    }]
    return (
      <div>
        <NavBar mode="dark">{navList.find(v=>v.path===pathname).title}</NavBar>
        <div style={{marginTop: 45}}>
          <Switch>{
            navList.map(v=>(
              <Route key={v.path} path={v.path} component={v.component}></Route>
            ))
          }</Switch>
        </div>
        <NavLinkBar data={navList}></NavLinkBar>
      </div>
    )
  }
}

export default Dashboard
