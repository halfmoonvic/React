/**** React应用依赖组件 ****/
// core
import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
/******* 第三方 组件库 *****/
import { TabBar } from 'antd-mobile'
/**** 本地公用变量 公用函数 **/
/******* 本地 公用组件 *****/
/**** 当前组件的 子组件等 ***/
import { withRouter } from 'react-router-dom'
@withRouter
@connect(
  state => state.chat
)

class NavLinkBar extends Component {
  static propTypes = {
    data: PropTypes.array.isRequired
  }
  render() {
    const navList = this.props.data.filter(v => !v.hide)
    const { pathname } = this.props.history.location
    return (
      <div>
        <TabBar>{navList.map(v=>(
          <TabBar.Item
            badge={v.path === '/msg' ? this.props.unread : 0}
            key={v.path}
            title={v.text}
            icon={{uri: require(`./img/${v.icon}.png`)}}
            selectedIcon={{uri: require(`./img/${v.icon}-active.png`)}}
            selected={pathname === v.path}
            onPress={()=>{
              this.props.history.push(v.path)
            }}
          >
          </TabBar.Item>
        ))}</TabBar>
      </div>
    )
  }
}

export default NavLinkBar
