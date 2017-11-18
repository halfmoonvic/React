import React from 'react'
import { connect } from 'react-redux'
import { login, getUserData } from './auth.redux'
import { Redirect } from 'react-router-dom'

// 两个 reducers 每个 reducers 都有一个 state
// 合并 reducers
@connect(
  state => state.auth,
  {login, getUserData}
)

class Auth extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      data: [{}]
    }
  }
  componentDidMount() {
    console.log('DidMount')
    this.props.getUserData()
  }
  render() {
    console.log('render')
    return(
      <div>
        <h2>我的名字是{this.props.user}</h2>
        {this.props.isAuth ? <Redirect to='/dashboard'></Redirect> : null}
        <h2>你没有权限，需要登录</h2>
        <button onClick={this.props.login}>登录</button>
      </div>
    )
  }
}

export default Auth
