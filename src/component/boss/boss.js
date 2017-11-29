/**** React应用依赖组件 ****/
// core
import React, { Component } from 'react'
import { Card, WhiteSpace, WingBlank } from 'antd-mobile'
/******* 第三方 组件库 *****/
import axios from 'axios'
/**** 本地公用变量 公用函数 **/
/******* 本地 公用组件 *****/
/**** 当前组件的 子组件等 ***/

class Boss extends Component {
  constructor(props) {
    super(props)
    this.state = {
      data: []
    }
  }
  componentDidMount() {
    axios.get('/user/list?type=genius').then(res => {
      if (res.data.code === 0) {
        this.setState({
          data: res.data.data
        })
      }
    })
  }
  render() {
    return (
      <WingBlank>
        {this.state.data.map(v=>(
          v.avatar?<Card key={v._id}>
            <Card.Header
              title={v.user}
              thumb={require(`../img/${v.avatar}.png`)}
              extra={<span>{v.title}</span>}
            ></Card.Header>
            <Card.Body>{v.desc.split('\n').map(v=>(
              <div>{v}</div>
            ))}</Card.Body>
          </Card>:null
        ))}
      </WingBlank>
    )
  }
}

export default Boss
