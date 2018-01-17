
import React from 'react'
import { List, Checkbox, Button, WhiteSpace, WingBlank } from 'antd-mobile'
import './vote.less'

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

  render() {
    const { dataSource, loading } = this.state
    return (
      <div className='vote_page'>
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
          >提交</Button>
        </WingBlank>
      </div>
    )
  }
}

Vote.propTypes = {
}

export default Vote
