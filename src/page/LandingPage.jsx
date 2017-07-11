// @flow

import React, { Component } from "react"

import HeroImage from "../component/HeroImage"
import CallToAction from "../component/CallToAction"

class Landing extends Component {
  render() {
    return (
      <HeroImage>
        <CallToAction />
      </HeroImage>
    )
  }
}

export default Landing
