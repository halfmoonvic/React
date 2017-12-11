import React from 'react'
// 通过 connect 来调用
import { connect } from 'react-redux'
import { setAdd, setRemove, setCheng, setChu } from './store/actions'
import { getAdd, getRemove, getCheng, getChu } from './store/async-actions'

class App extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      selfNum: 0
    }
  }
  shouldComponentUpdate(nextProps, nextState) {
    console.log(nextProps, nextState)
    if (nextProps.states.addRemoveCounter % 5 === 0 || nextProps.states.chengChuCounter % 3 === 0) {
      return true
    }
    return false
  }
  render() {
    console.log('render')
    return (
      <div>
        <h1>加减state：{this.props.states.addRemoveCounter}</h1>
        <h1>乘除state：{this.props.states.chengChuCounter}</h1>
        <h1>selfNum：{this.state.selfNum}</h1>
        <button onClick={() => this.props.setAdd(2)}>加</button>
        <button onClick={() => this.props.setRemove(2)}>减</button>
        <button onClick={() => this.props.setCheng(3)}>乘</button>
        <button onClick={() => this.props.setChu(2)}>除</button>
        <button onClick={() => { this.setState({selfNum: this.state.selfNum + 1}) }}>control self num</button>
      </div>
    )
  }
}

// 方式二 单提出来
const mapStateToProps = (state) => ({ states: state })
const mapDispatchToProps = { setAdd, setRemove, setCheng, setChu, getAdd, getRemove, getCheng, getChu }
App = connect(mapStateToProps, mapDispatchToProps)(App)

export default App
