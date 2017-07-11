// @flow

import React from "react"
import { Row, Col } from "react-flexbox-grid"

import TranslucentBg from "./TranslucentBg"

const SmallText = () =>
  <Row>
    <Col xs={12}>
      <small>
        <TranslucentBg>Northeastern Pennsylvania</TranslucentBg>
      </small>
    </Col>
  </Row>

export default SmallText
