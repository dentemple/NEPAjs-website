import React from 'react'

const TextWrapper = ({ children }) => {
  const style = {
    fontWeight: 700,
    fontSize: '2.5em'
  }
  return (
    <h1 style={style}>
      { children }
    </h1>
  )
}

const NBSpace = () => <span>&nbsp;</span>
const Text = () => <span>A meetup group for JavaScript<NBSpace />enthusiasts</span>
const H2Text = () => <TextWrapper><Text /></TextWrapper>

export default H2Text
