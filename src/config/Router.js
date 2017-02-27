import React from 'react'
import { BrowserRouter, Match, Miss } from 'react-router'

import App from '../component/App'

const Router = () => {
  return (
    <BrowserRouter>
      <div>
        <Match exactly pattern='/' component={App} />
        <Miss component={App} />
      </div>
    </BrowserRouter>
  )
}

export default Router
