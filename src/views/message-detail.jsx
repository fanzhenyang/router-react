import React, {Component} from 'react'

export default class MessageDetail extends Component {

  state = {
    allMessages: [
      {
        id: 1,
        title: 'messgae001',
        content: '孩子'
      },
      {
        id: 3,
        title: 'messgae003',
        content: '母亲'
      },
      {
        id: 5,
        title: 'messgae005',
        content: '父亲'
      },
      {
        id: 6,
        title: 'messgae006',
        content: 'wife'
      }
    ]
  }

  render () {
    const {allMessages} = this.state
    // 得到请求参数中得id
    const {id} = this.props.match.params // 获取到字符串的原因
    // debugger
    // 查询得到对应得message
    const message = allMessages.find((m) => m.id === id * 1) // 返回第一个结果为true的数组元素

    return (
      <ul>
          <li>ID: {message.id}</li>
          <li>TITLE: {message.title}</li>
          <li>CONTENT: {message.content}</li>
      </ul>
    )
  }
}