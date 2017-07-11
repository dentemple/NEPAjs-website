// @flow

import React, { Component } from "react"
import jsonp from "jsonp"

import SECRET from "../util/SECRET"
import type { Meetups, ApiUrl } from "../types"
import MeetupList from "../component/MeetupList"

type State = {|
  apiUrl: ApiUrl,
  meetups: Meetups
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
        <MeetupList meetups={this.state.meetups} />
      </div>
    )
  }
}

export default EventsPage
