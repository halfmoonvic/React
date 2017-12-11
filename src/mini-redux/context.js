/**** React应用依赖组件 ****/
// core
import React, { Component } from 'react'
/******* 第三方 组件库 *****/
/**** 本地公用变量 公用函数 **/
/******* 本地 公用组件 *****/
/**** 当前组件的 子组件等 ***/

class NavBar extends Component {
  render() {
    return (
      <div>
        <p>导航栏</p>
        <p>navbar--{this.props.user}</p>
      </div>
    )
  }
}

class Sidebar extends Component {
  render() {
    return (
      <div>
        <p>侧边栏</p>
        <NavBar user={this.props.user}></NavBar>
      </div>
    )
  }
}

class TestContext extends Component {
  render() {
    const user = 'cs'
    return (
      <div>
        <p>我是{user}</p>
        <Sidebar user={user}></Sidebar>
      </div>
    )
  }
}

export default TestContext
