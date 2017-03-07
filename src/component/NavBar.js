import React, { Component } from 'react'

import NepaLogo from './NepaLogo'

const NavBarLinks = (props) => {
  return (
    <div className='collapse navbar-collapse' id='bs-example-navbar-collapse-1'>
      <ul className='nav navbar-nav navbar-right'>
        <li>
          <MenuLink link='#about'>About</MenuLink>
        </li>
      </ul>
    </div>
  )
}

const MenuLink = (props) => <a href='`${props.link}`'>{ props.children }</a>
const BrandLink = (props) => <a className='navbar-brand topnav' href='#'>{ props.children }</a>
const IconBar = (props) => <span className='icon-bar' />

const NavBarContainer = (props) => {
  return (
    <nav className='navbar navbar-default navbar-fixed-top topnav'>
      <div className='container topnav'>
        { props.children }
      </div>
    </nav>
  )
}

const HamburgerMenu = (props) => {
  return (
    <button type='button' className='navbar-toggle' dataToggle='collapse' dataTarget='#bs-example-navbar-collapse-1'>
      <span className='sr-only'>Toggle navigation</span>
      <IconBar />
      <IconBar />
      <IconBar />
    </button>
  )
}

const NavBarHeader = (props) => {
  return (
    <div className='navbar-header'>
      <HamburgerMenu />
      <BrandLink>
        <NepaLogo />
      </BrandLink>
    </div>
  )
}

export default class NavigationBar extends Component {
  render () {
    return (
      <NavBarContainer>
        <NavBarHeader />
        <NavBarLinks />
      </NavBarContainer>
    )
  }
}
