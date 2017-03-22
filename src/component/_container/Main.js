import React from 'react'

import HeroImage from '../HeroImage'
import Body from '../Body'

const MainContainer = ({ children }) => {
  return (
    <div>
      { children }
    </div>
  )
}

const Main = () => {
  return (
    <MainContainer>
      <HeroImage />
      <Body />
    </MainContainer>
  )
}

export default Main
