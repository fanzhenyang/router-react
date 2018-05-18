import React, {Component} from 'react'

export default class News extends Component {

  state = {
    newsArray: ['news001', 'news002', 'news003']
  }

  render () {
    const {newsArray} = this.state
    return (
      <ul>
        {
          newsArray.map((item, index) => {
            return (<li key={index}>{item}</li>)
          })
        }
      </ul>
    )
  }
}