import React from 'react'
import { connect } from 'react-redux'
import { addGun, removeGun, addGunAsync } from './index.redux.js'


// 将 state属性 给到 props
// const mapStatetoProps = (state) => {
//   return {num: state}
// }
// 将方法给到 props
// const actionCreators = { addGun, removeGun, addGunAsync }
// App = connect(mapStatetoProps, actionCreators)(App)
// @connect(mapStatetoProps, actionCreators)
@connect(
  // 你要state什么属性放到props里
  state=>({num: state}),
  // 你要什么方法，放到props里，自动dispatch
  {addGun, removeGun, addGunAsync}
)

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


export default App
