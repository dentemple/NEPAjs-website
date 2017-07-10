// @flow

import React from "react"
import { Row, Col } from "react-flexbox-grid"

import TranslucentBg from "./TranslucentBg"

const BigText = () =>
  <Row>
    <Col xs={12}>
      <h1>
        <TranslucentBg>
          Join our community of developers and entrepreneurs
        </TranslucentBg>
      </h1>
    </Col>
  </Row>

export default BigText
