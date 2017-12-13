/**** React应用依赖组件 ****/
// core
import React, { Component } from 'react'


// 通过 React.PureComponent 来直接进行 性能优化，只在必要时更新 Test 组件。无数据变化，根本就没有更新Test组件，更不用说 reder() 勾子了
class Test extends React.PureComponent {
  constructor(props) {
    super(props)
    console.log(props)
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
