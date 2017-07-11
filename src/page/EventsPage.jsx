// @flow

import React, { Component } from "react"
import jsonp from "jsonp"
import styled from "styled-components"

import SECRET from "../util/SECRET"
import type { Meetup, StringLiteral } from "../types"
import MeetupList from "../component/MeetupList"

const StyledHeading = styled.h2`
  width: 100%;
  text-align: center;
  font-size: 2em;
  font-weight: bold;
  margin: 100px auto;
`

type State = {|
  apiUrl: StringLiteral,
  meetups: Array<Meetup>
|}

class EventsPage extends Component {
  state: State = {
    apiUrl: `https://api.meetup.com/2/events?key=${SECRET.MEETUP_API_KEY}&group_urlname=NEPA-js&sign=true`,
    meetups: []
  }
  componentDidMount() {
    jsonp(this.state.apiUrl, null, (err, data) => {
      if (err) {
        this.setState({ meetups: err })
      } else {
        this.setState({ meetups: data.results })
      }
    })
  }
  render() {
    return (
      <div>
        <StyledHeading>Upcoming Events</StyledHeading>
        <MeetupList meetups={this.state.meetups} />
      </div>
    )
  }
}

export default EventsPage
