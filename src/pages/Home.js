import React from 'react'
import NavLink from '../components/NavLink'

// eslint-disable-next-line
export default class Home extends React.Component {
  render() {
    return (
      <div>
        <NavLink href='/foo'>go to foo</NavLink>
      </div>
    )
  }
}
