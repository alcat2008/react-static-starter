import React from 'react'
import { NavLink } from '../../components'

import { Grid, Icon } from 'antd-mobile'

import './home.less'
import logo from 'images/cloudy.png'

// eslint-disable-next-line
export default class Home extends React.Component {
  render() {
    const data = [{
      href: '/vote',
      icon: 'check-circle'
    }]
    return (
      <div className='home_page'>
        <div className='title'>
          <img src={logo} alt='logo' />
          <p>信息技术部</p>
        </div>

        <Grid
          data={data}
          columnNum={3}
          renderItem={dataItem => (
            <NavLink href={dataItem.href}>
              <div className='grid_content'>
                <Icon type={dataItem.icon} size='lg' />
                <p>投票</p>
              </div>
            </NavLink>
          )}
        />
      </div>

    )
  }
}
