
import React from 'react'
import { List, Checkbox, Button, WhiteSpace, WingBlank } from 'antd-mobile'
import './vote.less'

import fetch from '../../utils/fetch'

import imgNongyao from 'images/nongyao.webp'
import imgLangrensha from 'images/langrensha.webp'

const VOTE_URL_ADD = '/api/vote/add'

const CheckboxItem = Checkbox.CheckboxItem

class Vote extends React.Component {
  constructor(props) {
    super(props)
    // initial state
    this.state = {
      loading: false,
      dataSource: [
        { key: 0, label: '王者荣耀', checked: false },
        { key: 1, label: '篮球', checked: false },
        { key: 2, label: '足球', checked: false },
        { key: 3, label: '广场舞', checked: false },
      ]
    }
  }

  _handleChange = (index) => {
    const finalDataSource = this.state.dataSource.map((item, di) => {
      if (index !== di) {
        return item
      } else {
        return {
          ...item,
          checked: !item.checked
        }
      }
    })
    this.setState({
      dataSource: finalDataSource
    })
  }

  _handleSubmit = () => {
    const finalSelect = this.state.dataSource.filter(info => info.checked).map(data => data.key)
    fetch(VOTE_URL_ADD, finalSelect)
      .then(res => {
        location.replace('/success')
      })
  }

  render() {
    const { dataSource, loading } = this.state
    return (
      <div className='vote_page'>
        <div className='tacitly'>
          <p>内定项目 <span>就是这么火爆</span></p>
          <img src={imgNongyao} alt='nongyao' />
          <img src={imgLangrensha} alt='langrensha' />
        </div>
        <WhiteSpace size='lg' />
        <List renderHeader={() => '团建投票'}>
          {dataSource.map((item, index) => (
            <CheckboxItem key={item.key} checked={item.checked} onChange={() => this._handleChange(index)}>
              {item.label}
            </CheckboxItem>
          ))}
        </List>

        <WhiteSpace size='lg' />
        <WingBlank size='md'>
          <Button
            type='primary'
            loading={loading}
            disabled={dataSource.filter(item => item.checked).length === 0}
            onClick={this._handleSubmit}
          >提交</Button>
        </WingBlank>
      </div>
    )
  }
}

Vote.propTypes = {
}

export default Vote
