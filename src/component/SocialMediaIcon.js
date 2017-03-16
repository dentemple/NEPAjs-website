import React, { Component } from 'react'
import FontAwesome from 'react-fontawesome'

const IconContainer = (props) => {
  const style = {
    color: 'white',
    textAlign: 'center',
    marginLeft: 20,
    marginRight: 20
  }
  return (
    <a style={style} className='btn' href={props.link}>
      { props.children }
    </a>
  )
}

export default class SocialMediaIcon extends Component {
  render () {
    const style = { width: '100%'}
    const { link, icon } = this.props
    return (
      <IconContainer link={link}>
        {/* 'name' shows an error, but still seems to work */}
        <FontAwesome name={icon} style={style} size='4x' />
      </IconContainer>
    )
  }
}

SocialMediaIcon.propTypes = {
  link: React.PropTypes.string,
  icon: React.PropTypes.string
}
