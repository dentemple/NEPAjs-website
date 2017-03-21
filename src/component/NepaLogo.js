import React, { Component } from 'react'

import logo from '../css/img/nepajs-small.jpeg'

export default class NepaLogo extends Component {
  render () {
    const style = {
      width: `${this.props.width}`,
      height: `${this.props.height}`,
      margin: '0 auto'
    }
    return (
      <img 
        src={logo} 
        style={style} 
        className="img-responsive"
        alt='Logo for NEPA.js' />
    )
  }
}

NepaLogo.defaultProps = {
  width: '250px',
  height: 'auto'
};
