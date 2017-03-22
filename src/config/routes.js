import React from 'react'
import { Router, Route, IndexRoute, hashHistory } from 'react-router'

import App from '../component/_container/App'
import Main from '../component/_container/Main'

const routes = (
  <Router history={hashHistory}>
    <Route path='/' component={App}>
      <IndexRoute component={Main} />
    </Route>
  </Router>
)

export default routes
