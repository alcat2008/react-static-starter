import React from 'react'
import {
  BrowserRouter as Router,
  Route,
} from 'react-router-dom'

import { Home, Welcome, Vote, Success, Statistics, StatisticsBar, StatisticsPolar, Comments } from './pages'

import { bundle } from './app/bundle'

export default () => (
  <Router>
    <div>
      <Route exact path='/' component={Home}/>
      <Route exact path='/welcome' component={Welcome}/>
      <Route exact path='/vote' component={Vote}/>
      <Route exact path='/success' component={Success}/>
      <Route exact path='/statistics' component={bundle(Statistics)}/>
      <Route exact path='/statistics/bar' component={bundle(StatisticsBar)}/>
      <Route exact path='/statistics/polar' component={bundle(StatisticsPolar)}/>
      <Route exact path='/comments' component={bundle(Comments)}/>
    </div>
  </Router>
)
