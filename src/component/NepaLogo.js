import React, { Component } from 'react'

import logo from '../css/img/nepajs-small.jpeg'

export default class NepaLogo extends Component {
  render () {
    const percentage = this.props.percentage || '30'
    const style = {
      width: `${percentage}%`,
      height: 'auto'
    }
    return (
      <img 
        src={logo} 
        style={style} 
        alt='Logo for NEPA.js' />
    )
  }
}
