import React, { Component } from 'react'
import { withRouter } from 'react-router-dom'

import imgWelcome from 'images/welcome.jpg'

class Welcome extends Component {
  _handleClick = () => {
    this.props.history.push('/vote')
  }

  render() {
    return (
      <div style={{ position: 'relative' }}>
        <img
          src={imgWelcome}
          style={{ width: '100%' }}
          alt='welcome'
          useMap='#vote'
        />
        <div style={{ width: '100%', height: '205px', position: 'absolute', bottom: '0', backgroundColor: 'transparent' }} onClick={this._handleClick}></div>
      </div>
    )
  }
}

export default withRouter(Welcome)
