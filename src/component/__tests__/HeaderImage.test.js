/* global it */
import React from 'react'
import { shallow } from 'enzyme'

import MyComponent from '../HeaderImage'

it('renders without crashing', () => {
  shallow(<MyComponent />)
})

