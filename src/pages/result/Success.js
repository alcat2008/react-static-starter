import React, { PureComponent } from 'react'
import { Result, Icon } from 'antd-mobile'
import './success.less'

export default class Success extends PureComponent {
  render() {
    return (
      <div className='success_page' style={{ height: window.innerHeight }}>
        <Result
          img={<Icon type='check-circle' className='spe' style={{ fill: '#1F90E6' }} />}
          title='提交成功'
          message='所选择内容已成功提交'
        />
      </div>
    )
  }
}
