
import React from 'react'
import ReactDOM from 'react-dom'
import App from './App'

function initComponent() {
  ReactDOM.render(
    <App />,
    document.getElementById('root')
  )
}

initComponent()

// expose React and Perf for __DEV__
if (__DEV__) {
  const Perf = require('react-addons-perf') // eslint-disable-line global-require, import/no-extraneous-dependencies

  window.React = React
  window.Perf = Perf
}
