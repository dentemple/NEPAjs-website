// @flow

import React from "react"
import { Row, Col } from "react-flexbox-grid"
import styled from "styled-components"
import FaCalendar from "react-icons/lib/fa/calendar"
import FaMapMarker from "react-icons/lib/fa/map-marker"
import type { Meetup } from "../../types"
import { convertUtcToLocalDateString } from "../../util/helpers"

const StyledTitle = styled.h3`margin: 0;`

const StyledDetails = styled.span`
  font-family: monospace;
  color: #208075;
  margin: 0;
  padding-bottom: 10px;
  width: 90%;
`

const StyledIcon = styled.span`padding: 0 7px 5px 0;`

const MeetupHeader = ({ meetup }: { meetup: Meetup }) =>
  <div>
    <Row>
      <StyledTitle>
        {meetup.name}
      </StyledTitle>
    </Row>
    <hr />
    <Row>
      <StyledDetails>
        <Row>
          <Col xs={12} sm={5}>
            <StyledIcon>
              <FaCalendar />
            </StyledIcon>
            {convertUtcToLocalDateString(meetup.time)}
          </Col>
          <Col xs={12} sm={7}>
            <StyledIcon>
              <FaMapMarker />
            </StyledIcon>
            {`
              ${meetup.venue.address_1.toString()} 
              (${meetup.venue.city.toString()}, ${meetup.venue.state.toString()})
            `}
          </Col>
        </Row>
      </StyledDetails>
    </Row>
  </div>

export default MeetupHeader
