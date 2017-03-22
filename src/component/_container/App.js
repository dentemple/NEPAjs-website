import React from 'react'

import '../../css/bootstrap/bootstrap.min.css'
import '../../css/index.css'

const AppContainer = ({ children }) => {
  const style = {
    color: '#333333'
  }
  return (
    <div style={style}>
      { children }
    </div>
  )
}

const App = ({ children }) => <AppContainer>{ children }</AppContainer>

export default App
