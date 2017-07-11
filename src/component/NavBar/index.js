// @flow

import React, { Component } from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";

import nepajsLogo from "./nepajs-logo.png";
import tecbridgeLogo from "./tecbridge-logo.png";

const StyledNav = styled.nav`
  display: flex;
  justify-content: space-between;
  height: 65px;
`;
const NavSection = styled.ul`
  display: flex;
  list-style: none;
  margin: 15px 0 0 30px;
  padding: 0;
`;
const Logo = styled.img`
  max-width: 60%;
  height: auto;
`;

class NavBar extends Component {
  render() {
    return (
      <StyledNav>
        <NavSection>
          <li>
            <Link to="/">
              <Logo src={nepajsLogo} />
            </Link>
          </li>
        </NavSection>
        <NavSection>
          <li>
            <a href="http://www.tecbridgepa.org/">
              <Logo src={tecbridgeLogo} />
            </a>
          </li>
        </NavSection>
      </StyledNav>
    );
  }
}

export default NavBar;
