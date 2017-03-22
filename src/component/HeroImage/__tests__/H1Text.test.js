/* global it */
import React from 'react'
import { render } from 'enzyme'

import MyComponent from '../H1Text'

it('renders without crashing', () => {
  const div = document.createElement('div')
  render(<MyComponent />, div)
})
