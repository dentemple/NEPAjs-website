import React from 'react'
import styled from 'styled-components'

// For testing purposes only

const StyleWrapper = styled.div`
  background-color: #e6e6e6;
  font-size: 0.9em;
  margin: 20px;
  padding: 20px;
  border: solid 1px #999999;
  border-radius: 10px;
  text-align: left;
`

const RenderJSON = ({ json }) =>
  <StyleWrapper>
    {JSON.stringify(json, null, 2)}
  </StyleWrapper>

export default RenderJSON
