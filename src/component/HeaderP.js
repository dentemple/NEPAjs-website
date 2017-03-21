import React from 'react'

const TextContainer = (props) => {
  const style = {
    fontWeight: 700,
    fontSize: '1.2em',
    marginBottom: 0
  }
  return (
    <p style={style}>
      { props.children }
    </p>
  )
}

const Text = (props) => <span>Northeast Pennsylvania</span>
const HeaderP = (props) => <TextContainer><Text /></TextContainer>

export default HeaderP
