// @flow

import React, { Component } from "react"

import HeroImage from "../component/HeroImage"
import CallToAction from "../component/CallToAction"

class Landing extends Component {
  render() {
    return (
      <div>
        <p>Partners: (links)</p>
        <HeroImage>
          <CallToAction />
        </HeroImage>
      </div>
    )
  }
}

export default Landing
