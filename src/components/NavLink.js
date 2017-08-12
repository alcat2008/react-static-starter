import React from 'react'
import routes from '../routes'
import emitter from '../utils/emitter'

class NavLink extends React.Component {
  _handleClick = (e) => {
    e.preventDefault()
    const { href } = this.props
    // onRouteChange && onRouteChange(href);
    emitter.emit('route-change', href)
    window.history.pushState(
      null,
      routes[href].displayName,
      href
    )
  }

  render() {
    const { href, pathname, children } = this.props
    return (
      <a
        href={href}
        onClick={this._handleClick}
        className={href === pathname ? 'active-nav-link' : ''}
      >{children}</a>
    )
  }
}

export default NavLink
