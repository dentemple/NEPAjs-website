import React from 'react'

const TextContainer = (props) => {
  const style = {
    fontWeight: 700,
    fontSize: '2.5em'
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

const HeaderH2 = (props) => <TextContainer><Text /></TextContainer>

export default HeaderH2
