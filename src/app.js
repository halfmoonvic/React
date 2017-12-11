import React from 'react'

// mini-redux 直接引用文件执行 其中的代码
// import './mini-redux/test-miniredux.js'

import { connect } from 'react-redux'
import { setAdd, setRemove } from './mini-redux/test-miniredux.js'

class App extends React.Component {
  render() {
    console.log(this.props)
    return (
      <div>
        <h2>现在的数值是 {this.props.num}</h2>
        <button onClick={() => this.props.setAdd(2)}>加</button>
        <button onClick={() => this.props.setRemove(3)}>减</button>
      </div>
    )
  }
}

App = connect(
  state => ({ num: state }), { setAdd, setRemove }
)(App)

export default App
