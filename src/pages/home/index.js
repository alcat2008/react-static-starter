import React from 'react'
import { NavLink } from '../../components'
import './style.less'

// eslint-disable-next-line
export default class Home extends React.Component {
  render() {
    return (
      <div className='home-page'>
        <NavLink href='/foo'>go to foo</NavLink>
      </div>
    )
  }
}
