// @flow

/*
  Handles routing and providers. Utilizes Code Splitting:
  http://serverless-stack.com/chapters/code-splitting-in-create-react-app.html
*/

import React from "react"
import { Route, Switch } from "react-router-dom"
import Loadable from "react-loadable"

import asyncComponent from "./util/AsyncComponent"
import GlobalContainer from "./page/GlobalContainer"
import PageLoading from "./page/PageLoading"
import "./util/injectCSS"

const AsyncLandingPage = Loadable({
  loader: () => import("./page/LandingPage"),
  loading: PageLoading
})
const AsyncPageNotFound = asyncComponent(() => import("./page/PageNotFound"))
const AsyncEventsPage = asyncComponent(() => import("./page/EventsPage"))

const App = () =>
  <GlobalContainer>
    <Switch>
      <Route exact path="/" component={AsyncLandingPage} />
      <Route path="/events" component={AsyncEventsPage} />
      <Route component={AsyncPageNotFound} />
    </Switch>
  </GlobalContainer>

export default App
