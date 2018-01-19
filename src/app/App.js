import React from 'react'
import Main from '../layout/Main'
import Router from '../routes'

export default class App extends React.Component {
  render() {
    return (
      <Main>
        <Router />
      </Main>
    )
  }
}
