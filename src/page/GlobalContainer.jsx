// @flow

import React, { Component } from "react"
import styled from "styled-components"

const StyledContainer = styled.div`
  font-size: 1.2em;
  font-family: 'Open Sans', sans-serif;
`

class GlobalContainer extends Component {
  render() {
    return (
      <StyledContainer>
        {this.props.children}
      </StyledContainer>
    )
  }
}

export default GlobalContainer
