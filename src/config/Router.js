import React from 'react'
import { Router, Route, IndexRoute, hashHistory } from 'react-router'

import App from '../component/App'
import Main from '../component/Main'

const router = (
  <Router history={hashHistory}>
    <Route path='/' component={App}>
      <IndexRoute component={Main} />
    </Route>
  </Router>
)

export default router
