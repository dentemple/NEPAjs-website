import React, { Component } from 'react'

import headerImage from '../css/img/pic-by-markus-spiske.jpg'

const HeaderContainer = (props) => {
  const style = {
    backgroundImage: `url(${headerImage})`,
    backgroundSize: 'cover',
    height: 750,
  }
  return (
    <div style={ style }>
      { props.children }
    </div>
  )
}

export default class Header extends Component {
  render () {
    return (
      <HeaderContainer>
        <h1 className='title-text'>Page Header</h1>
      </HeaderContainer>
    )
  }
}
