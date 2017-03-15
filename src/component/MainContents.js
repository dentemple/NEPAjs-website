import React, { Component } from 'react'

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
      </ContentsContainer>
    )
  }
}
