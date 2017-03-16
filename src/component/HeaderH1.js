import React, { Component } from 'react'

const TextContainer = (props) => {
  const style = {
    fontFamily: "'Play', sans-serif",
    fontSize: '7em',
    marginTop: 0,
  }
  return (
    <h1 style={style}>
      { props.children }
    </h1>
  )
}

const Text = (props) => {
  return <span>NEPA.js</span>
}

export default class HeaderH1 extends Component {
  render () {
    return (
      <TextContainer>
        <Text />
      </TextContainer>
    )
  }
}
