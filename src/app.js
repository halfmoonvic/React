import React from 'react'
import { connect } from 'react-redux'
import { addGun, removeGun, addGunAsync } from './index.redux.js'


class App extends React.Component {
  render() {
    console.log('渲染ing')
    return (
      <div>
        <h1>现在有极强{this.props.num}把</h1>
        <button onClick={this.props.addGun}>申请武器</button>
        <button onClick={ this.props.removeGun}>上交武器</button>
        <button onClick={this.props.addGunAsync}>拖两天在给</button>
      </div>
    )
  }
}

// 将 state属性 给到 props
const mapStatetoProps = (state) => {
  return {num: state}
}
// 将方法给到 props
const actionCreators = { addGun, removeGun, addGunAsync }

App = connect(mapStatetoProps, actionCreators)(App)

export default App
