import React, { Component } from 'react'

import '../css/SpinningLogo.css'
import logo from '../css/img/logo.svg'

export default class SpinningLogo extends Component {
  render () {
    return (
      <img src={logo} className='React-logo' alt='React.js Logo' />
    )
  }
}
