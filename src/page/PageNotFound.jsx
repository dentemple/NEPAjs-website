// @flow

import React, { Component } from "react"
import styled from "styled-components"
import { Link } from "react-router-dom"
import FaExclamation from "react-icons/lib/fa/exclamation"

const StyledPage = styled.section`
  margin: 50px;
  text-align: center;
`

class NotFound extends Component {
  render() {
    return (
      <StyledPage>
        <FaExclamation size={56} />
        <h2>Page Not Found (404)</h2>
        <p>
          <Link to="/">Return Home</Link>
        </p>
      </StyledPage>
    )
  }
}

export default NotFound
