import React from 'react'

const TextContainer = (props) => {
  const style = {
    fontWeight: 700,
    fontSize: '1.6em'
  }
  return (
    <p style={style}>
      { props.children }
    </p>
  )
}

const Text = (props) => <span>From Northeast Pennsylvania</span>
const HeaderSmallText = (props) => <TextContainer><Text /></TextContainer>

export default HeaderSmallText
