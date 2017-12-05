/**** React应用依赖组件 ****/
// core
import React, { Component } from 'react'
import { withRouter } from 'react-router-dom'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import { getUserList } from './../../redux/chatuser.redux'
/******* 第三方 组件库 *****/
import { Card, WingBlank } from 'antd-mobile'
/**** 本地公用变量 公用函数 **/
/******* 本地 公用组件 *****/
/**** 当前组件的 子组件等 ***/
@connect(
  state => state.chatuser, { getUserList }
)
@withRouter

class UserCard extends Component {
  static propTypes = {
    userlist: PropTypes.array.isRequired
  }
  handleClick(v) {
    this.props.history.push(`/chat/${v._id}`)
  }
  render() {
    return (
      <WingBlank>
        {this.props.userlist.map(v=>(
          v.avatar?<Card
              key={v._id}
              onClick={() => this.handleClick(v)}
              >
            <Card.Header
              title={v.user}
              thumb={require(`../img/${v.avatar}.png`)}
              extra={<span>{v.title}</span>}
            ></Card.Header>
            <Card.Body>
              {v.type==='boss'?(<div>公司：{v.company}</div>):null}
              {v.desc.split('\n').map(v=>(<div key={v}>{v}</div>))}
              {v.type==='boss'?(<div>薪资：{v.money}</div>):null}
            </Card.Body>
          </Card>:null
        ))}
      </WingBlank>
    )
  }
}

export default UserCard
