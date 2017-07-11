// @flow

import React from "react"
import { Grid, Row, Col } from "react-flexbox-grid"
import styled from "styled-components"
import type { Meetups } from "../../types"

import MeetupLogo from "./MeetupLogo"
import MeetupHeader from "./MeetupHeader"
import MeetupDescription from "./MeetupDescription"

const AllMeetups = styled.section`
  margin: 20px;
  width: 100%;
`
const Individual = styled.article`
  margin: 50px auto;
  max-width: 1000px;
`

const MeetupList = ({ meetups }: { meetups: Meetups }) =>
  <AllMeetups>
    <Grid>
      {meetups.map((meetup, index) => {
        console.log(meetup)
        return <MeetupListing key={index} meetup={meetup} />
      })}
    </Grid>
  </AllMeetups>

const MeetupListing = ({ meetup }) =>
  <Individual>
    <Row>
      <Col xs={12} sm={3}>
        <a href={meetup.event_url}>
          <MeetupLogo />
        </a>
      </Col>
      <Col xs={12} sm={9}>
        <MeetupHeader meetup={meetup} />
      </Col>
    </Row>
    <Row>
      <MeetupDescription meetup={meetup} />
    </Row>
  </Individual>

export default MeetupList
