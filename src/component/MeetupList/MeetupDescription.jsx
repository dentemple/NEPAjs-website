// @flow

import React from "react"
import { Row, Col } from "react-flexbox-grid"
import styled from "styled-components"
import type { Meetup } from "../../types"

const StyledDescription = styled.small``

const MeetupDescription = ({ meetup }: { meetup: Meetup }) =>
  <StyledDescription>
    <Row>
      <Col xs={12}>
        <div dangerouslySetInnerHTML={{ __html: meetup.description }} />
      </Col>
    </Row>
  </StyledDescription>

export default MeetupDescription
