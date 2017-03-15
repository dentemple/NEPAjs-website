import React, { Component } from 'react'

import HeaderImage from './HeaderImage'
import NepaLogo from './NepaLogo'
import HeaderBigText from './HeaderBigText'
import HeaderSmallText from './HeaderSmallText'
import HorizontalLine from './HorizontalLine'
import SocialMediaIcon from './SocialMediaIcon'

const TextContainer = (props) => {
  const style = {
    fontFamily: '"Work Sans", sans-serif',
    color: '#FFFFFF',
    textShadow: '2px 2px 3px rgba(0, 0, 0, 0.6)',
    textAlign: 'center',
    width: '100%',
    position: 'absolute',
    bottom: '30%'
  }
  return (
    <div style={style}>
      { props.children }
    </div>
  )
}

const SocialMediaIcons = (props) => {
  return (
    <div className='row'>
      <SocialMediaIcon 
        image='S'
        link='' />
      <SocialMediaIcon 
        image='S'
        link='' />
      <SocialMediaIcon 
        image='S'
        link='' />
    </div>
  )
}

export default class MainHeader extends Component {
  render () {
    return (
      <HeaderImage>
        <TextContainer>
          <NepaLogo percentage='30' />
          <HeaderBigText />
          <HeaderSmallText />
          <HorizontalLine />
          <SocialMediaIcons />
        </TextContainer>
      </HeaderImage>
    )
  }
}
