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
  color: #000000;
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
