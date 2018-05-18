import React, {Component} from 'react'
import {Route} from 'react-router-dom'

import MessageDetail from './message-detail'
import MyNavLink from '../components/MyNavLink'

export default class Message extends Component {

  state = {
    messages: []
  }

  componentDidMount () {
    // 模拟发送ajax请求异步获取数据
    setTimeout(() => {
      const messages = [
        {
          id: 1,
          title: 'messgae001'
        },
        {
          id: 3,
          title: 'messgae003'
        },
        {
          id: 5,
          title: 'messgae005'
        },
        {
          id: 6,
          title: 'messgae006'
        }
      ]
      // 更新状态
      this.setState({messages})
    }, 1000)
  }

  showDetail = (id) => {
    this.props.history.push(`/home/message/messagedetail/${id}`)
  }

  showDetail2 = (id) => {
    this.props.history.replace(`/home/message/messagedetail/${id}`)
  }

  back = () => {
    this.props.history.goBack()
  }

  forward = () => {
    this.props.history.goForward()
  }

  reqPage = () => {
    // 通过js进行页面跳转
    window.location = 'http://www.baidu.com'
  }

  render () {
    // params参数的意思
    const {messages} = this.state
    return (
      <div>
        <ul>
          {
            messages.map((item, index) => (
              <li key={item.id}>
                <MyNavLink to={`/home/message/messagedetail/${item.id}`} >{item.title}</MyNavLink>
                &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;<button onClick={() => this.showDetail(item.id)}>push()查看</button>
                &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;<button onClick={() => this.showDetail2(item.id)}>replace()查看</button>
              </li>
            ))
          }
        </ul>
        <p>
          <button onClick={this.back}>回退</button>
          <button onClick={this.forward}>前进</button>
        </p>
        <p>
          <button onClick={this.reqPage}>页面跳转</button>
        </p>
        <Route path={`/home/message/messagedetail/:id`} component={MessageDetail}/>
      </div>
    )
  }
}