/**** React应用依赖组件 ****/
// core
import React, { Component } from 'react'
// redux
import { connect } from 'react-redux'
import { update } from 'store/actions'
// router
import { Redirect } from 'react-router-dom'
/******* 第三方 组件库 *****/
import { NavBar, InputItem, TextareaItem, Button } from 'antd-mobile';
/**** 本地公用变量 公用函数 **/
/******* 本地 公用组件 *****/
import AvatarSelector from 'component/avatar-selector/avatar-selector'
/**** 当前组件的 子组件等 ***/

@connect(
  state => state.user, { update }
)

class GeniusInfo extends Component {
  constructor(props) {
    super(props)
    this.state = {
      title: '',
      company: '',
      money: '',
      desc: '',
      avatar: ''
    }
  }
  handleChange(key, v) {
    this.setState({
      [key]: v
    })
  }
  render() {
    const path = this.props.location.pathname
    const redirect = this.props.redirectTo
    return (
      <div>
        {redirect && redirect !== path ? (<Redirect to={this.props.redirectTo}></Redirect>) : null}
        <NavBar mode="dark">牛人完善信息页</NavBar>
        <AvatarSelector
          selectAvatar={
            (imgname) => {
              this.setState({
                avatar: imgname
              })
            }
          }
        ></AvatarSelector>
        <InputItem
          onChange={v=>this.handleChange('title', v)}
        >求职岗位</InputItem>
        <TextareaItem
          rows={3}
          title='个人简介'
          autoHeight
          onChange={v=>this.handleChange('desc', v)}
        ></TextareaItem>
        <Button
          onClick={()=>{this.props.update(this.state)}}
          type='primary'
        >保存</Button>
      </div>
    )
  }
}

export default GeniusInfo
