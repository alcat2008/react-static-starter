import React from 'react'

import { hidePreloader } from '../utils/preloader'

import '../styles/index.less'
import './style.less'

export default class App extends React.Component {
  componentDidMount() {
    hidePreloader()
  }
  render() {
    const { children } = this.props
    return (
      <div className='content'>{children}</div>
    )
  }
}
