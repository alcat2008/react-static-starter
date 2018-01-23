import React, { Component } from 'react'
import { List } from 'antd-mobile'

import fetch from '../../utils/fetch'

const VOTE_URL_QUERY_COMMENTS = '/api/vote/queryComments'

const Item = List.Item

class Comments extends Component {
  constructor(props) {
    super(props)
    // initial state
    this.state = {
      comments: []
    }
  }

  componentWillMount() {
    fetch(VOTE_URL_QUERY_COMMENTS)
      .then(res => {
        this.setState({ comments: res })
      })
  }

  render() {
    const { comments } = this.state
    return (
      <div>
        <List renderHeader={() => '意见汇总'}>
          {
            comments.map((comment, index) => (
              <Item key={index}>{comment}</Item>
            ))
          }
        </List>
      </div>
    )
  }
}

export default Comments
