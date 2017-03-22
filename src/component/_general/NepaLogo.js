import React from 'react'
import logo from '../../css/img/nepajs-small.jpeg'

const NepaLogo = ({ width, height }) => {
  const style = {
    width: `${width}`,
    height: `${height}`,
    margin: '0 auto'
  }
  return (
    <img src={logo} style={style} className='img-responsive' alt='Logo for NEPA.js' />
  )
}

NepaLogo.defaultProps = {
  width: '250px',
  height: 'auto'
}

export default NepaLogo
