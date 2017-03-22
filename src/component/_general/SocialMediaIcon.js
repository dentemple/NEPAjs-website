import React from 'react'
import FontAwesome from 'react-fontawesome'

const IconContainer = ({ children, link, color }) => {
  const style = {
    color: `${color}`,
    textAlign: 'center',
    marginLeft: 20,
    marginRight: 20
  }
  return (
    <a style={style} className='btn' href={link}>
      { children }
    </a>
  )
}

IconContainer.PropTypes = {
  link: React.PropTypes.string,
  color: React.PropTypes.string
}

const SocialMediaIcon = ({ icon, link, color, size }) => {
  const style = {
    width: '100%'
  }
  return (
    <IconContainer link={link} color={color}>
      <FontAwesome name={icon} style={style} size={size} />
    </IconContainer>
  )
}

SocialMediaIcon.propTypes = {
  icon: React.PropTypes.string,
  link: React.PropTypes.string,
  color: React.PropTypes.string,
  size: React.PropTypes.string
}

export default SocialMediaIcon
