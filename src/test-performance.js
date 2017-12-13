/**** React应用依赖组件 ****/
// core
import React, { Component } from 'react'


// 通过 shouldComponentUpdate 来判断是否 执行 render
class Test extends Component {
  constructor(props) {
    super(props)
    console.log(props)
  }
  shouldComponentUpdate(nextProps, nextState) {
    // 这个值相当于最新的值
    console.log(nextProps)
    // 这个值相当于老的值
    console.log(this.props.num)
    if (nextProps.num === this.props.num) {
      return false
    }
    return true
  }
  render() {
    return (
      <div>
        <h2>Test组件，是否加载: {this.props.num}</h2>
        <p>有了shouldComponentUpdate之后，渲染耗时 19毫秒</p>
        <p>return false 的时候 5微妙</p>
      </div>
    )
  }
}

class Performance extends Component {
  constructor(props) {
    super(props)
    this.state = {
      localNum: 0,
      transferNum: 10
    }

    this.handleLocal = this.handleLocal.bind(this)
    this.handleTransfer = this.handleTransfer.bind(this)
  }
  handleLocal() {
    this.setState({
      localNum: this.state.localNum + 1
    })
  }
  handleTransfer() {
    this.setState({
      transferNum: this.state.transferNum + 1
    })
  }
  render() {
    return (
      <div>
        <h2>Performance父组件: {this.state.localNum}</h2>
        <button onClick={this.handleLocal}>localNum值</button>
        <button onClick={this.handleTransfer}>transferNum值</button>
        <br/>
        <Test num={this.state.transferNum}></Test>
      </div>
    )
  }
}

export default Performance
