import React, { Component } from 'react'

import logo from '../css/img/nepajs-small.jpeg'

export default class NepaLogo extends Component {
  render () {
    const style = {
      width: `${this.props.size}%`,
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

NepaLogo.defaultProps = {
  size: '20'
};
