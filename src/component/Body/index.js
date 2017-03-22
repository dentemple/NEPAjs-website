import React from 'react'

import NepaLogo from '../_general/NepaLogo'

const PageWrapper = ({ children }) => {
  const style = {
    maxWidth: 600,
    paddingTop: 100
  }
  return (
    <section style={style} className='container-fluid'>
      { children }
    </section>
  )
}

const Body = () => {
  return (
    <PageWrapper>
      <NepaLogo width='300px' height='auto' />
    </PageWrapper>
  )
}

export default Body
