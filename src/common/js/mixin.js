/**** React应用依赖组件 ****/
// core
import React, { Component } from 'react'
/******* 第三方 组件库 *****/
/**** 本地公用变量 公用函数 **/
/******* 本地 公用组件 *****/
/**** 当前组件的 子组件等 ***/

export default function handleForm(Comp) {
  return class wrapperComp extends Component {
    constructor(props) {
      super(props)

      this.state = {
        user: '',
        pwd: '',
        type: 'genius'
      }

      this.handleChange = this.handleChange.bind(this)
    }
    handleChange(key, v) {
      this.setState({
        [key]: v
      })
    }
    render() {
      return (
        <Comp {...this.props} handleChange={this.handleChange} state={this.state}></Comp>
      )
    }
  }
}
