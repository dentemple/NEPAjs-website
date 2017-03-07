import React, { Component } from 'react'

const MainContainer = (props) => {
  const style = {
    backgroundColor: '#222',
    height: 150,
    padding: 20,
    color: 'white'
  }
  return (
    <div style={style}>
      { props.children }
    </div>
  )
}

export default class Main extends Component {
  render () {
    return (
      <MainContainer>
        Main.js
      </MainContainer>
    )
  }
}
