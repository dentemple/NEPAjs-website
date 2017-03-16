import React, { Component } from 'react'

import HeaderImage from './HeaderImage'
import HeaderH1 from './HeaderH1'
import HeaderH2 from './HeaderH2'
import HeaderP from './HeaderP'
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
  const meetupLink = 'https://www.meetup.com/NEPA-js/'
  const twitterLink = 'https://twitter.com/hashtag/NEPAjs?src=hash'
  const slackLink = 'nepatech.slack.com'
  return (
    <div className='row'>
      <SocialMediaIcon icon='meetup' link={meetupLink} />
      <SocialMediaIcon icon='twitter' link={twitterLink} />
      <SocialMediaIcon icon='slack' link={slackLink} />
    </div>
  )
}

export default class MainHeader extends Component {
  render () {
    return (
      <HeaderImage>
        <TextContainer>
          <HeaderP />
          <HeaderH1 />
          <HeaderH2 />
          <HorizontalLine />
          <SocialMediaIcons />
        </TextContainer>
      </HeaderImage>
    )
  }
}
