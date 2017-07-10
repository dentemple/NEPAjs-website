// @flow

import React from "react"
import { Row, Col } from "react-flexbox-grid"
import styled from "styled-components"

import TranslucentBg from "./TranslucentBg"

const StyledText = styled.span`font-size: 1em;`

const SmallText = () =>
  <Row>
    <Col xs={12}>
      <StyledText>
        <TranslucentBg>Northeastern Pennsylvania</TranslucentBg>
      </StyledText>
    </Col>
  </Row>

export default SmallText
