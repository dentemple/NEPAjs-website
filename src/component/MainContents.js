import React, { Component } from 'react'

import NepaLogo from './NepaLogo'

const ContentsContainer = (props) => {
  const style = {
    maxWidth: 600,
    paddingTop: 100
  }
  return (
    <div style={style} className='container-fluid'>
      { props.children }
    </div>
  )
}

export default class MainContents extends Component {
  render () {
    return (
      <ContentsContainer>
        <NepaLogo width='300px' height='auto' />
      </ContentsContainer>
    )
  }
}
