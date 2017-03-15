import React from 'react'

const HorizontalLine = (props) => {
  const style = {
    padding: 0,
    border: 'none',
    borderTop: 'medium double',
    textAlign: 'center',
    maxWidth: '40%'
  }
  return <hr style={style} />
}

export default HorizontalLine
