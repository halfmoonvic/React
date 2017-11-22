/**** React应用依赖组件 ****/
// core
import React, { Component } from 'react'
/******* 第三方 组件库 *****/
/**** 本地公用变量 公用函数 **/
import './logo.scss'
/******* 本地 公用组件 *****/
/**** 当前组件的 子组件等 ***/
import logoImg from './job.png'

class Logo extends Component {
  render() {
    return (
      <div className="logo-container">
        <img src={logoImg} alt=""/>
      </div>
    )
  }
}

export default Logo
