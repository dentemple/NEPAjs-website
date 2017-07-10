// @flow

import React from "react"
import { Route, Switch } from "react-router-dom"
import Loadable from "react-loadable"
import "./util/injectCSS"

import PageLoading from "./page/PageLoading"
import asyncComponent from "./util/AsyncComponent"

const AsyncLandingPage = Loadable({
  loader: () => import("./page/LandingPage"),
  loading: PageLoading
})
const AsyncGlobalContainer = asyncComponent(() =>
  import("./page/GlobalContainer")
)
const AsyncPageNotFound = asyncComponent(() => import("./page/PageNotFound"))

const App = () =>
  <AsyncGlobalContainer>
    <Switch>
      <Route exact path="/" component={AsyncLandingPage} />
      <Route component={AsyncPageNotFound} />
    </Switch>
  </AsyncGlobalContainer>

export default App
