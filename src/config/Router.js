import React from 'react'
import { Router, Route, IndexRoute, hashHistory } from 'react-router'

import App from '../pages/App'
import Main from '../pages/Main'

const router = (
  <Router history={hashHistory}>
    <Route path='/' component={App}>
      <IndexRoute component={Main} />
    </Route>
  </Router>
)

export default router
