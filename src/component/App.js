import React, { Component } from 'react'

import NavBar from './NavBar'

const AppContainer = (props) => {
  const style = {
    color: '#333333'
  }
  return (
    <div style={style}>
      { props.children }
    </div>
  )
}

export default class App extends Component {
  render () {
    return (
      <AppContainer>
        <NavBar />
        { this.props.children }
      </AppContainer>
    )
  }
}
