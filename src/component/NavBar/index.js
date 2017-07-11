// @flow

import React, { Component } from "react";
import styled from "styled-components";
import { NavLink } from "react-router-dom";

import tecbridgeLogo from "./tecbridge-logo.png";

const StyledNav = styled.nav`
  background-color: #ffffff;
  display: flex;
  justify-content: space-between;
  top: 0;
  height: 65px;
  width: 100%;
`;
const NavSection = styled.ul`
  display: flex;
  list-style: none;
  margin: 10px 0 0 20px;
  padding: 0;
`;
const Logo = styled.img`
  max-width: 60%;
  height: auto;
`;
const StyledTextLink = styled(NavLink)`
  color: #208075;
  text-decoration: none;
  font-weight: bold;
  margin: 0 10px;
`;

class NavBar extends Component {
  render() {
    return (
      <StyledNav>
        <NavSection>
          <li>
            <StyledTextLink to="/">Home</StyledTextLink>
          </li>
          <li>
            <StyledTextLink to="/events">Events</StyledTextLink>
          </li>
        </NavSection>
        <NavSection>
          <li>
            <a href="http://www.tecbridgepa.org/">
              <Logo src={tecbridgeLogo} alt="Logo for TECBridge" />
            </a>
          </li>
        </NavSection>
      </StyledNav>
    );
  }
}

export default NavBar;
