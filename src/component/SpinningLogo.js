import React, { Component } from 'react'

import logo from '../css/img/logo.svg'
import '../css/SpinningLogo.css'

export default class App extends Component {
  render () {
    return (
      <img src={logo} className='React-logo' alt='logo' />
    )
  }
}
