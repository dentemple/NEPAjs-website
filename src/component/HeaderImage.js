import React, { Component } from 'react'

import image from '../css/img/pic-by-markus-spiske.jpg'

const ImageContainer = (props) => {
  const style = {
    background: `url(${image}) no-repeat center center`,
    backgroundSize: 'cover',
    position: 'relative',
    height: 750,
    marginTop: 0,
  }
  return (
    <div style={style}>
      { props.children }
    </div>
  )
}

export default class HeaderImage extends Component {
  render () {
    return (
      <ImageContainer>
        { this.props.children }
      </ImageContainer>
    )
  }
}
