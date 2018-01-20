
import React from 'react'
import { withRouter } from 'react-router-dom'
import { List, Radio, Button, WhiteSpace, WingBlank, Toast } from 'antd-mobile'
import './vote.less'

import fetch from '../../utils/fetch'

import imgNongyao from 'images/nongyao.webp'
import imgLangrensha from 'images/langrensha.webp'

const VOTE_URL_ADD = '/api/vote/add'

const RadioItem = Radio.RadioItem

export const Categoties = {
  indoor: '室内项目',
  esport: '电子竞技',
  outdoor: '户外活动',
  online: '桌游、推理',
}

export const DataSource = {
  indoor: [
    { key: 0, value: 'basketball', label: '篮球' },
    { key: 1, value: 'football', label: '足球' },
    { key: 2, value: 'volleyball', label: '排球' },
    { key: 3, value: 'badminton', label: '羽毛球' },
    { key: 4, value: 'table tennis', label: '乒乓球' },
    { key: 5, value: 'billiards', label: '桌球' },
    { key: 6, value: 'swim', label: '游泳' },
    { key: 7, value: 'rock climbing', label: '攀岩' },
    { key: 8, value: 'bowling', label: '保龄球' },
  ],
  esport: [
    { key: 0, value: 'wow', label: 'WOW' },
    { key: 1, value: 'dota', label: 'DOTA' },
    { key: 2, value: 'steam', label: '绝地逃生' },
  ],
  outdoor: [
    { key: 0, value: 'walking', label: '徒步' },
    { key: 1, value: 'cs', label: '真人 CS' },
  ],
  online: [
    { key: 0, value: 'sanguosha', label: '三国杀' },
    { key: 1, value: 'shuishiwodi', label: '谁是卧底' },
  ]
}

class Vote extends React.Component {
  constructor(props) {
    super(props)
    // initial state
    this.state = {
      loading: false,
      indoorValue: '',
      esportValue: '',
      outdoorValue: '',
      onlineValue: '',
    }
  }

  _handleChange = (category, index) => {
    this.setState({
      [category + 'Value']: DataSource[category][index].value
    })
  }

  _handleSubmit = () => {
    const { indoorValue, esportValue, outdoorValue, onlineValue } = this.state
    const finalSelect = {
      indoor: indoorValue,
      esport: esportValue,
      outdoor: outdoorValue,
      online: onlineValue,
    }

    this.setState({ loading: true }, () => {
      fetch(VOTE_URL_ADD, finalSelect)
        .then(res => {
          this.props.history.replace('/success')
          // location.replace('/success')
        })
        .catch(error => {
          this.setState({ loading: false })
          Toast.offline('请求失败： ' + error, 1)
        })
    })
  }

  render() {
    const { loading, indoorValue, esportValue, outdoorValue, onlineValue } = this.state
    return (
      <div className='vote_page'>
        <div className='tacitly'>
          <p>内定项目 <span>就是这么火爆</span></p>
          <img src={imgNongyao} alt='nongyao' />
          <img src={imgLangrensha} alt='langrensha' />
        </div>

        {
          Object.keys(Categoties).map(category => (
            <div key={category}>
              <WhiteSpace size='lg' />
              <List renderHeader={Categoties[category]}>
                {DataSource[category].map((item, index) => (
                  <RadioItem key={item.key} checked={this.state[`${category}Value`] === item.value} onChange={() => this._handleChange(category, index)}>
                    {item.label}
                  </RadioItem>
                ))}
              </List>
            </div>
          ))
        }

        <WhiteSpace size='lg' />
        <WingBlank size='md'>
          <Button
            type='primary'
            loading={loading}
            disabled={!(indoorValue && esportValue && outdoorValue && onlineValue)}
            onClick={this._handleSubmit}
          >提交</Button>
        </WingBlank>
      </div>
    )
  }
}

Vote.propTypes = {}

export default withRouter(Vote)
