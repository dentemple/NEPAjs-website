// @flow

import React from "react"
import { Grid } from "react-flexbox-grid"
import styled from "styled-components"

import BigText from "./BigText"
import SmallText from "./SmallText"
import JoinButton from "./JoinButton"

const StyledSection = styled.section`
  width: 100%;
  padding-top: 15%;
  text-align: center;
  font-size: 1.3em;
  font-weight: bold;
  color: #ffffff;
  text-shadow: 0 0 10px rgba(0, 0, 0, 0.72), 0 0 15px rgba(0, 0, 0, 0.45);
`

const CallToAction = () =>
  <StyledSection>
    <Grid>
      <SmallText />
      <BigText />
      <JoinButton />
    </Grid>
  </StyledSection>

export default CallToAction
