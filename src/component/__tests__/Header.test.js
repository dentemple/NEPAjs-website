/* global it */
import React from 'react'
import { shallow } from 'enzyme'

import MyComponent from '../Header'

it('renders without crashing', () => {
  shallow(<MyComponent />)
})

