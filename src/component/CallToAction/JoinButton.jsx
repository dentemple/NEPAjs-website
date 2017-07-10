// @flow

import React from "react"
import { Row, Col } from "react-flexbox-grid"
import styled from "styled-components"

const StyledButton = styled.button`
  display: inline-flex;
  -webkit-box-orient: horizontal;
  -webkit-box-direction: normal;
  flex-direction: row;
  -webkit-box-pack: center;
  justify-content: center;
  align-items: center;
  box-sizing: border-box;
  -webkit-appearance: none;
  border-radius: 3px;
  font-size: 0.8em;
  font-weight: 600;
  min-height: 36px;
  outline: 0;
  padding: 0 16px;
  vertical-align: middle;
  line-height: 1;
  margin: 16px;
  border: 1px solid rgba(0, 0, 0, .12);
  stroke: transparent;
  fill: #fff;
  color: #fff;
  background: #ed1c40;
  border-color: #ed1c40;
  box-shadow: 2px 2px 5px rgba(0, 0, 0, 10);
`

const StyledLink = styled.a`
  user-select: none;
  cursor: pointer;
  text-decoration: none;
`

const JoinButton = () => {
  const joinLink = "https://www.meetup.com/NEPA-js/join"
  return (
    <Row>
      <Col xs={12}>
        <StyledLink href={joinLink}>
          <StyledButton>Request to join Meetup Group</StyledButton>
        </StyledLink>
      </Col>
    </Row>
  )
}

export default JoinButton
