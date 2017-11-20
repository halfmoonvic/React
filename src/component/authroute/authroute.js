import React from 'react'
import axios from 'axios'
import { withRouter } from 'react-router-dom'
@withRouter

class AuthRoute extends React.Component {
  componentDidMount() {
    const publickList = ['/login', 'register']
    const pathname = this.props.location.pathname
    if (publickList.indexOf(pathname) > -1) {
      return null
    }
    // 获取用户信息
    axios.get('/user/info')
      .then((res) => {
        if (res.status === 200) {
          if (res.data.code === 0) {
            // 有登录信息的
          } else {
            console.log(this.props.history)
            this.props.history.push('/login')
          }
          console.log(res.data)
        }
      })
    // 是否登录
    // 现在 URL 地址 login 是不需要跳转的

    // 用户的type 身份是 boss还是牛人
    // 用户是否完善信息（选择头像 个人简介）
  }
  render() {
    return <h2>hehe</h2>
  }
}

export default AuthRoute
