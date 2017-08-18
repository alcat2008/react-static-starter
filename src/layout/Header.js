import React from 'react'
import NavLink from '../components/NavLink'
import logo from 'images/cloudy.png'

class Header extends React.Component {
  constructor(props) {
    super(props)
    // initial state
    this.state = {}
  }

  render() {
    return (
      <header id='header'>
        <img className='logo' src={logo} alt='logo' />
        <div id='nav' key='nav'>
          <NavLink {...this.props} href='/'>Home</NavLink>
          <NavLink {...this.props} href='/foo'>Foo</NavLink>
          <NavLink {...this.props} href='/about'>About</NavLink>
        </div>
      </header>
    )
  }
}

export default Header
