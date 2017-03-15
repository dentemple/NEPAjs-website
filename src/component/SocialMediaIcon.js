import React, { Component } from 'react'

const IconContainer = (props) => {
  const style = {
    backgroundColor: '#FFFFFF',
    backgroundRepeat: 'no-repeat',
    width: 60,
    height: 60,
    margin: 20,
    borderRadius: '20%',
    display: 'inline-block'
  }
  return (
    <div style={style}>
      { props.children }
    </div>
  )
}

export default class SocialMediaIcon extends Component {
  render () {
    return (
      <IconContainer>
        { this.props.image }
      </IconContainer>
    )
  }
}
