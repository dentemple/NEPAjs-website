// @flow

import React from "react"
import { Route, Switch } from "react-router-dom"
import Loadable from "react-loadable"
import "./util/injectCSS"

import GlobalContainer from "./page/GlobalContainer"
import PageLoading from "./page/PageLoading"
import asyncComponent from "./util/AsyncComponent"

const AsyncLandingPage = Loadable({
  loader: () => import("./page/LandingPage"),
  loading: PageLoading
})
const AsyncPageNotFound = asyncComponent(() => import("./page/PageNotFound"))

const App = () =>
  <GlobalContainer>
    <Switch>
      <Route exact path="/" component={AsyncLandingPage} />
      <Route component={AsyncPageNotFound} />
    </Switch>
  </GlobalContainer>

export default App
