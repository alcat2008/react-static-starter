
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

// expose React for __DEV__
if (__DEV__) {
  window.React = React
}
