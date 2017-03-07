import React, { Component } from 'react'

import logo from '../css/img/nepajs-small.jpeg'

export default class NepaLogo extends Component {
  render () {
    const style = {
      maxHeight: '150%'
    }
    return (
      <img src={logo} style={style} alt='NEPA.js logo' />
    )
  }
}
