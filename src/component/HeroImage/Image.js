import React from 'react'
import image from '../../css/img/pic-by-markus-spiske.jpg'

const ImageWrapper = (props) => {
  const style = {
    background: `url(${image}) no-repeat center center`,
    backgroundSize: 'cover',
    position: 'relative',
    height: 750,
    marginTop: 0
  }
  return (
    <div style={style}>
      { props.children }
    </div>
  )
}

const Image = ({ children }) => <ImageWrapper>{ children }</ImageWrapper>

export default Image
