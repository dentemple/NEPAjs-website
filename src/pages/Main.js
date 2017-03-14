import React, { Component } from 'react'

import SpinningLogo from '../component/SpinningLogo'
import NepaLogo from '../component/NepaLogo'
import Header from '../component/Header'

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
