// @flow

import React, { Component } from "react"

import HeroImage from "../component/HeroImage"
import CallToAction from "../component/CallToAction"

class Landing extends Component {
  render() {
    return (
      <div>
        <HeroImage>
          <CallToAction />
        </HeroImage>
      </div>
    )
  }
}

export default Landing
