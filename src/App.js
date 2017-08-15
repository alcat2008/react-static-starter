import React from 'react'
import Main from './layout/Main'
import { Home } from './pages'
import routes from './routes'
import emitter from './utils/emitter'

export default class App extends React.Component {
  constructor(props) {
    super(props)
    // initial state
    this.state = {
      currentRoute: window.location.pathname,
    }
  }

  componentDidMount() {
    window.addEventListener('popstate', () => {
      this.setState({
        currentRoute: window.location.pathname,
      })
    })
    emitter.on('route-change', (value) => {
      this.setState({
        currentRoute: value,
      })
    })
  }

  _handleRouteChange = (value) => {
    this.setState({
      currentRoute: value,
    })
  }

  render() {
    const ChildView = routes[this.state.currentRoute] || Home
    return (
      <Main pathname={this.state.currentRoute} onRouteChange={this._handleRouteChange}>
        <ChildView />
      </Main>
    )
  }
}
