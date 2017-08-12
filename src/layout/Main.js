import React from 'react'

import Header from './Header'
import Footer from './Footer'
import { hidePreloader } from '../utils/preloader'

import '../styles/index.less'

export default class App extends React.Component {
  componentDidMount() {
    hidePreloader()
  }
  render() {
    const { children, ...restProps } = this.props
    return (
      <div>
        <Header {...restProps} />
        <div className='content'>{children}</div>
        <Footer />
      </div>
    )
  }
}
