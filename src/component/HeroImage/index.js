import React from 'react'

import Image from './Image'
import H1Text from './H1Text'
import H2Text from './H2Text'
import PText from './PText'
import HorizontalLine from './HorizontalLine'
import SocialMediaIcon from '../_general/SocialMediaIcon'

const TextWrapper = ({ children }) => {
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
    <header style={style}>
      { children }
    </header>
  )
}

const SocialMediaIcons = () => {
  const meetupLink = 'https://www.meetup.com/NEPA-js/'
  const twitterLink = 'https://twitter.com/hashtag/NEPAjs?src=hash'
  const slackLink = 'nepatech.slack.com'
  return (
    <div className='row'>
      <SocialMediaIcon icon='meetup' link={meetupLink} color='white' size='4x' />
      <SocialMediaIcon icon='twitter' link={twitterLink} color='white' size='4x' />
      <SocialMediaIcon icon='slack' link={slackLink} color='white' size='4x' />
    </div>
  )
}

const HeroImage = () => {
  return (
    <Image>
      <TextWrapper>
        <PText />
        <H1Text />
        <H2Text />
        <HorizontalLine />
        <SocialMediaIcons />
      </TextWrapper>
    </Image>
  )
}

export default HeroImage
