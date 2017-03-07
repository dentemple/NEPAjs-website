import React, { Component } from 'react'

import logo from '../css/img/logo.svg'

import '../css/App.css'

class App extends Component {
  render () {
    return (
      <AppContainer>
        <div className='App-header'>
          <img src={logo} className='App-logo' alt='logo' />
          <h2>Welcome to React</h2>
        </div>
        <p className='App-intro'>
          To get started, edit <code>src/App.js</code> and save to reload.
        </p>
      </AppContainer>
    )
  }
}

const AppContainer = (props) => {
  return (
    <div className='App'>
      { props.children }
    </div>
  )
}

export default App