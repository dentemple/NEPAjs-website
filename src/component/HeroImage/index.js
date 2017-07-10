// @flow

import styled from "styled-components"
import image from "./artsy-startup.jpg"

const HeroImage = styled.div`
  background-image: url(${image});
  background-position: 50% 50%;
  background-repeat: no-repeat;
  background-attachment: fixed;
  -webkit-background-size: cover;
  -moz-background-size: cover;
  -o-background-size: cover;
  background-size: cover;
  background-color: #add8e6;
  background-blend-mode: multiply;
  overflow: hidden;
  position: relative;
  width: 100%;
  height: 600px;
`

export default HeroImage
