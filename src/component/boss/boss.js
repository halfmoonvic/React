/**** React应用依赖组件 ****/
// core
import React, { Component } from 'react'
import { Card, WhiteSpace, WingBlank } from 'antd-mobile'
// redux
import { connect } from 'react-redux'
import { getUserList } from './../../redux/chatuser.redux'
/******* 第三方 组件库 *****/
import axios from 'axios'
/**** 本地公用变量 公用函数 **/
/******* 本地 公用组件 *****/
/**** 当前组件的 子组件等 ***/

@connect(
  state => state.chatuser, { getUserList }
)

class Boss extends Component {
  constructor(props) {
    super(props)
    this.state = {
      data: []
    }
  }
  componentDidMount() {
    this.props.getUserList('genius')
  }
  render() {
    return (
      <WingBlank>
        {this.props.userlist.map(v=>(
          v.avatar?<Card key={v._id}>
            <Card.Header
              title={v.user}
              thumb={require(`../img/${v.avatar}.png`)}
              extra={<span>{v.title}</span>}
            ></Card.Header>
            <Card.Body>{v.desc.split('\n').map(v=>(
              <div key={v}>{v}</div>
            ))}</Card.Body>
          </Card>:null
        ))}
      </WingBlank>
    )
  }
}

export default Boss
