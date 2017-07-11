// @flow

import React, { Component } from "react"

import HeroImage from "../component/HeroImage"
import CallToAction from "../component/CallToAction"
import EventsPage from "./EventsPage"

class Landing extends Component {
  render() {
    return (
      <div>
        <HeroImage>
          <CallToAction />
        </HeroImage>
        <EventsPage />
      </div>
    )
  }
}

export default Landing
