import React from 'react'

const TextWrapper = ({ children }) => {
  const style = {
    fontFamily: "'Play', sans-serif",
    fontSize: '7em',
    marginTop: 0
  }
  return (
    <h1 style={style}>
      { children }
    </h1>
  )
}

const Text = () => <span>NEPA.js</span>
const H1Text = () => <TextWrapper><Text /></TextWrapper>

export default H1Text
