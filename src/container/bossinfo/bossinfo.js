/**** React应用依赖组件 ****/
// core
import React, { Component } from 'react'
/******* 第三方 组件库 *****/
import { NavBar, InputItem, TextareaItem } from 'antd-mobile'
/**** 本地公用变量 公用函数 **/
/******* 本地 公用组件 *****/
import AvatarSelector from 'component/avatar-selector/avatar-selector'
/**** 当前组件的 子组件等 ***/

class BossInfo extends Component {
  constructor(props) {
    super(props)
    this.state = {
      title: '',
      company: '',
      money: '',
      desc: '',
      avatar: '',
      aa: "hehe"
    }
  }
  handleChange(key, val) {
    this.setState({
      [key]: val
    })
  }
  render() {
    return (
      <div>
        <NavBar mode="dark">Boss完善信息页面</NavBar>
        <AvatarSelector
          selectAvatar={(imgname) => {
            this.setState({
              avatar: imgname
            })
          }}
        ></AvatarSelector>
        <InputItem
          onChange={v=>this.handleChange('title', v)}
        >招聘职位</InputItem>
        <InputItem
          onChange={v=>this.handleChange('company', v)}
        >公司名称</InputItem>
        <InputItem
          onChange={v=>this.handleChange('money', v)}
        >职位薪资</InputItem>
        <TextareaItem
          title="职位要求"
          rows={3}
          autoHeight
          onChange={v=>this.handleChange('desc', v)}
        >职位要求</TextareaItem>
      </div>
    )
  }
}

export default BossInfo
