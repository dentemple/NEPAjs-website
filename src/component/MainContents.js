import React, { Component } from 'react'

import NepaLogo from './NepaLogo'

const ContentsContainer = (props) => {
  return (
    <div className='container-fluid'>
      { props.children }
    </div>
  )
}

export default class MainContents extends Component {
  render () {
    return (
      <ContentsContainer>
        Main Text
        <NepaLogo size='20' />
      </ContentsContainer>
    )
  }
}
