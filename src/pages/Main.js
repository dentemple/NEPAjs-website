import React, { Component } from 'react'

import MainHeader from '../component/MainHeader'
import MainContents from '../component/MainContents'

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
        <MainHeader />
        <MainContents />
      </MainContainer>
    )
  }
}
