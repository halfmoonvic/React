/**** React应用依赖组件 ****/
// core
import React, { Component } from 'react'
/******* 第三方 组件库 *****/
/**** 本地公用变量 公用函数 **/
/******* 本地 公用组件 *****/
/**** 当前组件的 子组件等 ***/

export default function imoocForm(Comp) {
  return class WrapperComp extends Component {
    constructor(props) {
      super(props)
      this.state = {}
      this.handleChange = this.handleChange.bind(this)
    }
    handleChange(key, val) {
      this.setState({
        [key]: val
      })
    }
    render() {
      return <Comp handleChange={this.handleChange} state={this.state} {...this.props}></Comp>
    }
  }
}
