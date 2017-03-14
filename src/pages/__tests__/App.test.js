/* global it */
import React from 'react'
import { render, shallow } from 'enzyme'

import MyComponent from '../App'

it('renders without crashing', () => {
  const div = document.createElement('div')
  render(<MyComponent />, div)
})

it('renders without crashing', () => {
  shallow(<MyComponent />)
})

