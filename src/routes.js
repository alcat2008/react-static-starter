import React from 'react'
import {
  BrowserRouter as Router,
  Route,
} from 'react-router-dom'

import { Home, Vote, Success, Statistics } from './pages'

import { bundle } from './app/bundle'

export default () => (
  <Router>
    <div>
      <Route exact path='/' component={Home}/>
      <Route exact path='/vote' component={Vote}/>
      <Route exact path='/success' component={Success}/>
      <Route exact path='/statistics' component={bundle(Statistics)}/>
    </div>
  </Router>
)
