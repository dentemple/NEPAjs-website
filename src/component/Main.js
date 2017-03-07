import React, { Component } from 'react'

import SpinningLogo from './SpinningLogo'
import NepaLogo from './NepaLogo'
import Header from './Header'

const MainContainer = (props) => {
  return (
    <div>
      { props.children }
    </div>
  )
}

export default class Main extends Component {
  render () {
    return (
      <MainContainer>
        <Header />
        <NepaLogo />
        <SpinningLogo />
      </MainContainer>
    )
  }
}
