/**** React应用依赖组件 ****/
// core
import React, { Component } from 'react'
import propTypes from 'prop-types'
/******* 第三方 组件库 *****/
/**** 本地公用变量 公用函数 **/
/******* 本地 公用组件 *****/
/**** 当前组件的 子组件等 ***/

// context 是全局的，组件里声明，所有子元素可以直接获取

class NavBar extends Component {
  static contextTypes = {
    user: propTypes.string
  }
  render() {
    return (
      <div>
        <p>导航栏--{this.context.user}</p>
      </div>
    )
  }
}

class Sidebar extends Component {
  render() {
    return (
      <div>
        <p>有了 context 侧边栏，不需要中间的侧边栏来传递值了</p>
        <NavBar></NavBar>
      </div>
    )
  }
}

class TestContext extends Component {
  static childContextTypes = {
    user: propTypes.string
  }
  constructor(props) {
    super(props)
    this.state = {
      user: 'super-cs'
    }
  }
  getChildContext() {
    return this.state
  }
  render() {
    return (
      <div>
        <p>我是{this.state.user}</p>
        <Sidebar></Sidebar>
      </div>
    )
  }
}

export default TestContext
