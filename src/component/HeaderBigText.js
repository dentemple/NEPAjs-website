import React from 'react'

const TextContainer = (props) => {
  const style = {
    fontWeight: 700,
    fontSize: '3.3em'
  }
  return (
    <h1 style={style}>
      { props.children }
    </h1>
  )
}

const NBSpace = (props) => <span>&nbsp;</span>
const Text = (props) => {
  return (
    <span>
      A meetup group for JavaScript<NBSpace />enthusiasts
    </span>
  )
}

const HeaderBigText = (props) => <TextContainer><Text /></TextContainer>

export default HeaderBigText
