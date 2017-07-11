// @flow

import React from "react"
import styled from "styled-components"

import image from "./nepajs-meetup-image.png"

const StyledImage = styled.img`
  height: 95px;
  width: auto;
  display: block;
  margin: auto;
  padding-bottom: 10px;
`

const MeetupLogo = () => <StyledImage src={image} />

export default MeetupLogo
